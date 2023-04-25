import React from "react";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Center} from "@chakra-ui/layout";

export const ContainerOnList = ({ image, title, artist, idSong, setList,list }) => {
  console.log('Container',{ image, title, artist, idSong, setList });

  const handleStablishList  = () => {
        if(list.length===0){
          setList([{
            image,
            title,
            artist,
            idSong
          }]);
        }else{
          let exist = false; 
          list.forEach(m=>{
            if(m.idSong===idSong){
              exist = true;
            }
          })
          if(!exist){
            setList([...list,{
              image,
              title,
              artist,
              idSong
            }]);
          }
        }    
  }

  return (
    <>
      <Box
        as='button'
        maxW="100%"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        d="flex"
        bg='#0d0d0d'
        borderColor="#230c33"
        _hover={{
          background: 'linear-gradient(87deg, rgba(43,0,83,1) 0%, rgba(0,0,0,1) 100%)',
          filter: "blur(.3px)"
        }}
        onClick={() => handleStablishList()}

        >
        <Box p="3">
          <Image src={image} h="40px" borderRadius="full" />
        </Box>

        <Center>
        
          <Box
            mt={2}
            d="flex"
            alignItems="baseline"
            flexDirection="column"
          >
            <Box maxW="10px">
              <Badge
                maxW="170px"
                borderRadius="full"
                px="1"
                color="#d6bcfa"
                colorScheme="purple"
                variant="subtle"
                isTruncated
              >
               {artist}
           
              </Badge>
            </Box>
            <Box
              color="white"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="2vh"
              maxW="170px"
              textTransform="uppercase"
              ml="2"
              isTruncated
            >
              {title}
            </Box>
          </Box>
        </Center>
      </Box>
    
    </>
      );
};

  
