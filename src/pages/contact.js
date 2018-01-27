import React from 'react';
import Link from 'gatsby-link';
import Me from '../images/me.jpg';
import Marquee from '../components/marquee';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

// scroll more quickly than the default 400ms
configureAnchors({ scrollDuration: 1000 });

const ContactPage = () => (
	<div className="container">
		<div className="fixed-container">
			<div className="about">
				<h1>Ramon Munoz</h1>
				<img src={Me} alt="" />
				<div className="about-link">
					<h2>
						<Link to="/">HOME</Link>
					</h2>
					<h2>
						<Link to="/about/#about">ABOUT</Link>
					</h2>
				</div>
				<Marquee />
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
							https://linkedin.com/ramonemunoz/
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
				<ScrollableAnchor id={'contact'}>
					<div />
				</ScrollableAnchor>
			</div>
		</div>
	</div>
);

export default ContactPage;
