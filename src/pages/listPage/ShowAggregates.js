import { Image } from "@chakra-ui/image";
import { Badge, Box, Center } from "@chakra-ui/layout";

export const ShowAggregates = ({ image, title, artist }) => {
  console.log({image,title,artist})

  return (
    <>
      <Box
        w='80%'
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

  
