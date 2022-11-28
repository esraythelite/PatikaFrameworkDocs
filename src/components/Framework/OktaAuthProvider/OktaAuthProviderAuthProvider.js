import React from 'react'
import NugetApp from '../NugetApp';

const OktaAuthProvider = () => {
  const name = 'Patika.Framework.Identity.OktaAuthProvider';
  const descriptions = [
    'Provides login and registration with okta (openid) ',
    'Injects all dependencies of okta authentication itself'
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default OktaAuthProvider