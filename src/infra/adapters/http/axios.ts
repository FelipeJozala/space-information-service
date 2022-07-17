import { IHttp } from '@application/protocols'
import axios, { AxiosResponse } from 'axios'

const handleResponde = (result: AxiosResponse) => result.data

const handleError = (error: Error) => {
	console.error('Axios error: ', error)
	throw error
}

export const axiosAdapter: IHttp = {
	get: <T = any>(url: string, headers: Record<string, string>): Promise<T> =>
		axios
			.get(url, { headers })
			.then( result => handleResponde(result))
			.catch(err => handleError(err)),

	post: <T = any>(url: string, data: any, headers: Record<string, string>): Promise<T> =>
		axios
			.post(url, data, { headers })
			.then( result => handleResponde(result))
			.catch(err => handleError(err))
}