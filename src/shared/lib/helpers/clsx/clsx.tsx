type Mods = Record<string,boolean | string>

export const clsx = (cls : string, mods?: Mods, additional?: string[]) : string =>{
return  [cls, ...additional,...Object.entries(mods)?.filter(([cls,value])=> Boolean(cls))?.map(([cls,value]) => cls)]?.join(' ');
}

