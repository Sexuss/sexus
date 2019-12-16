import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react";
import LatestBlogs from "../components/latestBlog"
import Layout from "../components/layout"
import SEO from "../components/seo"



const disqusShortname = "shopper";

const TagDetails = data => (
    < Layout >
        <SEO title={data.data.contentfulTags.tag} keywords={[data.data.contentfulTags.tag, `sexualité`, `orgasme`, `feminisme`]} />
        <div style={{paddingTop: 100}}>
            <LatestBlogs
                data={{edges: data.data.contentfulTags.blogs.map((b) => {return {node: b}})}} title={data.data.contentfulTags.tag}/>
        </div>
    </Layout >
)

export default TagDetails

export const query = graphql`
    query TagDetailsQuery($id: String!) {
        contentfulTags(id: {eq: $id }) {
            id
            tag
            blogs {
                id
                title
                subHeader
                slug
                tags {
                    id
                    tag
                }
                featureImage {
                    fluid(maxWidth: 1120) {
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
    }
`
