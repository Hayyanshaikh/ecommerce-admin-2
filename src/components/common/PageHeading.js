import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumb.js'

const PageHeading = ({className,text,breadcrumb}) => {
	return (
		<>
		<div className="page_header">
        <h2 className={`page_heading ${className}`}>{text}</h2>
          <Breadcrumb items={breadcrumb} />
        </div>
		</>
	)
}

export default PageHeading