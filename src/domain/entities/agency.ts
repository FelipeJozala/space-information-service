export type Agency = {
	count: number
	next: string
	previous: string
	results: AgencyResults[]
}

export type AgencyResults = {
	id: number,
	url: string,
	name: string,
	featured: boolean,
	type: string,
	country_code: string,
	abbrev: string,
	description: string,
	administrator: string,
	founding_year: number,
	launchers: string,
	spacecraft: string,
	parent: string,
	image_url: string
}