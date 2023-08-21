declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
