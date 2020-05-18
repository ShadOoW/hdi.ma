import nextConnect from 'next-connect';
import { formatNumber } from 'utils';
import middleware from 'middleware/database';
import CHANNELS from 'data/channels.json';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  req.db.collection('videos')
    .find({ score: { $exists: true } })
    .sort({ score: -1 })
    .toArray((error, videos) => {
      if (error) throw error;

      const hydrtaed = videos.map(video => {
        const created = new Date(video.published);
        const milliseconds = Math.abs(Date.now() - created.getTime());
        const hours = milliseconds / 36e5;

        return {
          videoId: video.videoId,
          title: video.title,
          description: video.description,
          viewCount: formatNumber(video.statistics.viewCount),
          created: video.published,
          channel: {
            name: CHANNELS[video.channelId].name,
            avatar: CHANNELS[video.channelId].avatar,
          },
          debug: {
            score: video.score,
            viewCount: video.statistics.viewCount,
            likeCount: video.statistics.likeCount,
            dislikeCount: video.statistics.dislikeCount,
            commentCount: video.statistics.commentCount,
            hours,
          }
        }
      });

      res.json(hydrtaed);
    });
});

export default handler;
