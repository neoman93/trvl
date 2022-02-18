import React from 'react';
import Cards from '../../components/Cards';
import '../../App.css';

import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
	return (
		<>
			<HeroSection />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
