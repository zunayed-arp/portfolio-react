import React, { useEffect, useState } from 'react'
import { designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from '../../fakeData';
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'

export default function Portfolio() {

	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);

	const lists = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web App",
		},
		{
			id: "mobile",
			title: "Mobile",
		},
		{
			id: "design",
			title: "Design",
		},

	];

	useEffect(() => {

		switch (selected) {
			case "featured":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			case "mobile":
				setData(mobilePortfolio);
				break;
			case "design":
				setData(designPortfolio);
				break;
			default:
				setData(featuredPortfolio)
		}

	}, [selected])
	
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{
					lists.map(list => <PortfolioList
						key={list.id}
						list={list}
						active={selected === list.id}
						setSelected={setSelected}
					></PortfolioList>)
				}

			</ul>

			<div className="container">
				{
					data.map(singleData =>
						<div className="item">
							<img src={singleData.img} alt="" />
							<h3>{singleData.title}</h3>
						</div>
					)
				}

			</div>

		</div>
	)
}
