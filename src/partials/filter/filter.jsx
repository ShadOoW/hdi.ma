// Import Dependencies
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Services
import { useMobxServices } from 'services';

// Import Layout
import { Flex } from 'layout';

const Menu = styled(Flex)`
  transform: ${props => props.isOpen ? 'translateX(0px)' : 'translateX(+350px)'};
  transition: transform 0.3s ease-in-out 0s;
`;

const Filter = () => {
  const { filterService } = useMobxServices();

  return (
    <Menu
      width='350px'
      height='calc(100vh - 58px)'
      position='fixed'
      isOpen={filterService.isOpen}
      top='58px'
      right='0'
      bg={cssVarColorsNames.backgroundAccent}
      zIndex='101'
    >
      test
    </Menu>
  )
}

export default observer(Filter);
