import { Route } from '@domain/entities';
import { makePageLayout } from '@main/factories/pages';
import { AgenciesRoute } from '../agencies';
import { homeRoute } from './home';

export const pageLayoutRoute: Route = {
	path: '',
	group: true,
	content: makePageLayout,
	menu: false,
	subRoutes: [ homeRoute, AgenciesRoute ]
}