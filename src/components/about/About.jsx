import React from "react";
import "./about.css";
import ABME from "../../assets/about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";

function About() {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me" data-aos="fade-left">
					<div className="about__me-image">
						<img src={ABME} alt="About Image"></img>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards" data-aos="fade-right">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>Not really</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>Me</small>
						</article>
						<article className="about__card">
							<FaProjectDiagram className="about__icon" />
							<h5>Projects</h5>
							<small>A lot but none completed xd</small>
						</article>
					</div>

					<p data-aos="fade-down">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dignissimos fuga tempore necessitatibus provident ex sunt veritatis eos,
						numquam facilis expedita ratione commodi blanditiis eius unde dolores, quo quis illo. Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Magnam et quo illum? Odit debitis eos ad velit possimus totam repellat maxime laboriosam, illo libero quos voluptates provident
						nulla, quo nam.
					</p>

					<a href="#contact" className="btn btn-primary" data-aos="fade-down">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
