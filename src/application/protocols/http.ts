export interface IHttp {

	get: <T = any>(url: string, headers?: Record<string, string>) => Promise<T>;

	post?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

	patch?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

	delete?: <T = any>(url: string, data?: any, headers?: Record<string, string>) => Promise<T>;

}