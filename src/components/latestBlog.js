import React, { Component } from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"

export default class LatestBlogs extends React.Component {
    render() {

        const { data, title } = this.props;

        return (
            <div className="container">
                <div className="text-center"><h2 className="with-underline">{title ? title : 'Derniers articles'}</h2></div>
                <div className="row product-main">
                    {data.edges.map(items => (
                        <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" key={items.node.id} style={{display: 'flex'}}>
                            <div className="details_List">
                                {items.node.featureImage === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.featureImage.fluid} />}

                                <div className="details_inner">

                                    <h2>
                                        <Link to={`/${items.node.slug}`}>{items.node.title}</Link>
                                    </h2>
                                    <p>{items.node.subHeader}</p>
                                    <p>
                                        { items.node.tags.map((tag) => {
                                            return <Link to={'/sujet/' + tag.tag} style={{padding: 2, color: '#007bff!important'}}><i> {tag.tag} </i></Link>
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*<ul className="latest-blog">*/}
                    {/*{data.edges.map(items => (*/}
                        {/*<li key={items.node.id}>*/}
                            {/*<div className="inner">*/}
                                {/*<Link to={items.node.slug}></Link>*/}
                                {/*<Img sizes={items.node.featureImage.fluid} />*/}
                                {/*<h2>{items.node.title}</h2>*/}
                            {/*</div>*/}
                        {/*</li>*/}
                    {/*))}*/}
                {/*</ul>*/}
            </div>
        );
    }
}