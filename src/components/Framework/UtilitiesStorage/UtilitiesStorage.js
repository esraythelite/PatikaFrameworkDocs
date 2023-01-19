import React from 'react'
import NugetApp from '../NugetApp';

const UtilitiesStorage = () => {
  const name = 'Patika.Framework.Utilities.Storage';
  const descriptions = [
    'Provides file upload to this targets:',
    '1> Amazon S3 Buckets',
    '2> Azure Blob Storages',
  ];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default UtilitiesStorage
