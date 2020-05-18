// Import Dependencies
import React from 'react';
import { observer } from 'mobx-react';

// Import Services
import { useMobxServices } from 'services';

// Import Layout
import { Block } from 'layout';

const Blocker = () => {
  const { filterService } = useMobxServices();

  return (
    <Block
      width='100vw'
      height='calc(100vh - 58px)'
      position='fixed'
      display={filterService.isOpen ? 'block' : 'none'}
      top='58px'
      left='0'
      bg='#000'
      opacity='0.6'
      zIndex='100'
      onClick={() => filterService.close()}
    />
  )
}

export default observer(Blocker);
