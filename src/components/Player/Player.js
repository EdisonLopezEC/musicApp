import React, { useContext } from "react";
import { PlayContext } from "../../context/PlayContext";
import { FaPause, FaPlay} from 'react-icons/fa'
import { FiArrowUpRight} from 'react-icons/fi'
import { Box, Center } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { MusicContext } from "../../context/MusicContext";
import { ModalContext } from "../../context/ModalContext";
import { useMusicPopular } from "../../hooks/useMusicPopular";
import { VideoPlayer } from "../../pages/homePage/VideoPlayer";

export const Player = () => {

  const {play,setPlay} = useContext(PlayContext);
  const {music} = useContext(MusicContext);
  let image='https://img1.wallspic.com/previews/8/6/1/0/5/150168/150168-pintura_abstracta_morada_y_negra-x750.jpg'
  if(music.length>0){
    const data = music[0];
    image = data.image; 
  }

  const {modal, setModal} = useContext(ModalContext);  
  const {result} = useMusicPopular();
  console.log(result);

  const handlePlay = () => {
    if(Object.keys(music).length===0){
      return setPlay(false);
    }
    setPlay(!play);
  }

  const handleModal = () =>{
    console.log('Music',music)
    if(Object.keys(music).length===0){
      return setModal(false);
    }
    setModal(!modal);
  }

  return (
    <>
    <Box
      position="relative"
      top='100px'
    >
     <VideoPlayer />
    </Box>
      <div id="app-cover">
        <div style={{
          backgroundImage: `url(${image})`
        }} id={modal ? "bg-artwork" : ''}
       ></div>        
        <div id="bg-layer"></div>
        <div id="player">
          <div id="player-track">
            <div id="album-name"></div>
            <div id="track-name"></div>
            <div id="track-time">
              <div id="current-time"></div>
              <div id="track-length"></div>
            </div>
            <div id="s-area">
              <div id="ins-time"></div>
              <div id="s-hover"></div>
              <div id="seek-bar"></div>
            </div>
          </div>
          <div id="player-content" >
            <div id="album-art">
              <img
                src={image === undefined ? 'https://img1.wallspic.com/previews/8/6/1/0/5/150168/150168-pintura_abstracta_morada_y_negra-x750.jpg' : image} alt='album'
                className="active"
                id="_1"
              />
            </div>
            <div id="player-controls">
              <div className="control">
                <div className="button" id="play-previous"
                >

                  <i className="fas fa-backward"></i>
                </div>
              </div>
              <div className="control">
                <Box className="button" id="play-pause-button" 
                  onClick={()=>handlePlay() }
                >
                  <Center>
                    <Icon>
                      {play ? <FaPause color='white'/> : <FaPlay color='white'/>}
                    </Icon>
                  </Center>
                </Box>
              </div>
              <div className="control">
                <Box className="button" id="play-next"
                onClick={
                  ()=>handleModal()
                }
                >
                  <Center>
                  <Icon>
                    <FiArrowUpRight color='white'/>
                  </Icon>
                  </Center>
                  <i className="fas fa-forward"></i>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
