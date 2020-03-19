import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

const resolveRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default memo(resolveRoutes);
