
import { useFetch } from "./useFetch";

  

const Fetch = (id) => {

  const { data, loading, error } = useFetch(
    `https://api.allorigins.win/get?url=https://api.genius.com/songs/${id}?access_token=t0m3rAOGWjFpMNeinGMzgi797nV_hgSYa7FmXelcmgniOr6wkVerIHxuimTw2DLv`);
  
    if (loading === true) {
    return { result: null, loading: true, error: false };
  }

  const res = JSON.parse(data.contents);
  if (res.response === undefined) {
    console.log(`RES ${res.response}`);
    return {
      url: null,
      loading: false,
      error: false,
    };
  }

  const url = res.response.song.media.find(
    (media) => media.provider === "youtube"
  );
  const image = res.response.song.header_image_url;

  if (url === undefined) {

    return {
      url: null,
      loading: false,
      error: false,
    };
  }

  // console.log('Vetga',url.url);
  // console.log('imagen',image);
  return {

    url: url.url,
    image: image,
    loading: false,
    error: false,
  };
}

export const useMusicId = ids => {

  const urls=[];
  ids.forEach(id=>{
    const {url}=Fetch(id);
    if(url!==undefined){
      console.log('se inserto')
      urls.push(url);
    }
  })
  return urls;

};
