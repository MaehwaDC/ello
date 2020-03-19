import React, { ComponentProps, FunctionComponent } from 'react';
import classNames from 'classnames';

import s from './index.module.scss';

const Scrollbar: FunctionComponent<ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => (
  <div className={classNames(className, s.scrollbar)} {...props}>
    {children}
  </div>
);

export default Scrollbar;
