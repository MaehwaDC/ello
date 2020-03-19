import React from 'react';

import ResolveRoutes from 'pages/ResolveRoutes';
import Header from 'components/Haeder';
import ContentWrapper from 'components/ContentWrapper';

import 'styles/template.scss';

function App() {
  return (
    <>
      <Header />
      <ContentWrapper as="main">
        <ResolveRoutes />
      </ContentWrapper>
    </>
  );
}

export default App;
