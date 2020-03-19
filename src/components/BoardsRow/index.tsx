import React, { memo, FunctionComponent, useCallback } from 'react';
import { Board } from 'store/boards/types';
import BoardsRowTitle from 'components/BoardsRow/BoardsRowTitle';
import Scrollbar from 'ui-kit/Scrollbar';

import s from './styles.module.scss';

interface IProps {
  list: Board[];
  title: string;
}

const BoardsRow: FunctionComponent<IProps> = ({ list, title }) => {
  const renderCard = useCallback(
    (el: Board, index) => {
      return el;
    },
    [list],
  );

  return (
    <div className={s.boardsRow}>
      <BoardsRowTitle>{title}</BoardsRowTitle>
      <Scrollbar>
        <div className="qwe">{list.map(renderCard)}</div>
      </Scrollbar>
    </div>
  );
};

export default memo(BoardsRow);
