import React from 'react'
import NugetApp from '../NugetApp';

const Application = () => {
  const name = 'Patika.Framework.Application';
  const descriptions = [
    'Contains implementation of Application.Contracts',
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default Application