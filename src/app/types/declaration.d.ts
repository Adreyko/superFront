declare module '*.scss';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends string | number | symbol, T> = { [P in K]?: T };
