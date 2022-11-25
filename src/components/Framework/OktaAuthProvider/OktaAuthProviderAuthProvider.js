import React from 'react'
import NugetApp from '../NugetApp';

const OktaAuthProvider = () => {
  const name = 'Patika.Framework.Identity.OktaAuthProvider';
  const description = 'Provides login and registration with okta (openid) ';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default OktaAuthProvider