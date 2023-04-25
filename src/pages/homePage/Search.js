import { Button } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { useForm } from "../../hooks/useForm";
import { useSearch } from "../../hooks/useSearch";
import { ContenedorSearch } from "../search/ContenedorSearch";
import "./stylesSearch.css";
// import Lottie from 'react-lottie';
// import svgLottie from '../../assets/lf30_editor_ggwtv2ly.json'

export const Search = () => {
  const initialForm = {
    search: "",
  };
  const [{ search }, handleInputChange, reset] = useForm(initialForm);

  const s = useSearch(search);
  console.log(s.loading)

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (

    <>
      <Box mt={3} marginLeft="30px" marginRight="30px">
        <form onSubmit={handleSearch}>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="#535080"/>} />
            <Input
              type="text"
              color="white"
              placeholder="Buscar"
              name="search"
              value={search}
              onChange={handleInputChange}
              borderColor="#535062"
              focusBorderColor="#535089"
              borderWidth="2px"
              autoComplete='off'   
              css={`
                &:hover {
                  border-color: #535080;
                }
                autoComplete: "off"
              `}
            />
            <Button type="submit"></Button>
          </InputGroup>
        </form>
      </Box>

      <Box
        overflowY="auto"
        height="90%"
        marginLeft="30px"
        marginRight="30px"
        mt={2}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack spacing={4} >
          {s.result !== null ? s.result.map((h) => <ContenedorSearch key={h.idSong} {...h} />) : <p>Cargando</p>}
        </Stack>
      </Box>
    </>
  );
};
