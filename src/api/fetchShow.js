import axios from "axios"
import { useEffect } from "react"

// export const fetchShow = () => {
//   return useEffect(() => {
//   (async () => {
//   const fetchShow = await axios
//     .get(
//       "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes");
//         setShow(res.data._embedded.episodes);
//   })();
// }, []);

// }

const url = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";

export const fetchShow = (url) => {
  axios.get(url)
    .then(res => {
      console.log(res.data)
      return res.data
      // setShow(res.data);
      // setSeasons(formatSeasons(res.data._embedded.episodes))
  })
    .catch(err => {
      console.log(err)
      return error
    }

}
    
fetchShow(url)

// export const fetchData = async () => {
//   const res = await fetch('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
//   const fetchShow = await res.json();
//   console.log(fetchShow)
// }
  