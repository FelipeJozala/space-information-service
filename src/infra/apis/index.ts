import { IHttp } from "@application/protocols"
import { axiosAdapter } from "@infra/adapters/http"

const baseUrl = ''

const prefix = ''

const makeHeaders = (headers?: Record<string, string>) =>
	Object.assign( headers ?? {}, {
		authorization: `Bearer token`,
		'content-type': 'application/json',
	})

export const api: IHttp = {
	get: <T extends Object>(path: string, headers?: Record<string, string>) => 
		axiosAdapter.get<Response<T>>(`${baseUrl}/${prefix}/${path}`, makeHeaders(headers)).then(value => value.result),

	post: <T extends Object>(path: string, data: T, headers?: Record<string, string>) => 
		axiosAdapter.post<Response<T>>(`${baseUrl}/${prefix}/${path}`, data, makeHeaders(headers)).then(value => value.result),

	patch: <T extends Object>(path: string, data: T, headers?: Record<string, string>) => 
		axiosAdapter.patch<Response<T>>(`${baseUrl}/${prefix}/${path}`, data, makeHeaders(headers)).then(value => value.result),
}

export type Response<T> = {
	success: boolean
	message: string
	result: T;
}