import React from 'react'
import NugetApp from '../NugetApp'

const AppleAuthProvider = () => {
  const name = 'Patika.Framework.Identity.AppleAuthProvider';
  const description = 'Provides login and registration witk apple id ';
  return (
    <NugetApp name={name} description={description} />
  )
}

export default AppleAuthProvider