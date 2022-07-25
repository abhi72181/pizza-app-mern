import React from 'react'
import {
    Alert,
    AlertIcon,
   
  } from '@chakra-ui/react'
const Success = ({success}) => {
  return (
    
  <Alert status='success'>
    <AlertIcon />
   {success}
  </Alert>
  )
}

export default Success