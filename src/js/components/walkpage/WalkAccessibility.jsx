import React from 'react';

const WalkAccessibility = ({checkboxes}) => {

  const accessibilityKeys = Object.keys(checkboxes).filter(item => item.includes("accessible"));

  //TODO: Filter lookup data is available, so the below can be replaced
  //TODO: Filter data is given, so the below can be replaced
  const accessibility = {
    "accessible-familyfriendly":"Family friendly",
    "accessible-seniors":"Senior Friendly",
    "accessible-busy":"Busy sidewalks",
  };

  return (
    <section className="walkAccessibility">
      <a name="Accessibility"></a>
      <h2>Accessibility</h2>
      <ul>
        {accessibilityKeys.map((k,i) => (<li key={i}>{accessibility[k]}</li>))}
      </ul>
    </section>
  );
};

WalkAccessibility.propTypes = {
  checkboxes: React.PropTypes.array.isRequired,
};

export default WalkAccessibility;
