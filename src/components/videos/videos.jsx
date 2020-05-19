// Import Dependencies
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

// Import Services
import { useMobxServices } from 'services';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { Text } from 'typography';

// Import Hooks
import { useIO } from 'hooks';

// Import Sub Components
import Video from './video';

function Videos() {
  const { videosService } = useMobxServices();

  const [intersectionObserver, setElements, entries] = useIO({
    threshold: 0,
  })

  // Lazyloading Images
  useEffect(() => {
    if (videosService.videos.length) {
      const img = Array.from(document.getElementsByClassName('lazy'));
      setElements(img);
    }
  }, [videosService.videos, setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy');
        intersectionObserver.unobserve(lazyImage);
      }
    })
  }, [entries, intersectionObserver])

  return (
    <Flex flexDirection='row' flexWrap='wrap'>
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
