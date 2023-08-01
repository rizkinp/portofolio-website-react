import React from "react";
import { FaAlignJustify } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink from react-scroll


function Navbar() {
	const [state, setState] = React.useState(true);

	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar_container">
					<ul className="navbar_left">
						<div className="navbar_left-logo">
							<span className="logo-text">RnfreDev</span>
						</div>
					</ul>
					{state ? (
						<ul className="navbar_right">
							{/* Use ScrollLink instead of anchor tags */}
							<li><ScrollLink to="Home" smooth={true}>Home</ScrollLink></li>
							<li><ScrollLink to="About" smooth={true}>About</ScrollLink></li>
							<li><ScrollLink to="Skill" smooth={true}>Skill</ScrollLink></li>
							<li><ScrollLink to="Contact" smooth={true}>Contact</ScrollLink></li>
							

						</ul>
					) : (
						""
					)}
				</div>
			</div>
			<div className="toggle" onClick={() => setState(!state)}>
				<FaAlignJustify />
			</div>
		</nav>
	)
}

export default Navbar;
