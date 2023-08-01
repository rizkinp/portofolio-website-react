import React from "react";
export default function Services () {
	const header =  {
		mainhHeader: "My Skill",
		subHeading: "Beberapa skil yang selama ini saya pelajari"
	};

	const state = [
    {
      "id": 1,
      "icon": "/image/html2.png",
      "heading": "HTML",
      "text": "Text 1 is a long and detailed description of the first item. It provides information about the features, benefits, and uses of the product or service being showcased. This text can be used to highlight key points, share testimonials, or tell a compelling story related to the item."
    },
    {
      "id": 2,
      "icon": "/image/css.png",
      "heading": "CSS",
      "text": "Text 2 is another lengthy description that goes into great depth about the second item. It includes technical specifications, comparisons with other products, and expert opinions. The aim is to give readers a comprehensive understanding of the item to help them make an informed decision."
    },
    {
      "id": 3,
      "icon": "/image/js.png",
      "heading": "JAVASCRIPT",
      "text": "Text 3 provides a detailed overview of the third item. It covers the various use cases, target audience, and potential scenarios where the item can be beneficial. Additionally, it includes real-world examples and case studies to illustrate the item's effectiveness and versatility."
    },
    {
      "id": 4,
      "icon": "/image/php.png",
      "heading": "PHP",
      "text": "Text 4 is an extensive analysis of the fourth item. It delves into the historical background, development process, and future prospects of the item. Furthermore, it discusses user feedback, market trends, and potential improvements that can be made to enhance the item's overall performance."
    },
    {
      "id": 5,
      "icon": "/image/mysql.png",
      "heading": "MYSQL",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
    {
      "id": 6,
      "icon": "/image/bs.png",
      "heading": "BOOTSTRAP",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
    {
      "id": 7,
      "icon": "/image/react.png",
      "heading": "REACT",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
    {
      "id": 8,
      "icon": "/image/kotlin.png",
      "heading": "KOTLIN",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
    {
      "id": 9,
      "icon": "/image/tailwind.png",
      "heading": "TAILWIND",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
    {
      "id": 7,
      "icon": "/image/laravel.png",
      "heading": "LARAVEL",
      "text": "Text 5 covers all aspects of the fifth item, leaving no stone unturned. It includes infographics, charts, and graphs to present data in a visually appealing manner. Additionally, it addresses frequently asked questions and offers practical tips for users to get the most out of the item."
    },
  ];
  
    return(
			<div className="services" id="Skill">
				<div className="container">
					<div className="services_header">
						<div className="common">
							<h6 className="heading">
								{header.mainhHeader}
							</h6>
							<h2 className="subheading">
								{header.subHeading}
							</h2>
							<div className="commonBorder">
							</div>
						</div>

						<div className="row bgMain">
							{state.map((info) => (
								<div className="col-4 bgMain">
									<div className="services__box">
										<img src={info.icon} alt="" />
										<h4 className="services__box-header">{info.heading}</h4>
										{/* <p className="services__box-p">{info.text}</p> */}
									</div>
								</div>
							))}
						</div>

					</div>
				</div>
			</div>
    )
}