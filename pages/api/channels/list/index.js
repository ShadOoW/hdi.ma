import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import CHANNELS from 'data/channels.json';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  req.db.collection('videos')
    .aggregate([
      { $match: { score: { $exists: true } } },
      { $group: { _id: '$channelId', total: { $sum: 1 } } },
      {
        $project: {
          _id: 0,
          id: '$_id',
          total: 1
        }
      }
    ])
    .toArray((error, channelAggs) => {
      if (error) throw error;

      const channels = channelAggs.map(channelAgg => ({
        id: channelAgg.id,
        total: channelAgg.total,
        name: CHANNELS[channelAgg.id].name,
        avatar: CHANNELS[channelAgg.id].avatar,
      }));

      res.json(channels);
    });
});

export default handler;
