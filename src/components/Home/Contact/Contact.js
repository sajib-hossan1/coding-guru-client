import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_z0owob8', 'template_6saru7e', form.current, 'user_4DXp2K83toEJGNpsN9MDC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }
    
    return (
        <div id="contact" className="form-container">
            <h1 className="section-title">Contact With Us</h1>
            <div className="form container" data-aos="fade-up" data-aos-duration="1500">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className="mb-3" type="text" name="name" />
                    <label>Email</label>
                    <input className="mb-3" type="email" name="email" />
                    <label>Message</label>
                    <textarea className="text-area" name="message" />
                    <input className="send-btn" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;