import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { useForm } from "../../hooks/useForm";
import { useSearch } from "../../hooks/useSearch";
import { ContainerOnList } from "../listPage/ContainerOnList";
import "../homePage/stylesSearch.css";


export const SearchOnList = ({setList,list}) => {
  const initialForm = {
    search: "",
  };
  const [{ search }, handleInputChange, reset] = useForm(initialForm);

  const s = useSearch(search);
  console.log(s.loading)

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (

    <>
      <Box mt={3} marginLeft="30px" marginRight="30px">
        <form onSubmit={handleSearch}>
          <InputGroup>
            <InputLeftElement children={<SearchIcon color="#535080" />} />
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
              autocomplete='off'   
              css={`
                &:hover {
                  border-color: #535080;
                }
                autocomplete: "false"
              `}
            />
          </InputGroup>
        </form>
      </Box>

      <Box
        overflowY="auto"
        height="82%"
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
          {s.result !== null ? s.result.map((h) => <ContainerOnList key={h.idSong} {...h} setList={setList} list={list} />) : <p>Cargando</p>}
        </Stack>
      </Box>
    </>
  );
};
