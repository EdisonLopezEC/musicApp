import { useFetch } from "./useFetch";

export const useMusicPopular = () => {
  const { data, loading } = useFetch("https://api.allorigins.win/get?url=https://genius.com/api/songs/chart?time_period=day&chart_genre=all");

  console.log('Populares',data);

  if (loading === true) {
    return { result: null, loading: true, error: false };
  }

  const res = (JSON.parse(data.contents));
  if(res.response === undefined){
    console.log(`RES ${res.response}`)
    return {
      url: null,
      loading: false,
      error: false,
    }
  }

  const resu = res.response.chart_items.map((m)=>{
    return {
      image: m.item.song_art_image_url,
      title: m.item.title,
      idSong: m.item.id,
      artist: m.item.primary_artist.name
    }
  })
  
  return {
    result: resu,
    loading: false,
    error: false,
  };
};
