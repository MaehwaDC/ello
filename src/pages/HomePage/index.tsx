import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectCategory } from 'store/categories/selectors';

const Home: React.FC = () => {
  const boards = useSelector(selectCategory);
  return <div>{boards}</div>;
};

export default memo(Home);
