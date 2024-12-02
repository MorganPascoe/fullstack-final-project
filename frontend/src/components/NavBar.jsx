import { Container, Flex, HStack, Text, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Container  maxW={"1140px"} px={4} >    
      <Flex
      h={16}
      alightitems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}>
        <Text
      fontSize={{ base: "22", sm: "28" }}
      fontWeight={"bold"}
      textTransform={"uppercase"}
      textAlign={"center"}
      bgGradient={"linear(to-r, #7928CA, #FF0080)"}
      bgClip={"text"}>

          <Link to={"/"}>Product Store 🛒</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
				</HStack>


        
      </Flex>
    </Container>
  )
}

export default NavBar

