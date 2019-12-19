import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class About extends React.Component {
    render() {
        return ( <
            Layout >
            <SEO title="About" keywords={[`sexualité`, `orgasme`, `feminisme`]} /> <
            div className = "site-About" >
            <div className="container" style={{paddingTop: 100}}>
            <div className="row">
                <div className="col-sm-12">
                    <h2>A propos</h2>
                    <p>Sexus est un blog destiné à l'échange, le partage, l'expérimentation des sexualités dans l'écoute et le respect de chacun️.</p>
                    <h2>Le blog</h2>
                    <p>
                        Le blog explore toutes les formes de sexualité, et aborde des sujets autour de l'orgasme, des relations, de la masturbation...
                    </p>
                    <p>
                        Vous souhaitez nous donner des suggestion de sujet ou contribuer ? N'hésitez pas à
                        <Link to="/contact-us"> nous contacter</Link> !
                    </p>
                    <h2>Le shop</h2>
                    <p>
                        Un sexshop en ligne destiner à mettre en avant les meilleurs produits pour pimenter votre vie sexuelle !
                    </p>
                    <p>
                        Ne manquez pas les tests de produits et les suggestions des produits les plus sexy.
                    </p>
                </div>
            </div>
        </div>
        </div>
        </ Layout>
        )
    }
}
export default About