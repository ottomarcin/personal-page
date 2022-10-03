import React from 'react';
import GlassText from '../Common/GlassText';
import ContactModel from './ContactModel';

function Contact(props) {
  return (
    <>
      <GlassText size={0.2} position={[0, 1, -1]}>
        Contact
      </GlassText>
      <ContactModel />
      <directionalLight intensity={5} position={[2, 2, 2]} />
    </>
  );
}

export default Contact;
