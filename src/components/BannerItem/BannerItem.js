import React from 'react';

import { MdArrowDropUp } from '@react-icons/all-files/md/MdArrowDropUp';
import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown';
import {
  StyledBanner,
  StyledBannerLeft,
  StyledBannerRight
} from './BannerItem.style';

import Typography from '../Typography/Typography';

export default function BannerItem(props) {
  const { item } = props;
  return (
    <StyledBanner>
      <StyledBannerLeft>
        <Typography size='sm' variant='label'>
          {item.title}
        </Typography>
        <Typography size='xlg' variant='default'>
          {item.value}
        </Typography>
      </StyledBannerLeft>
      <StyledBannerRight>
        {item.roc.inc_flag ? (
          <MdArrowDropUp color='red' />
        ) : (
          <MdArrowDropDown color='green' />
        )}
        <Typography size='md' variant='label'>
          {item.roc.value}
        </Typography>
      </StyledBannerRight>
    </StyledBanner>
  );
}
