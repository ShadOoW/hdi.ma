// Import Dependencies
import React from 'react';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Services
import { useMobxServices } from 'services';

// Import Layout
import { Flex, Block } from 'layout';

// Import Icons
import { SVGBurger, SVGFilter } from 'common/icons';

// Import Common
import { Button } from 'common/button';

// Import Components
import Logo from './logo';
import ThemeSwitcher from './theme-switcher';

const Header = () => {
  const { filterService } = useMobxServices();

  return (
    <Flex
      bg={cssVarColorsNames.backgroundAccent}
      color={cssVarColorsNames.foregroundAccent}
      position='fixed'
      width='100%'
      py='.5rem'
      px='2rem'
      zIndex='102'
    >
      <Flex
        alignItems='center'
        width='100%'
      >
        <Button
          size='small'
          aria-label='Navigation Menu'
          mr='2rem'
        >
          <SVGBurger />
        </Button>
        <a href='/'>
          <Logo />
        </a>
        <Block flex='1' />
        <ThemeSwitcher />
        <Button
          size='small'
          aria-label='Theme Toggler'
          onClick={() => filterService.toggle()}
        >
          <SVGFilter />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
