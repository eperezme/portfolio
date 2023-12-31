import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeatherSocials() {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/eperezme/" target="_blank">
				<FaLinkedin />
			</a>
			<a href="https://github.com/eperezme" target="_blank">
				<FaGithub />
			</a>
		</div>
	);
}

export default HeatherSocials;
