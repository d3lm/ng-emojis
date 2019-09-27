import { none, some } from 'fp-ts/lib/Option';

const REGEX = /🙈|🔁|💅|🍌/g;

export function parseEmojiDirectives(template: string) {
  const emojis: Array<RegExpExecArray> = [];

  let match = null;

  do {
    match = REGEX.exec(template);

    if (match) {
      emojis.push(match);
    }
  } while (match);

  return emojis.length ? some(emojis) : none;
}
