import React from "react";
import { Grid, GridItem, Center  } from "@chakra-ui/react";
import { Search } from "./homePage/Search";
import { Popular } from "./homePage/Popular";

import { ListUser } from "./homePage/ListUser";

export const PrincipalScreen = () => {


  return (
    <>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={5}
            mt="2.5vh"
            maxHeight="95vh"
          >
            <GridItem rowSpan={1} colSpan={1} height="60vh" maxHeight="60vh">
              <Popular />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <ListUser />
            </GridItem>

            {/* {console.log(play)} */}
            <GridItem colSpan={1} rowSpan={2} bg="#1d1c23" borderRadius="30px">
              <Search />
            </GridItem>
            
            <GridItem colSpan={2} p={0} maxHeight="35vh">
              <Center>
                
              </Center>
              {/* <VideoPlayer /> */}
            </GridItem>
          </Grid>

    </>
  );
};
