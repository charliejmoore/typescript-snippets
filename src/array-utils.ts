export function flatten(array: any[]): any[] {
  return array.reduce((a: any, b: any) => Array.isArray(b) ? [...a, ...flatten(b)] : [...a, b], []);
}

export function removeFromArray(element: any, array: any[]): any[] {
  return array.filter(el => el !== element);
}

export function getRandomElement(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)];
}
