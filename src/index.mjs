import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const videosUrl = 'https://cdn.playbuzz.com/content/feed/resources';

export const getFilter = (filter) => {
  const allowedFilters = ['facebook', 'youtube', 'url'];
  
  return allowedFilters.find(f => f === filter) || null;
};

app.get('/videos', async (req, res) => {
  try {
    const videos = await axios.get(videosUrl);
    const filter = getFilter(req.query.filter);
    res.send(filter
      ? videos.data.items.filter(i => i.source === filter)
      : videos.data.items
    );
  } catch(error) {
    console.log(error);
    res.status(500);
    res.send('fetching videos from cdn.playbuzz.com failed');
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
