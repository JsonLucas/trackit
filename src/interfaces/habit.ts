export interface IHabit {
	id: number
	name: string
	week_days: Array<number>
	userId: number
	createdAt?: Date
	updatedAt?: Date
}

export type Habit = Pick<IHabit, 'name' | 'week_days'>;