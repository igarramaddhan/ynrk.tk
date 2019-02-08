import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";
import './blog-post.css';

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const url = props.data.site.siteMetadata.siteUrl;
  const { title, description } = post.frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        url={url}
        pathname={props.location.pathname}
      />

      <h1 className="post-title">{title}</h1>
      <span className="date">{post.frontmatter.date}</span>
      <div className="content-image">
      {post.frontmatter.image !== null && (
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
