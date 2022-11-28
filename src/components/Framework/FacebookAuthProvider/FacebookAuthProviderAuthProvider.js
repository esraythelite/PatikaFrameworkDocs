import React from 'react'
import NugetApp from '../NugetApp';

const FacebookAuthProvider = () => {
  const name = 'Patika.Framework.Identity.FacebookAuthProvider';
  const descriptions = [
    'Provides login and registration with facebook ',
    'Injects all dependencies of facebook authentication itself'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}

export default FacebookAuthProvider