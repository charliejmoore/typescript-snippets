
export class DateUtils {
  static days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  static getBeginningOfWeek(): Date {
    const today = new Date();
    const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
    return new Date(today.setDate(diff));
  }

  static getDatesForThisWeek(): string[] {
    const weekDays: string[] = [];
    const baseDate = this.getBeginningOfWeek();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' } as const;

    for (let i = 0; i < this.days.length; i++) {
        weekDays.push(baseDate.toLocaleDateString('en-US', options));
        baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  }
}
