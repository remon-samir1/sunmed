import React from 'react';
import ContactUsHero from './ContactUsHero/ContactUsHero';
import ContactForm from './ContactForm/ContactForm';
import ContactDetails from './ContactDetails/ContactDetails';
import Footer from '../../Components/Footer/Footer';

const ContactUs = () => {
  return (
    <div>
      <ContactUsHero/>
      <ContactForm/>
      <ContactDetails/>
      <Footer/>
    </div>
  );
}

export default ContactUs;
