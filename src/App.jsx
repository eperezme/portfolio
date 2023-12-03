import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Test from "./components/test/test";

// [ ] Make a vertical DNA strand that unfolds as you scroll down

const App = () => {
	return (
		<>
			<Header />
			{/* <Nav /> */}
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
			<Test />
		</>
	);
};

export default App;
