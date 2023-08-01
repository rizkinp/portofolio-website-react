import React from "react";

export default function About() {
	return (
		<div className="about" id="About">
			<div className="container">

				<div className="common">
					<h1 className="about-title">About me</h1>
					<div className="underline-border">
					</div>
				</div>

				<div className="row h-650 alignCenter" >
					<div className="col-6">
						<div className="about__img">
							<img src="/image/foto-crop.png " />
						</div>
					</div>

					<div className="col-6">
						<div className="about__info">
							<h1>A Students of Malang State Polytechnic <br /> Majoring in Informatic</h1>
							<div className="about__info">
								<p>
									Rizki Nur Pratama
									<br />
									TulungAgung, 24 September 2002
									<br />
									Sedang menempuh pendidikan di Politeknik Negeri Malang di Jurusan D3 Manajemen Informatika
									<br />
									Tertarik di bidang Pengembangan Web dan Pengembangan Aplikasi berbasis Mobile
								</p>
								<button class="btn" type="button">
									<strong>Download My CV</strong>
									<div id="container-stars">
										<div id="stars"></div>
									</div>

									<div id="glow">
										<div class="circle"></div>
										<div class="circle"></div>
									</div>
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


