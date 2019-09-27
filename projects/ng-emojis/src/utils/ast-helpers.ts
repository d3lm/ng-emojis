import { tsquery } from '@phenomnomnominal/tsquery';
import { none, Option, some } from 'fp-ts/lib/Option';
import * as ts from 'typescript';

export function findNodes<T extends ts.Node>(node: ts.Node, query: string): Option<T[]> {
  const nodes = tsquery(node, query) as Array<T>;
  return nodes.length ? some(nodes) : none;
}
