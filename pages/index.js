import React from 'react';
import { i18n, withTranslation } from 'lib/i18n';
import { observer } from 'mobx-react';
import Head from 'next/head';

// https://github.com/mobxjs/mobx-react-lite/#observer-batching
import 'mobx-react-lite/batchingForReactDom'

// Parials
import { Header, Filter, Blocker } from 'partials';

// Layout
import { Container, Content } from 'layout';

// Components
import { Videos } from 'components';

function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <Videos />
        </Content>
      </Container>
      <Blocker />
      <Filter />
    </>
  );
}

HomePage.getInitialProps = async ({ mobxServices, req }) => {
  const currentLanguage = req ? req.language : i18n.language;
  const basePath = req ? `${req.protocol}://${req.get('host')}` : '';

  await mobxServices.videosService.fetch(basePath);

  return {
    language: currentLanguage,
    namespacesRequired: ['common'],
  };
};

export default withTranslation('common')(observer(HomePage));
