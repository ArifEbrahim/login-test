import React from 'react';
import PolicySection from '../../Components/PolicySection';

export default function Policy() {
  return (
    <>
      <h2>My Policy</h2>
      <PolicySection label={'Policy reference'} text={''} />
      <PolicySection label={'Cover type'} text={''} />
      <PolicySection label={'Car'} text={''} />
      <PolicySection label={'Name'} text={''} />
      <PolicySection label={'Address'} text={''} />
    </>
  )
}
