import { none, some } from 'fp-ts/lib/Option';
import { loader } from 'webpack';
import { createModule } from './utils/module-helpers';
import { updateDirectives } from './emoji-directive-engine';

const TEMPLATE_REGEX = /(.+?)"((?:\\.|[^"\\])*)"/;

export default function transformHtmlLoader(source: string): string;
export default function transformHtmlLoader(this: loader.LoaderContext, source: string): string {
  if (this.cacheable) {
    this.cacheable();
  }

  return parseModule(source)
    .chain(([, moduleExport, template]) => {
      return some(template)
        .map(updateDirectives)
        .map(createModule(moduleExport));
    })
    .getOrElse(source);
}

function parseModule(source: string) {
  const results = TEMPLATE_REGEX.exec(source);
  return results ? some(results) : none;
}
