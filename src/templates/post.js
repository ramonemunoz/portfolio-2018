import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Marquee from '../components/marquee';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	return (
		<div className="container">
			<div className="fixed-container">
				<div className="about">
					<h1>{post.frontmatter.title}</h1>
					<p className="project-description" dangerouslySetInnerHTML={{ __html: post.html }} />
					<div className="about-link">
						<h2>
							<Link to="/">HOME</Link>
						</h2>
						<h2>
							<Link to="/about/">ABOUT</Link>
						</h2>
						<h2>
							<Link to="/contact/">CONTACT</Link>
						</h2>
					</div>
					{/* <Marquee /> */}
				</div>
			</div>
			<div className="content">
				<div className="col-three">
					<div className="post-container">
						<img src={post.frontmatter.imgmain} />
					</div>
				</div>
				<div className="col-two">
					<div className="post-container">
						<h1>{post.frontmatter.title}</h1>
					</div>
				</div>
				<div className="col-two">
					<div className="post-container">
						<h1>{post.frontmatter.title}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				imgmain
				postid
			}
		}
	}
`;
