import React from 'react'
import NugetApp from '../NugetApp';

const IdentityShared = () => {
  const name = 'Patika.Framework.Identity.Shared';
  const description = '* about package';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default IdentityShared