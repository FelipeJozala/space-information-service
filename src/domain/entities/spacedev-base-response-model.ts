export type SpaceDevBaseResponse<T = any> = {
	count: number
	next: string
	previous: string
	results: T
}