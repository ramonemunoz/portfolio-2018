import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Me from '../images/me-bw.jpg';
import Marquee from '../components/marquee';
import ScrollableAnchor from '../packages/react-scrollable-anchor';
import { configureAnchors } from '../packages/react-scrollable-anchor';

// scroll more quickly than the default 400ms
configureAnchors({ scrollDuration: 1000, keepLastAnchorHash: false, scrollUrlHashUpdate: false });

const IndexPage = ({ data }) => (
	<div className="container">
		<div className="fixed-container">
			<div className="about">
				<h1>Ramon Munoz</h1>
				<div className="profile-pic">
					<img src={Me} alt="" />
				</div>
				<div className="about-link">
					<h2>
						<Link to="/about/#about">ABOUT</Link>
					</h2>
					<h2>
						<Link to="/contact/#contact">CONTACT</Link>
					</h2>
					<h2 className="show-mobile">
						<a href="#work">WORK</a>
					</h2>
				</div>
				<Marquee />
			</div>
		</div>
		<ScrollableAnchor id={'work'}>
			<div className="content">
				{data.allMarkdownRemark.edges.map(post => (
					<div key={post.node.frontmatter.postid} className="col-two">
						<Link to={post.node.frontmatter.path}>
							<Img sizes={post.node.frontmatter.imgmain.childImageSharp.sizes} />
						</Link>
					</div>
				))}
			</div>
		</ScrollableAnchor>
	</div>
);

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			limit: 10
			sort: { fields: [frontmatter___postid] }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			edges {
				node {
					html
					id
					frontmatter {
						path
						title
						imgmain {
							childImageSharp {
								sizes(maxWidth: 800) {
									...GatsbyImageSharpSizes
								}
							}
						}
						published
						postid
					}
				}
			}
		}
	}
`;

export default IndexPage;
