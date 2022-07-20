import { AgenciesRepository } from '@application/repositories/agencies'
import { SpaceDevApi } from '@infra/apis'
import { getRoutes } from '@main/router/routes'
import { PageLayout } from '@presentation/layout'
import { Agencies} from '@presentation/pages/agencies'
import { HomePage } from '@presentation/pages/home'
import React from 'react'

export const makePageLayout = () => ( <PageLayout routes={getRoutes()}/> )

export const makeHomePage = () => <HomePage/>

export const makeAgenciesPage = () => <Agencies repository={new AgenciesRepository(SpaceDevApi)}/>