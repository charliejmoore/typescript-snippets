export class RandomUtils {
  static getRandomInRange(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
