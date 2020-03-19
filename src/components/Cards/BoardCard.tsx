import React, { FunctionComponent, memo } from 'react';

import { Board } from 'store/categories/types';

export const BoardCard: FunctionComponent<Board> = memo(
  ({ name, description, users }) => {
    return (
      <div>
        {name} {description} {users}
      </div>
    );
  },
);
