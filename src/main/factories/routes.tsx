import React from 'react'
import { Route as RouteComponent } from 'react-router-dom'
import { getRoutes } from '@main/router/routes'
import { Route } from '@domain/entities'

export const makeRoutes = () => {
	const makeRoute = (route: Route) => {
		return (
			<RouteComponent
				key={route.path}
				path={route.path}
				element={route.content ? <route.content/> : undefined}
				children={route.subRoutes && route.subRoutes.map((subRoute: any) => makeRoute({ ...subRoute, path: `${subRoute.path}`}))}
			/>
		);
	};
	return getRoutes().map(route => makeRoute(route))
};