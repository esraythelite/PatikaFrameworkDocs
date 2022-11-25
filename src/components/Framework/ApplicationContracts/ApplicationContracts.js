import React from 'react'
import NugetApp from '../NugetApp';

const ApplicationContracts = () => {
  const name = 'Patika.Framework.Application.Contracts';
  const descriptions = ['* about package'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default ApplicationContracts