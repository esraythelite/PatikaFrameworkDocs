import React from 'react'
import NugetApp from '../NugetApp';

const GoogleAuthProvider = () => {
  const name = 'Patika.Framework.Identity.GoogleAuthProvider';
  const description = 'Provides login and registration with google account ';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default GoogleAuthProvider