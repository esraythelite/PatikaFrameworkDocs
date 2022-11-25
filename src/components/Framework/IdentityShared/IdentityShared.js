import React from 'react'
import NugetApp from '../NugetApp';

const IdentityShared = () => {
  const name = 'Patika.Framework.Identity.Shared';
  const descriptions = ['* about package'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default IdentityShared