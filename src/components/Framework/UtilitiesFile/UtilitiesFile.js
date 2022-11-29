import React from 'react'
import NugetApp from '../NugetApp';

const UtilitiesFile = () => {
  const name = 'Patika.Framework.Utilities.File';
  const descriptions = ['Provides usefull file extensions like conversations..'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}


export default UtilitiesFile