import { useFetch } from "./useFetch";

export const useSearch = (name) => {
  const { data, loading, error } = useFetch(`https://api.genius.com/search?q=${name}&access_token=UzKv83CtItpERivmSKWpS2GPBD13fkdAzKxNDF7Eb_7RJhAo4PEchsepjyg5Ir0S`);

  if (loading === true) {
    return {result: null, loading: true, error: false};
  }

  const { response } = data;

  const res =  response.hits.map((h) => {
    return {
      image: h.result.song_art_image_url,
      title: h.result.title,
      idSong: h.result.id,
      artist: h.result.primary_artist.name
    }
  });

  return {
    result: res, loading: false, error: false
  }
};
