import React from 'react'
import NugetApp from '../NugetApp';

const FacebookAuthProvider = () => {
  const name = 'Patika.Framework.Identity.FacebookAuthProvider';
  const description = 'Provides login and registration with facebook account ';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default FacebookAuthProvider