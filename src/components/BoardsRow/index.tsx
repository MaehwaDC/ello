import React, { memo, FunctionComponent } from 'react';
import { Board, Category } from 'store/categories/types';
import BoardsRowTitle from 'components/BoardsRow/BoardsRowTitle';
import Scrollbar from 'ui-kit/Scrollbar';

import s from './styles.module.scss';
import { BoardCard } from 'components/Cards';

const renderCard = (el: Board) => <BoardCard key={el.id} {...el} />;

const BoardsRow: FunctionComponent<Category> = ({ boards, name }) => {
  return (
    <div className={s.boardsRow}>
      <BoardsRowTitle>{name}</BoardsRowTitle>
      <Scrollbar>
        <div className={s.scrollArea}>{boards.map(renderCard)}</div>
      </Scrollbar>
    </div>
  );
};

export default memo(BoardsRow);
