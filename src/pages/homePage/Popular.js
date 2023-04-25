import React from "react";
import { Heading } from "@chakra-ui/react";
import {Box, Stack} from "@chakra-ui/layout"
import { ContenedorSearch } from "../search/ContenedorSearch";
import { useMusicPopular } from "../../hooks/useMusicPopular";

export const Popular = () => {

  const s = useMusicPopular();

  return (
    <>
        <Heading color='white' as="h2" size="lg" mb={5} ml={8}>
          Popular
        </Heading>
        <Box
        overflowY="auto"
        marginLeft="30px"
        marginRight="30px"
        height="80%"
        maxHeight='80%'
        mt={2}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack spacing={4} >
          {s.result !== null &&
            s.result.map((h) => <ContenedorSearch key={h.idSong} {...h} />)}
        </Stack>
      </Box>

    </>
  );
};
