import React, { useContext, useState } from "react";
import { Heading, WrapItem } from "@chakra-ui/layout";
import { Circle } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { AiFillCaretRight } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { MusicContext } from "../../context/MusicContext";

export const ItemList = ({list, nameList}) => {

  const [hover, setHover] = useState(false);
  const {music,setMusic} = useContext(MusicContext);

  const handleStalbish = () =>{
    console.log('Seleccionada',list);
    setMusic(
      list
    );
    console.log('Se seteo la musica')
    console.log('MUSICA SETEADA',music);
  }

  return (

    <>
      {console.log('AQUII LA LISTA',list)}
      <WrapItem
        w="12vw"
        h="24vh"
        m={2}
        bg="white"
        borderRadius="10px"
        backgroundImage={list[0].image}
        backgroundSize='100%'
        filter= 'blur(.5px)'
        _hover={{
          filter: 'blur(.0px)',
          color: 'white',
          transition: "all 400ms ease-in-out",
          fontSize: "lg"
        }}
        onMouseOver={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
      >
        <Flex w="100%" p={8} flexDirection="column">  
          <Flex mb={10}>
            <Heading as='h6' size="small" noOfLines={2} color='white'>
              {nameList}
            </Heading>
          </Flex>
       
          {hover && <Flex
          className='animate__animated animate__pulse'
          >
          <Circle size="25px" bg="tomato" color="white" as="button"
                  onClick={()=>handleStalbish()}
          >
            <AiFillCaretRight />
          </Circle>
          <Spacer />
          <Circle size="25px" bg="tomato" color="white" as="button">
            <TiDeleteOutline />
          </Circle>
          </Flex>
        }
        
        </Flex>
      </WrapItem>
    </>
  );
};
