import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';
import Header from "../components/Header/Header.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../assets/jss/material-kit-react/views/landingPage.jsx";
import randomColor from 'randomcolor';

class IndexPost extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id}>
              <div className="details_List">
                {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fluid} />}

                <div className="details_inner">

                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  />
                  <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      <span className="price">${items.node.price}</span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center site-Banner Banner-details">
                      <a
                        href={items.node.link}
                        target="_blank"
                        className="Product button"
                        // data-item-id={items.node.slug}
                        // data-item-price={items.node.price}
                        // data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                        // data-item-name={items.node.name}
                        // data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" /> Acheter
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export const fontSizeConverter = (count, min, max, minSize, maxSize) => {
    if (max - min === 0) {
        // handle devision by zero
        return Math.round((minSize + maxSize) / 2)
    }
    return Math.round(
        ((count - min) * (maxSize - minSize)) / (max - min) + minSize
    )
}

const IndexPage = data => {
  // const {classes} = this.props;
    let keywords = [`sexualité`, `orgasme`, `feminisme`];
    data.data.allContentfulTags.edges.map((t) => keywords.push(t.node.tag));
    return <div>
        <Header
            color="transparent"
            routes={[]}
            brand="Sexus"
            rightLinks={<HeaderLinks/>}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
        />
        <SEO title="Home" keywords={keywords}/>
        <Banner BannerData={data.data.allContentfulHeaderBanner.edges}/>
        <div className="container" >
            <LatestBlogs data={data.data.allContentfulBlogs}/>
            <div className="text-center"><h2 className="with-underline">Les tendances</h2></div>
            <div style={{maxWidth: 600, margin: 'auto', textAlign: 'center', padding: 20}}>
                { data.data.allContentfulTags.edges.map((tag) => {
                    const counts = data.data.allContentfulTags.edges.map(( tag ) => tag.node.blogs.length);
                    const min = Math.min(...counts);
                    const max = Math.max(...counts);
                    let fontSize = fontSizeConverter(tag.node.blogs.length, min, max, 20, 35 );
                    return <Link to={'/sujet/' + tag.node.tag} style={{color: randomColor(),
                        fontSize: fontSize, padding: 5}}>
                        {tag.node.tag}
                        </Link>
                })}
            </div>
            <div className="text-center"><h2 className="with-underline">Derniers produits</h2></div>
            <IndexPost data={data}></IndexPost>
            <Contact/>
        </div>
        <Footer />
    </div>
}

export default withStyles(landingPageStyle)(IndexPage)

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6,sort:{fields:updatedAt,order: DESC}){
      edges{
        node{
          id
          name
          slug
          rating
          link
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          buttonLink
          buttonText
          image {
            fluid(maxWidth: 1800) {
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
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }
    allContentfulBlogs(limit: 3,sort:{fields:createdAt,order: DESC}) {
      edges {
        node {
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
    allContentfulTags {
      edges {
          node {
              id
              tag
              blogs {
                  id
              }
          }
      }
    }
  }
`



