import React from "react";
import { FaFacebook, FaTwitter, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
	const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

	return (
		<div className="footer">
			<div className="container">
				<div className="footerSection">
					<div className="row justifyCenter">
						<div className="footer-content">
							<div className="footer-section-logo">
								<img src="Logo" alt="" />
							</div>

							<ul className="footerCircles">
								<li>
									<FaFacebook className="footerIcon" onClick={() => handleSocialMediaClick("https://www.facebook.com/rizki.np.549?mibextid=ZbWKwL")} />
								</li>
								<li>
									<FaTwitter className="footerIcon" onClick={() => handleSocialMediaClick("https://www.twitter.com")} />
								</li>
								<li>
									<FaWhatsapp className="footerIcon" onClick={() => handleSocialMediaClick("https://www.whatsapp.com")} />
								</li>
								<li>
									<FaInstagram className="footerIcon" onClick={() => handleSocialMediaClick("https://instagram.com/die.acc____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D")} />
								</li>
							</ul>

							<div className="copy-right-content">
								<p className="copyright">
									Copyright {new Date().getFullYear()} rnfreDev || All Rights Reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}