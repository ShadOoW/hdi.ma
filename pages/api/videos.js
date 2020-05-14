import nextConnect from 'next-connect';
import { formatNumber } from 'utils';
import middleware from '../../middleware/database';
import CHANNELS from '../../data/channels/index.json';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  req.db.collection('videos').find({}).toArray((error, videos) => {
    if (error) throw error;

    const hydrtaed = videos.map(video => {
      return {
        videoId: video.videoId,
        title: video.title,
        description: video.description,
        viewCount: formatNumber(video.statistics.viewCount),
        created: video.published,
        channel: {
          name: CHANNELS[video.channelId].name,
          avatar: CHANNELS[video.channelId].avatar,
        }
      }
    });

    res.json(hydrtaed);
  });


});

export default handler;
