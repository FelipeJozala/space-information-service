import { Environment, getEnvironment } from '@application/helpers/get-environment'
import { IHttp } from "@application/protocols"
import { axiosAdapter } from "@infra/adapters/http";

const baseUrl = 'https://lldev.thespacedevs.com';/* (() => {
	switch(getEnvironment()) {
		case Environment.DEV:
			return 'https://lldev.thespacedevs.com';
		case Environment.PROD:
			return 'https://ll.thespacedevs.com';
		default:
			return ''
	}
})*/

const prefix = '2.2.0' 

const makeParams = ( params?: Record<string, string>) => 
	Object.assign( params ?? {});


export const SpaceDevApi: IHttp = {
	get:<T extends Object>(path: string, params?: Record<string, string>) => 
		axiosAdapter.get(`${baseUrl}/${prefix}/${path}`, makeParams(params))

}