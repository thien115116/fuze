import axios from "axios";
const KEY = "AIzaSyAf29EMNaIwIeqefeJXBrJ-uRn7dFo5y5A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: KEY,
  },
});
