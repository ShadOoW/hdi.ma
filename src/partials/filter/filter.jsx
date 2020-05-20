// Import Dependencies
import React from 'react';
import styled from 'styled-components';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Services
import { useMobxServices } from 'services';

// Import Typography
import { H2, Small } from 'typography';

// Import Layout
import { Flex } from 'layout';

// Import Common
import { Checkbox } from 'common/checkbox';
import { Button } from 'common/button';

const Menu = styled(Flex)`
  transform: ${props => props.isOpen ? 'translateX(0px)' : 'translateX(+350px)'};
  transition: transform 0.3s ease-in-out 0s;
`;

const Filter = () => {
  const { filterService, videosService } = useMobxServices();

  return (
    <Menu
      width='35rem'
      height='calc(100% - 5.8rem)'
      position='fixed'
      isOpen={filterService.isOpen}
      top='5.8rem'
      right='0'
      bg={cssVarColorsNames.backgroundAccent}
      zIndex='101'
    >
      <Flex
        flexDirection='column'
        width='100%'
        p='2rem'
      >
        <H2 color={cssVarColorsNames.foregroundAccent} pb='2rem' uppercase bold>Channels</H2>
        <Flex flexDirection='column' flex='1' overflowY='auto'>
          {filterService.response.map(channel => (
            <Flex pb='1rem' key={channel.id} alignItems='center'>
              <Checkbox
                text={channel.name}
                uniqueId={channel.id}
                onChange={(
                  event => {
                    if (event.target.checked) {
                      filterService.includeChannel(channel.id);
                    } else {
                      filterService.excludeChannel(channel.id)
                    }
                  }
                )}
              />
              <Small pl='1rem'>{channel.count}</Small>
            </Flex>
          ))}
        </Flex>

        <Flex pt='1rem'>
          <Button
            fill='available'
            onClick={() => {
              window.scrollTo({ top: 0 });
              videosService.setFilteredChannels(toJS(filterService.filteredChannels));
              filterService.close();
            }}
          >
            <Flex flexDirection='column' justifyContent='center' width='100%'>
              <H2>Apply Filters</H2>
              <div>{filterService.count} Videos</div>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Menu>
  )
}

export default observer(Filter);
