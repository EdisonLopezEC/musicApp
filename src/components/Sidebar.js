import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { NavItem } from './NavItem'
import { FiHome, FiList, FiMenu, FiTrendingUp } from 'react-icons/fi';
import './Player/styles.css'
  
export const Sidebar = () => {

    const [tamañoSide, setTamañoSide] = useState('large');
 
    return (
        <Flex 
        	pos='sticky'
            left='5'
            h='95vh'
            padding='10px'
            marginTop='2.5vh'
            boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
            borderRadius={tamañoSide === 'small' ? '15px' : '30px'}
            w={ tamañoSide === 'small' ? '75px' : '200px'}
            flexDir='column'
            justifyContent='space-between'
            className={tamañoSide === 'small' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInLeft'}
            backgroundColor='#1d1c23'

        >
            <Flex
                p="5%"
                flexDir='column'
                alignItems='flex-start'
                as='nav'
            >
                <IconButton 
                    background='none'
                    mt={5}
                    _hover={{background: 'none'}}
                    icon={<FiMenu color='#535062' />}
                    onClick={() =>{
                        if(tamañoSide === 'small')
                            setTamañoSide('large')
                        else
                            setTamañoSide('small')
                    }}
                />

            </Flex>

            <Flex
            pos='sticky'
            left='5'
            h='95vh'
            marginTop='4.5vh'
            marginBottom='4.5vh'
            boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
            borderRadius={tamañoSide === 'small' ? '10px' : '30px'}
            w={ tamañoSide === 'small' ? '50px' : '180px'}
            flexDir='column'
            // justifyContent='space-between' no quitar
            className={tamañoSide === 'small' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInLeft'}
            backgroundColor='#302f36'
            >
                <NavItem navSize={tamañoSide} icon={FiHome} title='Dashboard' route='/home'/>
                <NavItem navSize={tamañoSide} icon={FiList} title='Listar' route='/list'/>
                <NavItem navSize={tamañoSide} icon={FiTrendingUp} title='Poulares' route='/likes'/>
            </Flex>


            <Flex
                p='5%'
                flexDir='column'
                w='100%'
                alignItems={tamañoSide === 'small' ? 'center' : 'flex-start'}
                mb={4}
            >

                <Divider borderColor='#535062' display={tamañoSide === 'small' ? 'none' : 'flex'}/>
                <Flex mt={4} align='center'>
                    <Avatar  size='sm'  />
                    <Flex flexDir='column' ml={4} display={tamañoSide === 'small' ? 'none' : 'flex'}
                        className={tamañoSide === 'small' ? 'animate__animated animate__bounce' : 'animate__animated animate__fadeInLeft'}
                    >
                        <Heading as='h3' color='#535062' size='sm'>Edison Lopez</Heading>
                        <Text color='#535062'>Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
      
    )
}
