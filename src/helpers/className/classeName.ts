export type Mode = Record<string, string | boolean>;

export function className(
  cls: string,
  mode: Mode,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
