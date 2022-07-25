import React from 'react'
import {
    Alert,
    AlertIcon,
   
  } from '@chakra-ui/react'
const Failure = ({error}) => {
  return (
    <Alert status='error'>
    <AlertIcon />
    {error}
  </Alert>
  )
}

export default Failure