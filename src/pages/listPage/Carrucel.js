import React, { useContext, useEffect } from "react";
import { Center, Wrap} from "@chakra-ui/layout";
import "./styles.css";
import { ItemList } from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/config";
import { ListContext } from "../../context/ListContext";
import { AllListContext } from "../../context/AllListContext";


export const Carrucel = () => {

  const {list}= useContext(ListContext);
  const {allList, setAllList} = useContext(AllListContext);

  useEffect(() => {
    const getInformation = async() =>{
      let data = [];
      const datos = await getDocs(collection(db, "lists"));
      datos.forEach(d =>{
        data.push(d.data());
      })
      setAllList(data);
    }
    getInformation();
  },[list,setAllList]);

return (
    <>
      <Center overflowY="auto" overflowX='none' height="100%" width="100%" css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              flexWrap: "wrap",
            }}
            
            >
        <Wrap  width="100%" h='100%' m={0}>
          <Center
            height="100%"
            width="100%"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              flexWrap: "wrap",
            }}
          >
            {console.log('Todas las listas',allList)}
            {allList.map(i=>{
              if(i.list[0] === undefined){
                return null;
              }
              return <ItemList key={i.list[0].idSong} {...i}/>
            })}
          </Center>
        </Wrap>
      </Center>
    </>
  );
};
