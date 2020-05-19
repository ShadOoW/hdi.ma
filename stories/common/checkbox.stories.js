import React from 'react';

// Component
import { Checkbox } from 'common/checkbox';

// Layout
import { Flex } from 'layout';

export default {
  title: 'Checkbox',
};

export const Icons = () => (
  <>
    <Flex pb='1rem' flexDirection='column'>
      <Flex pr='2rem'>
        <Checkbox text='Checked by default' uniqueId='key1' />
      </Flex>
      <Checkbox text='Unchecked by default' uniqueId='key2' />
    </Flex>
  </>
);
