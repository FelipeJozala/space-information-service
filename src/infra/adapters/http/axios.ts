import { IHttp } from '@application/protocols'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { response } from 'express'

const handleResponse = (result: AxiosResponse) => {
	if(result.status) return result.data
}

const handleError = (error: AxiosError) => {
	console.error('Axios error: ', error)
	throw error
}

export const axiosAdapter: IHttp = {
	get:<T = any>(url: string, params?: Record<string, string> ): Promise<T> =>
		axios
			.get(url, { params })
			.then( result => handleResponse(result))
			.catch(err => handleError(err)),
}