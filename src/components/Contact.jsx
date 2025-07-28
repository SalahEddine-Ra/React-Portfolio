import '/src/styles/Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [notification, setNotification] = useState({ show: false, message: '', success: true });

    const showNotification = (message, success = true) => {
        setNotification({ show: true, message, success });
        setTimeout(() => {
            setNotification({ show: false, message: '', success });
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_81lw8ap', 'template_h61bkjj', form.current, 'e0mqOqPRe3iO_H6WP')
            .then(() => {
                showNotification('Email sent successfully!', true);
                resetForm();
            }, () => {
                showNotification('Failed to send email. Please try again.', false);
                resetForm();
            });
    };
    const resetForm = () => {
        form.current.reset();
    };

    return (
        <>
            {notification.show && (
                <div
                    className={`notification-email z-200 fixed top-5 left-[45%] text-white rounded-lg ${notification.success ? 'bg-green-600'  : 'bg-red-600'}`}
                    style={{ padding: '1rem 2rem' }}
                >
                    <p className='notification-text text-2xl'>{notification.message}</p>
                </div>
            )}
            <div className="contact-section min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full flex flex-col gap-16  items-center" id="contact">
                <div className="text-center" style={{ marginTop: '5rem' }}>
                    <h1 className="text-[45px] sm:text-[65px] md:text-[80px] lg:text-[80px] font-roboto font-semibold leading-[60px] sm:leading-[80px] md:leading-[120px] lg:leading-[120px] text-center">
                        <span className="bg-gradient-to-b from-sky-700 to-sky-400 bg-clip-text text-transparent">C</span>
                        <span className="text-gray-800">ontact</span>
                    </h1>
                    <p className="text-gray-600 mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl" style={{ marginInline: '1.5rem' }}>
                        Have a question or want to work together? Let's get in touch!
                    </p>
                </div>
                <div className="form-container  lg:w-full">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Your Name" className="form-input" />
                            <input type="email" name="email" placeholder="Your Email" className="form-input" />
                        </div>
                        <textarea name="message" placeholder="Your Message" rows="5" className="form-textarea"></textarea>
                        <button type="submit" className="form-button">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
}
