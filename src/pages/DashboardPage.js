import React from 'react';
import Button from '../components/Button/Button';
import Typography from '../components/Typography/Typography';

export default function DashboardPage() {
  return (
    <Button type='button' size='sm' variant='accent' disabled={false}>
      <Typography size='xxlg' variant='white'>
        수정하기
      </Typography>
    </Button>
  );
}
