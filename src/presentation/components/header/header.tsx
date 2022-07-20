import { Route } from '@domain/entities';
import { Image, Layout, MenuItemProps, MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';



export const Header = ( props: { routes: Route[] }) => {
  const { routes } = props;
	const navigate = useNavigate()

	const makeGroupRoute = (groupRoute: Route): React.ReactNode => {
		if ( groupRoute.menu) {
			return (
				<Menu.SubMenu
					key={groupRoute.path}
					title={groupRoute.menu.name}
					icon={groupRoute.menu.icon}
					onTitleClick={() => groupRoute.content ? navigate(groupRoute.path): null}
					children={groupRoute.subRoutes &&
					groupRoute.subRoutes.map( subRoute => subRoute.group ? makeGroupRoute(subRoute) : makeEndRoute({...subRoute, path: `${groupRoute.path}/${subRoute.path}`}))}
				/>
			)
		}
		if ( groupRoute.subRoutes ) {
			return (
				groupRoute.subRoutes.map( subRoute => {
					return subRoute.group ? makeGroupRoute(subRoute) : makeEndRoute({...subRoute, path: `${groupRoute.path}/${subRoute.path}`})
				})
			)
		}
	}

	const makeEndRoute = (endRoute: Route): React.ReactNode => {
		if( endRoute.menu ){
			return (
				<Menu.Item key={endRoute.menu.name} title={endRoute.menu.name} icon={endRoute.menu.icon} onClick={() => navigate(endRoute.path)}>
					{endRoute.menu.name}
				</Menu.Item>
			)
		}	
	}


  return (
		<Layout.Header style={{ display: 'flex', padding: '0', flexDirection: 'column', alignItems: 'flex-start'}}>
			
			<Menu 
				mode='horizontal' 
				style={{ background: 'transparent'}}>
				{routes.map( route => { 
					return (
						route.group ? makeGroupRoute(route) : makeEndRoute(route)
					) 
				})}
			</Menu>
		</Layout.Header>
  );
};