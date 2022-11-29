import React from 'react'
import NugetApp from '../NugetApp';

const UtilitiesExcel = () => {
  const name = 'Patika.Framework.Utilities.Excel';
  const descriptions = ['Provides import/export excell with Npoi.Mapper'];
  return (
    <NugetApp name={name} descriptions={descriptions} />
  )
}


export default UtilitiesExcel