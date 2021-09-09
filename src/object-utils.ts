export function arrayObjectsToObject(array: any, key: string): any[] {
  return array.reduce((a: any, b: any) => ({...a, [b[key]]: b }), {});
}
