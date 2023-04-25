import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, Grid, Heading, Spacer } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useContext } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { SearchOnList } from "./SearchOnList";
import { createContext } from "react";
import { ListContext } from "../../context/ListContext";
import { ShowAggregates } from "./ShowAggregates";
import { Input } from "@chakra-ui/input";
import { db } from '../../database/config'
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "../../hooks/useForm";

export const BarAdd = () => {
  const { list, setList } = useContext(ListContext);
  const [{nameList},handleInputChange, reset]=useForm({
    nameList: 'My new List'
  });
  
  const createList = async () =>{
    await addDoc(collection(db,"lists"),{
      nameList,
      list
    });
    setList([]);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex paddingLeft={90} paddingRight={90}>
        <Heading color="white">Lists</Heading>
        <Spacer />
        <Button onClick={onOpen} bg="purple.200">
          <AiOutlineFileAdd color="white" />
        </Button>
      </Flex>
      <Modal
        size={"4xl"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius="100px"
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg='purple.200'
            color='white'
          >Crear Lista</ModalHeader>
          <Input
            name='nameList'
            onChange={handleInputChange}
            value={nameList}
            bg='purple.200'
            color='white'
            fontSize='30px'
          ></Input>
          <ModalCloseButton />
          <ModalBody
            bg='purple.200'
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              <Box w="100%" h="55vh" bg="purple.200">
                <SearchOnList setList={setList} list={list} />
              </Box>
              <Box
                w="100%"
                h="55vh"
                bg="purple.200"
                overflowY="auto"
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Center display='flex' flexDirection='column'>
                {list.map((l) => {
                  return <ShowAggregates key={l.idSong} {...l} />;
                })}
                </Center>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter
            bg='purple.200'
          >
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button 
              onClick={()=>createList()}
              variant="ghost" 
              bg='purple.200'
            >Crear</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
