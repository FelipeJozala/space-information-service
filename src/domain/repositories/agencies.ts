import { Agency } from '@domain/entities';

export interface IAgenciesRepository {

	getAll: ( params: IAgencies.Params ) => Promise<IAgencies.Model>;

}

export namespace IAgencies {
	export type Params = {
		query?: string
		ordering?: string
		search?: string
		offset?: number
		limit?: number
		country_code?: string
		agency_type?: string
	}

	export type Model = Agency
}