import express from 'express';
import cors from 'cors';

import fetchVideos from './fetchVideos';

const app = express();
app.use(cors());

export const getFilter = (filter) => {
  const allowedFilters = ['facebook', 'youtube', 'url'];
  
  return allowedFilters.find(f => f === filter) || null;
};

app.get('/videos', async (req, res) => {
  try {
    const videos = await fetchVideos();
    if (!videos || !videos.data || videos.items) {
      throw new Error('Unexpected response data structure');
    }

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

export default app;
