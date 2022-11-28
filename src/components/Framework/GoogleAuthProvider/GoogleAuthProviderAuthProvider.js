import React from 'react'
import NugetApp from '../NugetApp';

const GoogleAuthProvider = () => {
  const name = 'Patika.Framework.Identity.GoogleAuthProvider';
  const descriptions = [
    'Provides login and registration with google account ',
    'Injects all dependencies of google authentication itself'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default GoogleAuthProvider