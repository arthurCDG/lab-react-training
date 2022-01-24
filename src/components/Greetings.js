import React from 'react';

const Greetings = (props) => {
  if (props.lang === 'de')
    return (
      <div className="id-card">
        <p>Halo {props.children}!</p>
      </div>
    );
  else if (props.lang === 'fr')
    return (
      <div className="id-card">
        <p>Bonjour {props.children}</p>
      </div>
    );
  else if (props.lang === 'es')
    return (
      <div className="id-card">
        <p>Hola {props.children}</p>
      </div>
    );
  else
    return (
      <div className="id-card">
        <p>Hello {props.children}</p>
      </div>
    );
};

export default Greetings;
