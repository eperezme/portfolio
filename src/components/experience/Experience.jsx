import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaRProject } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

function Experience() {
	return <section id="experience" className="experience__class">
		<h5>What Skills I Have</h5>
		<h2>My Experience</h2>
{/* [ ] Change The Info displayed on front and backend cards */}
		<div className="container experience__container">
			<div className="experience__frontend">
				<h3>Frontend Development</h3>
				<div className="experience__content">
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>HTML</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>CSS</h4>
						<small className="text-light">Intermediate</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>JavaScript</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>Boostrap</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>Tailwind</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>React</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
				</div>
			</div>

			<div className="experience__backend">
				<h3>Backend Development</h3>
			<div className="experience__content">
					<article className="experience__details">
						<FaPython className="experience__details-icon" />
						<div>
						<h4>Python</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<FaRProject className="experience__details-icon" />
						<div>
						<h4>R</h4>
						<small className="text-light">Intermediate</small>
						</div>
					</article>
					<article className="experience__details">
						<FaJava className="experience__details-icon" />
						<div>
						<h4>Java</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<SiCplusplus className="experience__details-icon" />
						<div>
						<h4>C++</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>Tailwind</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
					<article className="experience__details">
						<BsPatchCheckFill className="experience__details-icon" />
						<div>
						<h4>React</h4>
						<small className="text-light">Experienced</small>
						</div>
					</article>
				</div>

			</div>
		</div>
	</section>;
}

export default Experience;
