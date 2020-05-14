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

const Cover = styled(Flex)`
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    margin: auto;
  }
`;

function Video({ video }) {
  const channelAvatar = `${video.channel.avatar}=s68-c-k-c0x00ffffff-no-rj-mo`;
  const videoThumbnail = `https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`;

  return (
    <Block border='1px solid' borderColor={cssVarColorsNames.border}>
      <Cover
        position='relative'
        alignItems='center'
        justifyContent='center'
        pb='56.25%'
        onClick={() => {
          console.info(toJS(video.debug))
        }}
      >
        <img src={videoThumbnail} alt={video.title} />
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
    viewCount: PropTypes.string.isRequired,
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
