import React from 'react'
import NugetApp from '../NugetApp';

const Application = () => {
  const name = 'Patika.Framework.Application';
  const description = '* about package';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default Application