// Libraries
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

// Import Utils
import { Direction } from 'utils';

// Import Icons
import { SVGThemeSwitch } from 'common/icons';

// Import Common
import { Button } from 'common/button';

const Menu = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const userTheme = parseCookies().theme;
    setTheme(userTheme || 'light');
  }, []);

  useEffect(() => {
    setCookie({}, 'theme', theme, { path: '/' });

    if (document.getElementsByTagName('html')[0].className !== theme) {
      document.getElementsByTagName('html')[0].className = theme;
    }
  }, [theme]);

  return (
    <>
      <Button
        as={Direction}
        dirMarginRight='1rem'
        size='small'
        aria-label='Theme Toggler'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <SVGThemeSwitch />
      </Button>
    </>
  );
};

export default Menu;
