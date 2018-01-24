import React from 'react';
import Link from 'gatsby-link';
import me from '../images/me.jpg';

const ContactPage = () => (
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
						<Link to="/about/">ABOUT</Link>
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
					<h1>Want to get in touch?</h1>
					<p>Email: ramon@ramon-munoz.com</p>
					<p>
						Github:{' '}
						<a href="https://github.com/ramonemunoz/" target="_blank">
							https://github.com/ramonemunoz/
						</a>
					</p>
					<p>
						LinkedIn:{' '}
						<a href="https://www.linkedin.com/in/ramonemunoz/" target="_blank">
							https://www.linkedin.com/in/ramonemunoz/
						</a>
					</p>
					<p>
						Instagram:{' '}
						<a href="https://www.instagram.com/ramonemunoz/" target="_blank">
							@ramonemunoz
						</a>
					</p>
					<p>
						Twitter:{' '}
						<a href="https://twitter.com/ramonemunoz" target="_blank">
							@ramonemunoz
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default ContactPage;
