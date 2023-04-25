import React from "react";
import {Grid, GridItem} from "@chakra-ui/layout";
import { Carrucel } from "./listPage/Carrucel";
import { BarAdd } from "./listPage/BarAdd";

export const ListasScreen = () => {

  return (
    <>
          <Grid
            templateRows="repeat(8, 1fr)"
            templateColumns="repeat(1, 1fr)"
            gap={5}
            mt="2.5vh"
            maxHeight="95vh"
          >
            <GridItem paddingTop={2}rowSpan={1}>
              <BarAdd />
            </GridItem>
            <GridItem  rowSpan={4}  maxHeight="60vh">
              <Carrucel />
            </GridItem>    

          </Grid>
    </>
  )
};
