import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project.jpg";
import IMG2 from "../../assets/project.jpg";
import IMG3 from "../../assets/project.jpg";
import IMG4 from "../../assets/project.jpg";
import IMG5 from "../../assets/project.jpg";
import IMG6 from "../../assets/project.jpg";




// DATA MAPPING FOR PORTFOLIO ITEMS //

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Project Title1",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 2,
		image: IMG2,
		title: "Project Title2",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 3,
		image: IMG3,
		title: "Project Title3",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 4,
		image: IMG4,
		title: "Project Title4",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 5,
		image: IMG5,
		title: "Project Title5",
		github: "https://github.com",
		demo: "https://github.com"
	},
	{
		id: 6,
		image: IMG6,
		title: "Project Title6",
		github: "https://github.com",
		demo: "https://github.com"
	}
]



function portfolio() {
	return <section id="portfolio">
		<h5>My Recent Work</h5>
		<h2>Portfolio</h2>

		<div className="container portfolio__container">
			{
				data.map(({id,image,title,github,demo}) => {
					return (
						<article key={id} className="portfolio__item">
						<div className="portfolio__item-image">
							<img src={image} alt={title} />
						</div>
						<h3>{title}</h3>
						<div className="portfolio__item-cta">
						<a href={github} className="btn" target="_blank">Github</a>
						<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
						</div>
					</article>
					)
				})
			}
		</div>
	</section>;
	
}

export default portfolio;
