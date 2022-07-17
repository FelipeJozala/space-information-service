import { makeRoutes } from '@main/factories/routes'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

export default () => {
	return (
		<BrowserRouter>
			<Routes>{makeRoutes()}</Routes>
		</BrowserRouter>
	)
}