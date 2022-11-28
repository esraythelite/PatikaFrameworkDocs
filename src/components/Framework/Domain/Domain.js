import React from 'react'
import NugetApp from '../NugetApp';

const Domain = () => {
  const name = 'Patika.Framework.Domain';
  const descriptions = ['Contains interfaces and services about repositories and logDbContext.'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default Domain