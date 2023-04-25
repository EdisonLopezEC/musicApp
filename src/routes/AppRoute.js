import { Flex, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Player } from "../components/Player/Player";
import { Sidebar } from "../components/Sidebar";
import { AllListContext } from "../context/AllListContext";
import { ListContext } from "../context/ListContext";
import { ModalContext } from "../context/ModalContext";
import { MusicContext } from "../context/MusicContext";
import { PlayContext } from "../context/PlayContext";
import { LikesPage } from "../pages/LikesPage";
import { ListasScreen } from "../pages/ListasScreen";
import { PrincipalScreen } from "../pages/PrincipalScreen";

export const AppRoute = () => {
  const [music, setMusic] = useState([]);
  const [play, setPlay] = useState(false);
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const [allList, setAllList] = useState([]);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      <PlayContext.Provider
        value={{
          play,
          setPlay,
        }}
      >
        <MusicContext.Provider
          value={{
            music,
            setMusic,
          }}
        >
          <ListContext.Provider
            value={{
              list,
              setList,
            }}
          >
            <AllListContext.Provider
              value={{
                allList,
                setAllList,
              }}
            >
              <Router>
                <Flex>
                  <Box ml={4}>
                    <Sidebar />
                  </Box>
                  <Box position="absolute" top="65vh" left="23vw">
                    <Player />
                  </Box>
                  <Box flex="1" ml={12}>
                    <Switch>
                      <Route exact path="/home" component={PrincipalScreen} />
                      <Route exact path="/list" component={ListasScreen} />
                      <Route exact path="/likes" component={LikesPage} />
                      <Redirect to="/home" />
                    </Switch>
                  </Box>
                </Flex>
              </Router>
            </AllListContext.Provider>
          </ListContext.Provider>
        </MusicContext.Provider>
      </PlayContext.Provider>
    </ModalContext.Provider>
  );
};
