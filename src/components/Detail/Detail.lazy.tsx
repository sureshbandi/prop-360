import React, { lazy, Suspense } from 'react';

const LazyDetail = lazy(() => import('./Detail'));

const Detail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDetail {...props} />
  </Suspense>
);

export default Detail;
