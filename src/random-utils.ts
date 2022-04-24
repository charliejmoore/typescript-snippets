export class RandomUtils {
  static getRandomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  }
}
