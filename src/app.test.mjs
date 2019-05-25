import request from 'supertest';

import app, { getFilter } from './app';

jest.mock('./fetchVideos.mjs');

describe('/videos endpoint', () => {
  it('/videos - returns list of all videos', async () => {
    const res = await request(app).get('/videos');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual([
      {
        title: "How to prepare a great beer",
        type: "video",
        source: "facebook",
        videoId: "1052114818157758",
        views: 4569654,
      },
      {
        title: "Video2",
        type: "video",
        source: "youtube",
        videoId: "1152114818157758",
        views: 34213,
      },
      {
        title: "Video3",
        type: "video",
        source: "url",
        url: "http://g.com/1.mp4",
        views: 3421,
      },
    ]);
  });
  it('/videos?filter=any - returns list of all videos', async () => {
    const res = await request(app).get('/videos?filter=any');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual([
      {
        title: "How to prepare a great beer",
        type: "video",
        source: "facebook",
        videoId: "1052114818157758",
        views: 4569654,
      },
      {
        title: "Video2",
        type: "video",
        source: "youtube",
        videoId: "1152114818157758",
        views: 34213,
      },
      {
        title: "Video3",
        type: "video",
        source: "url",
        url: "http://g.com/1.mp4",
        views: 3421,
      },
    ]);
  });
  it('/videos?filter=facebook - returns list of facebook videos', async () => {
    const res = await request(app).get('/videos?filter=facebook');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual([
      {
        title: "How to prepare a great beer",
        type: "video",
        source: "facebook",
        videoId: "1052114818157758",
        views: 4569654,
      },
    ]);
  });
  it('/videos?filter=youtube - returns list of youtube videos', async () => {
    const res = await request(app).get('/videos?filter=youtube');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual([
      {
        title: "Video2",
        type: "video",
        source: "youtube",
        videoId: "1152114818157758",
        views: 34213,
      },
    ]);
  });
  it('/videos?filter=url - returns list of url videos', async () => {
    const res = await request(app).get('/videos?filter=url');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual([
      {
        title: "Video3",
        type: "video",
        source: "url",
        url: "http://g.com/1.mp4",
        views: 3421,
      },
    ]);
  });
});

describe('getFilter()', () => {
  it('returns null if filter not found', () => {
    expect(getFilter('ddd')).toBeNull();
  });
  it('returns supported filter name', () => {
    expect(getFilter('facebook')).toEqual('facebook');
  });
});
