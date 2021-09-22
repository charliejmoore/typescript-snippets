export class ArrayUtils {
  static flatten(array: any[]): any[] {
    return array.reduce((a: any, b: any) => Array.isArray(b) ? [...a, ...this.flatten(b)] : [...a, b], []);
  }

  static removeFromArray(element: any, array: any[]): any[] {
    return array.filter(el => el !== element);
  }

  static getRandomElement(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
  }
}
