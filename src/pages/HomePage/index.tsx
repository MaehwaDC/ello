import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectTasks } from 'store/tasks/selectors';

const Home: React.FC = () => {
  const tasks = useSelector(selectTasks);
  return <div>{tasks}</div>;
};

export default memo(Home);
