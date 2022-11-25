import React from 'react'
import NugetApp from '../NugetApp';

const JwtToken = () => {
  const name = 'Patika.Framework.Identity.JwtToken';
  const descriptions = ['* about package'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default JwtToken