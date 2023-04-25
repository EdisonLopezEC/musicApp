

import { Flex, Text, Link} from '@chakra-ui/layout'
import { Link as ReachLink } from 'react-router-dom'

import React from 'react'
import { Icon } from '@chakra-ui/icons' 
import {
    Menu,
    MenuButton,
} from "@chakra-ui/react"

export const NavItem = ({navSize, title, icon, active,route }) => {
    return (
        <Flex 
            mt={30}
            flexDir='column'
            w='100%'
            p='20px'
            alignItems= {navSize === 'small' ? 'center' : 'flex-start'}
            // justifyContent={navSize === 'small' ? 'space-between' : 'flex-start'}
        >
            <Menu placement='right'>
                {/* <LinkR
                    to={route}
                > */}
                <Link
                    as={ReachLink}
                    backgroundColor={active && 'AEC8CA'}
                    p={3}
                    borderRadius = {8}
                    _hover= {{textDecor: 'none', backgroundImage:'linear-gradient(87deg, rgba(249,186,16,1) 0%, rgba(253,96,45,1) 100%)'}}
                    w={navSize === 'large' && '100%'}
                    to={route}
                >
                                    
                   
                    <MenuButton w='100%'>
                        <Flex >
                            <Icon as={icon} fontSize='xl' color={active ? '#535089' : '#535062'}/>
                            <Text ml={3} display={navSize==='small' ? 'none' : 'flex'} color='#535062'>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                {/* </LinkR> */}
            </Menu>
            
        </Flex>
    )
}
