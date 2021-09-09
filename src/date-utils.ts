export function getBeginningOfWeek(): Date {
  const today = new Date();
  const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  return new Date(today.setDate(diff));
}

export const days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function getDatesForThisWeek(): string[] {
  const weekDays: string[] = [];
  const baseDate = getBeginningOfWeek();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' } as const;

  for (let i = 0; i < days.length; i++) {
      weekDays.push(baseDate.toLocaleDateString('en-US', options));
      baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
}
