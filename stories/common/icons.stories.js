import React from 'react';

// Component
import { SVGBurger, SVGThemeTogger, SVGFilter } from 'common/icons';

// Layout
import { Flex } from 'layout';

export default {
  title: 'Icons',
};

export const Icons = () => (
  <>
    <Flex pb='1rem'>
      <Flex pr='2rem'>
        <SVGBurger />
      </Flex>
      <Flex pr='2rem'>
        <SVGThemeTogger />
      </Flex>
      <SVGFilter />
    </Flex>
    <Flex color='red'>
      <Flex pr='2rem'>
        <SVGBurger />
      </Flex>
      <Flex pr='2rem'>
        <SVGThemeTogger />
      </Flex>
      <SVGFilter />
    </Flex>
  </>
);
