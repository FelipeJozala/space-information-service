import { getRoutes } from '@main/router/routes'
import { PageLayout } from '@presentation/layout'
import React from 'react'

export const makePageLayout = () => (
	<PageLayout routes={getRoutes()}/>
)

export const makeHomePage = () => <div>home</div>