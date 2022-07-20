import { Card , Image , Empty } from 'antd'
import React from 'react'

export type AntCardProps = {
	id: any
	title: string
	imgSrc: string
	description: string
}

export const AntCard = ({ id, title, imgSrc, description}: AntCardProps) => {

	const handleImage = ( src: string, alt: string ): React.ReactNode => {
		if( src ) { 
			return (
				<div style={{ height: '200px', overflow: 'hidden'}}>
					<Image alt={alt} src={src} style={{ minHeight: '200px'}}/>
				</div>
			)
		}
		return <Empty style={{ height: '100%'}}/>
	}

	return (
		<Card
			hoverable  
			style={{ marginBottom: '10px'}}
			cover={handleImage( imgSrc , `${title} image` )}
			actions={[ <p>See more</p> ]}>
			<Card.Meta
			title={title}
			description={description ? `${description?.substring(0, 100)}...` : 'No desciption available' }
			style={{ height: '10em'}}
			/>
		</Card>
	)
}
