import React, { useState, ChangeEvent, memo } from 'react';
import ContentWrapper from 'components/ContentWrapper';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Search } from 'ui-kit/Inputs';

import s from './index.module.scss';

const Header: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <header className={s.header}>
      <ContentWrapper className={s.wrapper}>
        <div className={s.content}>
          <Link to="/" className={s.item}>
            <img src="images/Logo.svg" alt="logo" />
          </Link>
          <Link to="/" className={classNames(s.item, s.boards)}>
            <img src="images/trello-mark-blue.svg" alt="boards" />
            <span>Boards</span>
          </Link>
          <div className={s.item}>
            <Search value={value} onChange={onChange} />
          </div>
        </div>

        <div className={s.content}>
          <div className={s.userIcons}>
            <img src="images/plus-circle-outline.svg" alt="plus" />
            <img src="images/alert-circle-outline.svg" alt="alert" />
            <img src="images/bell-outline.svg" alt="bell" />
          </div>
          <Link to="/">
            <img src="images/user.svg" alt="user" />
          </Link>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default memo(Header);
