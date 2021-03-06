import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      const cookies = parseCookies(ctx);
      initialProps.theme = cookies.theme;
      initialProps.language = ctx.req.language;
      initialProps.direction = initialProps.language === 'ar' ? 'rtl' : 'ltr';

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { theme, language, direction } = this.props;

    return (
      <Html className={theme} lang={language} dir={direction}>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/manifest/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/manifest/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/manifest/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/manifest/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          {/* <link rel='shortcut icon' href='/static/icons/favicon.ico' /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          />

          <meta name='application-name' content='HDI.ma' />
          <meta name='description' content='A News Hub.' />
          <meta name='mobile-web-app-capable' content='yes' />

          <meta name='apple-mobile-web-app-title' content='HDI.ma' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />

          {/* <meta name='msapplication-config' content='/static/icons/browserconfig.xml' /> */}
          <meta name='msapplication-TileColor' content='#fe5186' />
          <meta name='msapplication-tap-highlight' content='no' />

          <meta name='theme-color' content='#fe5186' />

          {/* <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://yourdomain.com' />
          <meta name='twitter:title' content='PWA App' />
          <meta name='twitter:description' content='Best PWA App in the world' />
          <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@DavidWShadow' /> */}

          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />

          <meta property='og:title' content='HDI.ma' />
          <meta property='og:site_name' content='HDI.ma' />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='http://hdima.herokuapp.com'
          />
          <meta
            property='og:image'
            content='https://otakufr.net/wp-content/uploads/2019/12/One-Piece-5-e%CC%81le%CC%81ments-indiquant-que-Luffy-deviendra-le-roi-des-pirates-e1579880689630.jpg'
          />

          <meta
            name='description'
            content='A News Hub.'
          />
          <meta name='robots' content='index, follow' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
