import React from 'react'
import NugetApp from '../NugetApp';

const JwtToken = () => {
  const name = 'Patika.Framework.Identity.JwtToken';
  const descriptions = ['Core of Jwt authentication'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default JwtToken