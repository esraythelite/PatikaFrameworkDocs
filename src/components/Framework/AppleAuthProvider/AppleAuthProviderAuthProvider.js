import React from 'react'
import NugetApp from '../NugetApp'

const AppleAuthProvider = () => {
  const name = 'Patika.Framework.Identity.AppleAuthProvider';
  const descriptions = ['Provides login and registration witk apple id '];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default AppleAuthProvider