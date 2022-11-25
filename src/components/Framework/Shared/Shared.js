import React from 'react'
import NugetApp from '../NugetApp';

const Shared = () => {
  const name = 'Patika.Framework.Shared';
  const description = '* about package';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default Shared