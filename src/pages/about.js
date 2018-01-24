import React from 'react';
import Link from 'gatsby-link';
import me from '../images/me.jpg';

const AboutPage = () => (
	<div className="container">
		<div className="fixed-container">
			<div className="about">
				<h1>Ramon Munoz</h1>
				<img src={me} alt="" />
				<div className="about-link">
					<h2>
						<Link to="/">HOME</Link>
					</h2>
					<h2>
						<Link to="/contact/">CONTACT</Link>
					</h2>
				</div>
				<div className="marquee-container">
					<div className="Marquee">
						<div className="Marquee-content">
							<div className="Marquee-tag">
								<a href="#">GITHUB</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">LINKEDIN</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">RESUME</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">GITHUB</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">LINKEDIN</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">RESUME</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">GITHUB</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">LINKEDIN</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">RESUME</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">GITHUB</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">LINKEDIN</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">RESUME</a>
							</div>
						</div>
					</div>
					<div className="Marquee">
						<div className="Marquee-content-two">
							<div className="Marquee-tag">
								<a href="#">POST</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">12TH STUDIO</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">INSTAGRAM</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">POST</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">12TH STUDIO</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">INSTAGRAM</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">POST</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">12TH STUDIO</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">INSTAGRAM</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">POST</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">12TH STUDIO</a>
							</div>
							<div className="Marquee-tag">
								<a href="#">INSTAGRAM</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="content">
			<div className="col-one">
				<div className="about-container">
					<h1>Hi, I’m Ramon</h1>
					<p>I'm a seasoned front-end developer with many years of real-world design and web development experience.</p>
					<p>
						The excitement of seeing my work come to life, online or on a circuit board, is what first sparked my
						interest in development and design. These days, I transform ideas into realities. That challenge means I’m
						always learning and expanding my toolset in preparation for my next opportunity.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default AboutPage;
