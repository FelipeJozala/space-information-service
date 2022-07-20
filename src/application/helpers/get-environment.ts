export enum Environment {
	DEV = 'dev',
	PROD = 'prod'
}

export type EnvironmentType = Environment.DEV | Environment.PROD

export const getEnvironment = (): EnvironmentType => {
	console.log(window.location.hostname)
	if ( window.location.hostname.includes('localhost')) {
		return Environment.DEV
	} else {
		return Environment.PROD
	}
}