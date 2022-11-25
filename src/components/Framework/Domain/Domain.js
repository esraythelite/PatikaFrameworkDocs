import React from 'react'
import NugetApp from '../NugetApp';

const Domain = () => {
  const name = 'Patika.Framework.Domain';
  const descriptions = ['* about package'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default Domain