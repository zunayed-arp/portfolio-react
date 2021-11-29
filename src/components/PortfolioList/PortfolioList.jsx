import React from 'react'
import "./PortfolioList.scss";
export default function PortfolioList({list,active,setSelected}) {

	const {title,id} = list
	return (
		<li className={ active ? "portfolioList active": "portfolioList" } onClick={()=>setSelected(id)}>
			{title}
		</li>
	)
}
