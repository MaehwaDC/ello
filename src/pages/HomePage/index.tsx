import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectBoards } from 'store/boards/selectors';

const Home: React.FC = () => {
  const boards = useSelector(selectBoards);
  return <div>{boards}</div>;
};

export default memo(Home);
