import React from 'react'
import NugetApp from '../NugetApp';

const Application = () => {
  const name = 'Patika.Framework.Application';
  const descriptions = ['* about package'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default Application