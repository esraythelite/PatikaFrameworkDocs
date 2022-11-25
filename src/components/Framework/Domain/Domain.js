import React from 'react'
import NugetApp from '../NugetApp';

const Domain = () => {
  const name = 'Patika.Framework.Domain';
  const description = '* about package';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default Domain