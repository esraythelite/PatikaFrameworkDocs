import React, { useEffect } from 'react'

import { useNavigate } from "react-router-dom";
const Switcher = ({link}) => {
 
  const navigate = useNavigate();
  useEffect(() => {
    navigate(link)
  }, [ link])
  
  return (
    <></>
  )
}

export default Switcher