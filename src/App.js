import React from 'react';
import FeatureToggle from './FeatureToggle';

export default function App() {
  return (
    <div>
      <FeatureToggle 
        isEnabled={false}
        featureName="Flying"
      />
      <br />
      <FeatureToggle 
        isEnabled={true}
        featureName="Super Strength"
      />
      <br />
      <FeatureToggle 
        isEnabled={false}
        featureName="X-Ray Vision"
      />
      <br />
    </div>
  )
}
