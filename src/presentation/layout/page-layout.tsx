import { Route } from '@domain/entities'
import { Header} from '@presentation/components/header'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const PageLayout = ( props: { routes: Route[]}) => {
	
	const { routes } = props;
	const navigate = useNavigate()
	const { pathname } = useLocation()

	useEffect(()=> {
		if ( pathname === '/') return navigate('/home')
	},[])

	return (
		<Layout>
			<Header routes={routes}/>
				<Layout>
					<Layout.Content style={{ padding: '2em 8em', height: 'calc(100vh - 150px)', overflowY: 'scroll' }}>
						<Outlet/>
					</Layout.Content>
					<Layout.Footer style={{ textAlign: 'center' }}>@ 2022 Space Information Service</Layout.Footer>
				</Layout>
		</Layout>
	)
}