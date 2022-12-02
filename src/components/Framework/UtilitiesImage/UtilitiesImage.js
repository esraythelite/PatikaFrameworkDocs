import React from 'react'
import NugetApp from '../NugetApp';

const UtilitiesImage = () => {
  const name = 'Patika.Framework.Utilities.Image';
  const descriptions = [
    'Provides usefull image extensions and resizing images.',
    'Can change image type'
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default UtilitiesImage