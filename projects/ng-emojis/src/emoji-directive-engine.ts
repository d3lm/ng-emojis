import { some } from 'fp-ts/lib/Option';
import { parseEmojiDirectives } from './emoji-directive-parser';

type TemplateOperation = (template: string) => string;

const directiveMap: Record<string, string> = {
  '🙈': '*ngIf',
  '🔁': '*ngFor',
  '💅': 'ngStyle',
  '🍌': '(ngModel)'
};

export function updateDirectives(template: string, isInlineTemplate = false) {
  return parseEmojiDirectives(template)
    .chain(transformDirectives(template, isInlineTemplate))
    .getOrElse(template);
}

function transformDirectives(template: string, isInlineTemplate: boolean) {
  return (directives: Array<RegExpExecArray>) => {
    return getTemplateOperations(directives, isInlineTemplate).map(executeOperations(template));
  };
}

function getTemplateOperations(directives: Array<RegExpExecArray>, isInlineTemplate: boolean) {
  const operations = directives.map(([emoji]) => {
    const ngDirectiveName = directiveMap[emoji];
    return createReplacementOperation(emoji, ngDirectiveName);
  });

  return some(operations);
}

function executeOperations(template: string) {
  return (operations: Array<TemplateOperation>) => {
    return operations.reduce<string>((acc: string, operation: TemplateOperation) => {
      return operation(acc);
    }, template);
  };
}

function createReplacementOperation(fullMatch: string, replacement: string): TemplateOperation {
  return (s: string) => {
    return s.replace(fullMatch, replacement);
  };
}
