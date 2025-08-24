import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' });
        }, 5000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_oyb8wem',    // Service ID
            'template_uy0u3gq',   // Template ID
            form.current,
            '3tehY-5-VY72R9lsU'     // Public Key
        )
        .then((result) => {
            console.log(result.text);
            showToast('Message sent successfully!', 'success');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            showToast('Failed to send message. Please try again.', 'error');
        });
    };

    return (
        <div className="card-contact">
        <section id="contact" className="section">
             {toast.show && <div className={`toast ${toast.type}`}>{toast.message}</div>}
            <h2 className="section-title">Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group reveal">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
                <div className="form-group reveal">
                    <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
                <div className="form-group reveal">
                    <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group reveal">
                    <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn reveal">Send Message</button>
            </form>
        </section>
        </div>
    );
};

export default Contact;