export type HttpResponse<T = any> = {
	statuscode: string,
	data?: T
}

export interface IHttp {

	get:<T = any>(url: string, params?: Record<string, string | number>) => Promise<T>;

	post?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

	patch?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

	delete?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

}