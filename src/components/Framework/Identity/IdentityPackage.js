import React from 'react'
import NugetApp from '../NugetApp'

const IdentityPackage = () => {
  const name = 'Patika.Framework.Identity';
  const descriptions = [
    'Provides authentication and authorization with  username-password combination, several social accounts ( google, facebook, apple) and okta.',
    'Seperates client and auth server authentications.'
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}


export default IdentityPackage