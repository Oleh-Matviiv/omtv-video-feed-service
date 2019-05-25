import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const videosUrl = 'https://cdn.playbuzz.com/content/feed/resources';

app.get('/videos', async (req, res) => {
  try {
    const videos = await axios.get(videosUrl);
    res.send(videos.data.items);
  } catch(error) {
    console.log(error);
    res.status(500);
    res.send('fetching videos from cdn.playbuzz.com failed');
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
