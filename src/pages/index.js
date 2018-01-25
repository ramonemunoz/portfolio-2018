import React from 'react';
import Link from 'gatsby-link';
import Me from '../images/me.jpg';
import Marquee from '../components/marquee';

const IndexPage = ({ data }) => (
	<div className="container">
		<div className="fixed-container">
			<div className="about">
				<h1>Ramon Munoz</h1>
				<img src={Me} alt="" />
				<div className="about-link">
					<h2>
						<Link to="/about/">ABOUT</Link>
					</h2>
					<h2>
						<Link to="/contact/">CONTACT</Link>
					</h2>
				</div>
				<Marquee />
			</div>
		</div>
		<div className="content">
			{data.allMarkdownRemark.edges.map(post => (
				<div key={post.node.frontmatter.postid} className="col-two">
					<Link to={post.node.frontmatter.path}>
						<img src={post.node.frontmatter.imgmain} />
					</Link>
				</div>
			))}
		</div>
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
						imgmain
						published
						postid
					}
				}
			}
		}
	}
`;

export default IndexPage;
