import { Route } from '@domain/entities'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const PageLayout = ( props: { routes: Route[]}) => {
	
	const navigate = useNavigate()
	const { pathname } = useLocation()

	useEffect(()=> {
		if ( pathname === '/') return navigate('/home')
	},[])

	return (
		<>
			<Outlet/>
		</>
	)
}