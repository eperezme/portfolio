import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeatherSocials from "./HeatherSocials";

function Header() {
	return (
		<header>
			<div className="container header__container">
				<div data-aos="fade-down">
					<h5>Hello I'm</h5>
					<h1>Edu</h1>
					<h5 className="text-light">Data scientist</h5>
				</div>
				<div data-aos="fade-down" data-aos-duration="1000">
					<CTA />
				</div>
				<HeatherSocials />

				<div className="me">
					<img src={ME} alt="" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
