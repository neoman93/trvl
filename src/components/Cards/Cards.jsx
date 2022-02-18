import React from 'react';
import CardItem from '../CardItem/CardItem';
import { CardsData1, CardsData2 } from '../../data';
import './Cards.css';

const Cards = () => {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						{CardsData1.map((data, id) => (
							<CardItem
								key={id}
								src={data.src}
								text={data.text}
								label={data.label}
								path={data.path}
							/>
						))}
					</ul>
					<ul className="cards__items">
						{CardsData2.map((data, id) => (
							<CardItem
								key={id}
								src={data.src}
								text={data.text}
								label={data.label}
								path={data.path}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
