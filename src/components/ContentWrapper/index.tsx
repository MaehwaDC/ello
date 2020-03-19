import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import s from './index.module.scss';

interface IProps {
  className?: string;
}

const ContentWrapper: FunctionComponent<IProps> = ({ children, className }) => (
  <div className={classNames(s.wrapper, className)}>{children}</div>
);

export default ContentWrapper;
