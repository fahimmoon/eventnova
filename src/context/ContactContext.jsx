import { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactState, setContactState] = useState({
    isOpen: false,
    subject: '',
    template: '',
    prefilledMessage: '',
    triggerElement: null
  });

  const openContact = (config) => {
    setContactState({
      isOpen: true,
      ...config
    });
  };

  const closeContact = () => {
    setContactState({
      isOpen: false,
      subject: '',
      template: '',
      prefilledMessage: '',
      triggerElement: null
    });
  };

  return (
    <ContactContext.Provider value={{ contactState, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
