import React from 'react';

const WalkAccessibility = ({checkboxes, accessibility, style}) => {

  const accessibilityKeys = Object.keys(checkboxes).filter(item => item.includes("accessible"));

  return (
    <section className={`walkAccessibility ${style}`}>
      {style === 'walk-page' ? <a name="Accessibility"></a> : ''}
      <h2>Accessibility</h2>
      <ul>
<<<<<<< HEAD
        {accessibilityKeys.map((k,i) => (<li key={i}>{accessibility[k]}</li>))}
=======
        {accessibilityKeys.map((k,i) => (<li key={i}>{accessibility.data[k.split('-')[1]]}</li>))}
>>>>>>> c8c2dea5c0491ad0f0bad46b81d37cecbf19fba7
      </ul>
    </section>
  );
};

WalkAccessibility.propTypes = {
  checkboxes: React.PropTypes.array.isRequired,
};

export default WalkAccessibility;
