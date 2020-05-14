import React from 'react';

// Import Utils
import { Direction } from 'utils';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { H1 } from 'typography';

const Logo = () => (
  <Flex alignItems='center'>
    <H1 as={Direction} dirPaddingRight='1rem'>
      HDI
    </H1>
  </Flex>
);

export default Logo;
