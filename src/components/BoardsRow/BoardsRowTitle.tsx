import React from 'react';

import s from './styles/index.module.scss';

const BoardsRowTitle: React.FC = ({ children }) => (
  <div className={s.title}>{children}</div>
);

export default BoardsRowTitle;
