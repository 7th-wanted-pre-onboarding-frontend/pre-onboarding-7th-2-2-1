import React from 'react';
import { Exception, InnerWarning } from './Exception.Style';

export default function Exceptions() {
  return (
    <Exception>
      <InnerWarning>표시할 데이터가 없습니다</InnerWarning>
      <InnerWarning>날짜를 지정해주세요</InnerWarning>
    </Exception>
  );
}
