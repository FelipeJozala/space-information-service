declare var __BUILD__: 'dev' | 'prd'

declare module '*.svg' {
	const content: any;
	export default content
}