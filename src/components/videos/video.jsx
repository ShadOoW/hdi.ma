// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toJS } from 'mobx';

// Import Utils
import { formatTime } from 'utils';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Layout
import { Flex, Block } from 'layout';

// Import Typography
import { Text, Small } from 'typography';

// Import Common
import { Image } from 'common/image';

// Import Base64 SVG
import { thumbnailSVG, avatarSVG } from './placeholder';

const Cover = styled(Flex)`
  overflow: hidden;

  img {
    width: 100%;
    margin: -9.4% 0;
  }
`;

function Video({ video }) {
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`
  const channelAvatar = `${video.channel.avatar}=s68-c-k-c0x00ffffff-no-rj-mo`;
  const videoThumbnail =
    `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`

  return (
    <Block
      maxWidth='48rem'
      minWidth='36rem'
      flex='1'
      width='100%'
      mx={[0, '.8rem']}
      mb={[0, 5]}
      border={['1px solid', '0px']}
      borderColor={cssVarColorsNames.border}
    >
      <Cover
        onClick={() => { console.info(toJS(video.debug)) }}
      >
        <a href={videoUrl} target='_blank' rel='noreferrer'>
          <Image
            alt={video.title}
            src={videoThumbnail}
            fallbackSrc={`data:image/svg+xml;base64,${thumbnailSVG}`}
            isLazy
          />
        </a>
      </Cover>
      <Flex mt='1.2rem' mb='2.4rem' px='1.5rem'>
        <Flex
          minWidth='4rem'
          minHeight='4rem'
          width='4rem'
          height='4rem'
          borderRadius='50%'
          overflow='hidden'
          bg='#88888833'
        >
          <Image
            alt={video.channel.name}
            src={channelAvatar}
            fallbackSrc={`data:image/svg+xml;base64,${avatarSVG}`}
            isLazy
          />
          <img src={channelAvatar} alt={video.channel.name} />
        </Flex>
        <Flex alignItems='flex-start' flexDirection='column' ml='1.2rem'>
          <h3><Text>{video.title}</Text></h3>
          <Flex opacity='.6' mt='.5rem'>
            <Small mr='0.4rem'>{video.channel.name}</Small>
            <Small mr='0.4rem'>•</Small>
            <Small mr='0.4rem'>{video.viewCount}</Small>
            <Small mr='0.4rem'>•</Small>
            <Small mr='0.4rem'>{formatTime(video.created)}</Small>
          </Flex>
        </Flex>
      </Flex>
    </Block>
  );
}

Video.propTypes = {
  video: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    viewCount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    created: PropTypes.string.isRequired,
    channel: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    debug: PropTypes.shape({
      score: PropTypes.number.isRequired,
      viewCount: PropTypes.number.isRequired,
      likeCount: PropTypes.number.isRequired,
      dislikeCount: PropTypes.number.isRequired,
      commentCount: PropTypes.number.isRequired,
      hours: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Video;
