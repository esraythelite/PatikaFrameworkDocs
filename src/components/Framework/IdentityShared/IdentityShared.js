import React from 'react'
import NugetApp from '../NugetApp';

const IdentityShared = () => {
  const name = 'Patika.Framework.Identity.Shared';
  const descriptions = [
    'Contains all shared things about Identity'
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default IdentityShared