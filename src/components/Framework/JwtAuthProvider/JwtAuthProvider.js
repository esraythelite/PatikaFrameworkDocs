import React from 'react'
import NugetApp from '../NugetApp';

const JwtAuthProvider = () => {
  const name = 'Patika.Framework.Identity.JwtAuthProvider';
  const descriptions = ['Provides login and registration with jst (basic authentication) '];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default JwtAuthProvider