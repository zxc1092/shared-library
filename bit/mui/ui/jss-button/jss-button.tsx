import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import {
  Link,
  LinkField,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-react';

type TButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;

export interface ButtonProps extends TButtonBaseProps {
  field: LinkField | LinkFieldValue;
}

export const Button = ({ field, ...rest }: ButtonProps) => {
  return (
    <MuiButton component={'span'} disableRipple {...rest}>
      <Link field={field} />
    </MuiButton>
  );
};
