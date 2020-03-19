import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import s from './index.module.scss';

interface IProps {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ContentWrapper: FunctionComponent<IProps> = ({
  children,
  className,
  as = 'div',
  ...props
}) =>
  React.createElement(
    as,
    { className: classNames(s.wrapper, className), ...props },
    children,
  );

export default ContentWrapper;
