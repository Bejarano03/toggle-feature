import React from 'react';

export default function FeatureToggle({isEnabled, featureName}) {
  return (
    <div>
        {isEnabled===true ? <p>{featureName} enabled</p> : <p>{featureName} not enabled</p>}
    </div>
  )
}
