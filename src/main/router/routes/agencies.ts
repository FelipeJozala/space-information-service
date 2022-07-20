import { Route } from '@domain/entities';
import { makeAgenciesPage } from '@main/factories/pages';

export const AgenciesRoute: Route = {
	path: 'agencies',
	group: true,
	content: makeAgenciesPage,
	menu: {
		name: 'Agencies',
		icon: null
	},
	subRoutes: []
}