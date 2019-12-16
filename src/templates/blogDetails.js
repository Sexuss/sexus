import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react";
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Parallax/Parallax"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../assets/jss/material-kit-react/views/landingPage";


const disqusShortname = "sexus-1";

const BlogDetails = data => (
    < Layout >
        <SEO title={data.data.contentfulBlogs.title} keywords={[`sexualité`, `orgasme`, `feminisme`]
            .concat(data.data.contentfulBlogs.tags.map((t) => t.tag))} />
        <Parallax filter image={data.data.contentfulBlogs.featureImage.fluid.base64}>
            <div className="post-thumbnail" style={{maxHeight: '30vh',
                float: 'left',
                width: '100%',
                overflow: 'hidden'}}>
                <Img sizes={data.data.contentfulBlogs.featureImage.fluid} />
            </div>
        </Parallax>

        <div className="blogs-page">

            <div className="container" style={{paddingTop: 20}}>
                <div className="post-details" style={{float: 'left'}}>
                    <h2 className="title">{data.data.contentfulBlogs.title}</h2>
                    <div className="post-date">
                        <i className="fas fa-calendar-alt"></i>
                        {data.data.contentfulBlogs.publicData}
                    </div>
                    <div className="author">
                        <Img sizes={data.data.contentfulBlogs.author.photo.fixed} />
                        <strong className="name">{data.data.contentfulBlogs.author.name}</strong>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.data.contentfulBlogs.description.childMarkdownRemark.html
                        }}
                    />

                </div>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                        identifier: data.data.contentfulBlogs.id,
                        title: data.data.contentfulBlogs.title,
                    }}
                />
            </div>
        </div>
    </Layout >
)

export default withStyles(landingPageStyle)(BlogDetails)

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
        contentfulBlogs(slug: {eq: $slug }) {
            id
            title
            slug
            publicData(formatString: "MMMM D, YYYY")
            tags {
                tag
            }
            author {
            name
            photo {
                fixed(width: 50, height: 50) {
                width
                height
                src
                srcSet
                }
            }
            }
            description {
                childMarkdownRemark {
                    html
                    excerpt(pruneLength: 250)
                }
            }
            featureImage {
                fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
        }
    }
}
`
