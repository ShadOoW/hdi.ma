import React from 'react';
import Head from 'next/head';

// Layout
import { Container, Content } from 'layout';

// Typography
import { H3 } from 'typography';

// Import Partials
import { Header } from 'partials';

function ReadmePage() {
  return (
    <>
      <Head>
        <title>Readme Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <H3>Readme Page</H3>

        </Content>
      </Container>
    </>
  );
}

ReadmePage.getInitialProps = async ({ mobxServices }) => {
  await mobxServices.readmeService.fetch();
  return {
    namespacesRequired: ['common'],
  };
};

export default ReadmePage;
