import { AgenciesRepository } from '@application/repositories/agencies'
import { Agency } from '@domain/entities'
import { AntCard } from '@presentation/components/ant-Card/ant-card'
import { Col, Input, message, Pagination, Row } from 'antd'
import React, { useEffect, useState } from 'react'

type ParamsProps = {
	search?: string
	offset: number
	limit: number
	country_code?: string
	agency_type?: string
}

const InitialList: Agency = {
	count: 0,
	next: null,
	previous: null,
	results: []
}

export const Agencies = (props: { repository: AgenciesRepository}) => {

	const [ isLoading, setIsLoading ] = useState<boolean>(false)
	const [ agenciesList, setAgenciesList ] = useState<Agency>(InitialList)
	const [ params, setParams ] = useState<ParamsProps>({ offset: 0, limit: 12})

	useEffect(()=> {
		setIsLoading(true)
		props.repository
			.getAll( { ordering: '-featured', ...params }).then( result => setAgenciesList(result))
			.catch((error: Error) => message.error(error.message))
			.finally(()=> setIsLoading(false))
	},[params])

	const handlePagination = ( page:number, pageSize: number) => {
		const offset = (page * pageSize)
		if (offset === pageSize) { 
			return setParams({ ...params, offset: 0, limit: pageSize })
		}
		return setParams({...params, offset: offset, limit: pageSize })
	}

	const handleSearch = ( agencyToSearch: string ) => {
		setParams({...params, search: agencyToSearch})
	}

	return (
		<>
			<Input.Search
				placeholder="Search Agency"
				allowClear
				enterButton="Search"
				size="large"
				onSearch={handleSearch}
				style={{ margin: '0 0 2em 0'}}
			/>
			<Row gutter={[ 32, 32]} style={{ display: 'flex'}}>
				{ agenciesList.results.map( agency => {
					return (
						<Col key={agency.id} span={6}>
							<AntCard id={agency.id} description={agency.description} imgSrc={agency.image_url} title={agency.name}/>
						</Col>
					)
				})}
			</Row>
			<div style={{ width: '100%', padding: '2em', display: 'flex', justifyContent: 'center'}}>
				<Pagination total={agenciesList.count} pageSize={params.limit} onChange={handlePagination} />
			</div>
		</>
	)
}
