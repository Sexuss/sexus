import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/Contact";

class Contact extends React.Component {
    render() {
        return (
            < Layout >
                <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
                <div className="Contact-us" style={{marginTop: 100}}>
                    <ContactForm />
                </div>
            </ Layout>
        )
    }
}

export default Contact
