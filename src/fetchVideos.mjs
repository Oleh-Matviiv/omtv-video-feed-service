import axios from 'axios';

const videosUrl = 'https://cdn.playbuzz.com/content/feed/resources';

const fetchVideos = async () => await axios.get(videosUrl);

export default fetchVideos;
