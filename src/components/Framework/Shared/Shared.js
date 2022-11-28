import React from 'react'
import NugetApp from '../NugetApp';

const Shared = () => {
  const name = 'Patika.Framework.Shared';
  const descriptions = ['Contains shared things globally'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default Shared