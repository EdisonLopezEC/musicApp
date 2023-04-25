import ReactPlayer from "react-player";
import React, { useContext} from "react";
import { Box, Center } from "@chakra-ui/layout";
import { MusicContext } from "../../context/MusicContext";
import { useMusicId } from "../../hooks/useMusicId";
import { PlayContext } from "../../context/PlayContext";
import { ModalContext } from "../../context/ModalContext";

export const VideoPlayer = () => {
  const { music } = useContext(MusicContext);
  let idsSongs=[];

  music.forEach(f=> idsSongs.push(f.idSong));
  console.log('Aqui la musica',music)
  let urls = useMusicId(idsSongs);
  console.log('Los url',urls)
  console.log('Tamañoo', urls.length)
  const { play } = useContext(PlayContext);
  const { modal } = useContext(ModalContext);


  return (
    <Box
      display={modal ? '' : 'none'}
      borderRadius='15px'
      zIndex="1000"
      width="450px"
      height="300px"    
      css={{
        "background-color": "white",
        position: "absolute",
        top: "-65vh",
        left: '8vw',
        overflow:'hidden'
      }}
    >
    
    <Center>
      <ReactPlayer height="400px" url={urls} playing={play} width="450px" 
      style={{
        marginTop: "-55px",
      }}/>
    </Center>
    </Box>
  );
};
