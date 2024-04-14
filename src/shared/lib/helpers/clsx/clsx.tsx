export type Mods = Record<string, boolean | string | undefined>;

export const clsx = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      ?.filter(([cls, value]) => Boolean(value))
      ?.map(([cls, value]) => cls),
  ]?.join(' ');
};
