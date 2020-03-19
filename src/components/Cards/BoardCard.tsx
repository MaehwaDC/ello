import React, { FunctionComponent, memo } from 'react';

import { Board } from 'store/boards/types';

export const BoardCard: FunctionComponent<Board> = memo(
  ({ title, description, users }) => {
    return (
      <div>
        {title} {description} {users}
      </div>
    );
  },
);
