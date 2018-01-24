import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
    <div className="container">
        <div className="fixed-container">
            <div className="about">
                <h1>Ramon Munoz</h1>
                <img src="me.jpg" alt="" />
                <div className="about-link">
                  <h2><Link to="/page-2/">ABOUT</Link></h2>
                  <h2><Link to="/page-2/">CONTACT</Link></h2>
                </div>
                <div className="marquee-container">
                    <div className="Marquee">
                        <div className="Marquee-content">
                            <div className="Marquee-tag"><a href="#">GITHUB</a></div>
                            <div className="Marquee-tag"><a href="#">LINKEDIN</a></div>
                            <div className="Marquee-tag"><a href="#">RESUME</a></div>
                            <div className="Marquee-tag"><a href="#">GITHUB</a></div>
                            <div className="Marquee-tag"><a href="#">LINKEDIN</a></div>
                            <div className="Marquee-tag"><a href="#">RESUME</a></div>
                            <div className="Marquee-tag"><a href="#">GITHUB</a></div>
                            <div className="Marquee-tag"><a href="#">LINKEDIN</a></div>
                            <div className="Marquee-tag"><a href="#">RESUME</a></div>
                            <div className="Marquee-tag"><a href="#">GITHUB</a></div>
                            <div className="Marquee-tag"><a href="#">LINKEDIN</a></div>
                            <div className="Marquee-tag"><a href="#">RESUME</a></div>
                        </div>
                    </div>
                    <div className="Marquee">
                        <div className="Marquee-content-two">
                            <div className="Marquee-tag"><a href="#">POST</a></div>
                            <div className="Marquee-tag"><a href="#">12TH STUDIO</a></div>
                            <div className="Marquee-tag"><a href="#">INSTAGRAM</a></div>
                            <div className="Marquee-tag"><a href="#">POST</a></div>
                            <div className="Marquee-tag"><a href="#">12TH STUDIO</a></div>
                            <div className="Marquee-tag"><a href="#">INSTAGRAM</a></div>
                            <div className="Marquee-tag"><a href="#">POST</a></div>
                            <div className="Marquee-tag"><a href="#">12TH STUDIO</a></div>
                            <div className="Marquee-tag"><a href="#">INSTAGRAM</a></div>
                            <div className="Marquee-tag"><a href="#">POST</a></div>
                            <div className="Marquee-tag"><a href="#">12TH STUDIO</a></div>
                            <div className="Marquee-tag"><a href="#">INSTAGRAM</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
           	{data.allMarkdownRemark.edges.map(post => (
				<div className="col-one">
					<Link key={post.node.id} to={post.node.frontmatter.path}>
						<img src={post.node.frontmatter.imgmain} />
					</Link>
				</div>
			))}
        </div>
    </div>
);

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(limit: 10, filter: { frontmatter: { published: { eq: true } } }) {
			edges {
				node {
					html
					id
					frontmatter {
						path
						title
						imgmain
						published
					}
				}
			}
		}
	}
`;

export default IndexPage;
