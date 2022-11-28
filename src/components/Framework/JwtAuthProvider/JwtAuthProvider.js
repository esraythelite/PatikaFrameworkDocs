import React from 'react'
import NugetApp from '../NugetApp';

const JwtAuthProvider = () => {
  const name = 'Patika.Framework.Identity.JwtAuthProvider';
  const descriptions = [
    'Provides login and registration with jwt (basic authentication) ',
    'Injects all dependencies of jwt authentication itself'
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default JwtAuthProvider