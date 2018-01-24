import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

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
