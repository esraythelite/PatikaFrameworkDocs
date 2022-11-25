import React from 'react'
import NugetApp from '../NugetApp';

const JwtAuthProvider = () => {
  const name = 'Patika.Framework.Identity.JwtAuthProvider';
  const description = 'Provides login and registration with jst (basic authentication) ';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default JwtAuthProvider