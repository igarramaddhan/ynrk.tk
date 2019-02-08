import React from "react";
import { Link, graphql } from "gatsby";
import "./post.css";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark.edges.filter(value => {
    return value.node.frontmatter.published;
  });
  console.log(postList);
  const { title, description, siteUrl } = props.data.site.siteMetadata;
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        url={siteUrl}
        pathname={props.location.pathname}
      />
      {postList.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={node.fields.slug + i}>
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            published
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
