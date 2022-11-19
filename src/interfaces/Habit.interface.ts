import HabitEntry from './HabitEntry.interface'

export default interface Habit {
  user_id: string;
  timestamp: object | number;
  id: string;
  title: string;
  description: string;
  habitType: string;
  startingCount?: number;
  goalCount?: number;
  countDirection: string;
  entry?: HabitEntry;
}