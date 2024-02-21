import React from 'react'
// Import the Link component from 'react-router-dom' library
import { Link } from "react-router-dom";
const ProductProfile = ({src,label,className,category}) => {
	return (
		<Link to="/products/edit" className={`product_profile`}>
			<figure>
				<img src={src} alt={src}/>
			</figure>
			<div className="product_profile_content">
				<span>{label}</span>
				{category ? <p>Category: <b>{category}</b></p> : ""}
			</div>
		</Link>
	)
}

export default ProductProfile