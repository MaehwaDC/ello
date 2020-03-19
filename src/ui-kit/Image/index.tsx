import React, {
  DetailedHTMLProps,
  FunctionComponent,
  ImgHTMLAttributes,
} from 'react';

import s from './styles/index.module.scss';

interface IProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  theme?: 'circle';
}

const Image: FunctionComponent<IProps> = ({
  theme = 'circle',
  alt,
  ...props
}) => <img className={s[theme]} {...props} alt={alt} />;

export default Image;
