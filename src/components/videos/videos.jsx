// Import Dependencies
import React from 'react';
import { observer } from 'mobx-react';

// Services
import { useMobxServices } from 'services';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { Text } from 'typography';

// Import Common components
// import { Button } from 'common/button';

// Import Sub Components
import Video from './video';

function Videos() {
  const { videosService } = useMobxServices();

  // const thumbnailUrl = (videoId) => 
  // 'https://i1.ytimg.com/vi/videoId/hqdefault.jpg'

  return (
    <Flex flexDirection='column'>
      {videosService.isLoaded &&
        videosService.videos.map((video) => (
          <Video key={video.videoId} video={video} />
        ))}

      {videosService.hasError && (
        <Text error>
          Something went wrong while requesting data from github. <br />
          Most Probably this ip address has hit the rate limit for
          unauthenticated user.
        </Text>
      )}
    </Flex>
  );
}

export default observer(Videos);
