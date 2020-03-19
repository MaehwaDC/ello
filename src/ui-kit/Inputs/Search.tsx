import React, { FunctionComponent, ChangeEvent } from 'react';
import classNames from 'classnames';

import s from './styles/Search.module.scss';

interface IProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
}

export const Search: FunctionComponent<IProps> = ({ className, ...props }) => (
  <div className={classNames(s.input, className)}>
    <input type="search" {...props} />
    <img src="images/search-outline.svg" alt="search-outline" />
  </div>
);
