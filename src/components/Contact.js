import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
const axios = require('axios');

const sendEmail = ({name, email, message}) => {
    var data = {
        service_id: 'gmail',
        template_id: 'template_XOErOVXL',
        user_id: 'user_TG8eGiR1ZBz8clI0LL3If',
        template_params: {
            name,
            email,
            message,
        }
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(function() {
        alert('Votre mail à bien été envoyé!');
    }).catch(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}
const form = {
  name: '',
  email: '',
  message: ''
};

const Contact = () => (
    <div className="Contact-us">
        <div className="text-center">
            <h2 className="with-underline">Nous contacter</h2>
            <p>❤️ Un retour, un mot, une suggestion, tu souhaites contribuer au projet ? Contact nous ! ❤️</p>
            <small>Sexus est un blog destiné à l'échange, le partage, l'experimentation des sexualités dans l'écoute
                et le respect de chacun️, nous serions trés hereux d'avoir tes retours et que tu partage avec nous
             tes suggestion.</small>
        </div>
        <div className="container">
            {/* To make form work, use your own formspree credentials in action="" */}
            <form>
                <div>
                    <label>Ton prénom: </label>
                    <input type="text" name="name" onChange={(value) => {
                        form.name = value.target.value
                    }}/>
                </div>
                <div>
                    <label>Ton email: </label>
                    <input type="email" name="email" onChange={(value) => {
                        form.email = value.target.value
                    }}/>
                </div>
                <div>
                    <label>Message: </label>
                    <textarea name="message" onChange={(value) => {
                        form.message = value.target.value
                    }}/>
                </div>
            </form>
            <div>
                <button onClick={() => sendEmail(form)}>Envoyer</button>
            </div>
        </div>
    </div>
);

export default Contact