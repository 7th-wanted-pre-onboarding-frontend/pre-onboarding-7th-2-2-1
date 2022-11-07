import React from 'react';

import {
  StyledBanner,
  StyledBannerLeft,
  StyledBannerRight
} from './BannerItem.style';

import Typography from '../Typography/Typography';
import formatBannerData from '../../utils/formatBannerData';
import Icons from '../Icons';

export default function BannerItem(props) {
  const { item } = props;
  return (
    <StyledBanner>
      <StyledBannerLeft>
        <Typography size='sm' variant='label'>
          {item.title}
        </Typography>
        <Typography size='xlg' variant='default'>
          {formatBannerData(item.title, item.value)}
        </Typography>
      </StyledBannerLeft>
      <StyledBannerRight>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {item.roc.inc_flag ? <Icons.PolygonRed /> : <Icons.PolygonGreen />}
          <Typography size='md' variant='label'>
            {formatBannerData(item.title, item.roc.value)}
          </Typography>
        </div>
      </StyledBannerRight>
    </StyledBanner>
  );
}
