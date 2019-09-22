import axios from "axios";

const KEY = "AIzaSyC5j-19WG86Hz7kS_tP7cUVHlg-8lUjIi0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
