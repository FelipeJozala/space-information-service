import { Route } from '@domain/entities';
import { makeHomePage } from '@main/factories/pages';

export const homeRoute: Route = {
	path: 'home',
	group: false,
	content: makeHomePage,
	menu: false,
	subRoutes: false
}