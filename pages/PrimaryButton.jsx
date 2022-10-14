import React from 'react'
import { Button } from '@chakra-ui/react'
function PrimaryButton({title,onClick}) {
    let bg_primary="#a697ff"
    let textColor="white";
  return (
    <Button onClick={onClick} padding={"10px"} width="200px"  _hover={{color:"black"}} fontSize={["14px","16px","18px"]}  color={textColor} textTransform={"capitalize"} bg={bg_primary} variant={"solid"} >{title}</Button>
        
  )
}

export default PrimaryButton
