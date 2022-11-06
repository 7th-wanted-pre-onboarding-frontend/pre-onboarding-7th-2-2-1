import React, { useState } from 'react';

import Typograpy from '../Typography/Typography';
import Button from '../Button/Button';

import {
  StlyedInput,
  StyledAdButtonWrapper,
  StyledAdContent,
  StyledAdItem,
  StyledAdItemColumn,
  StyledAdItemTitle
} from './AdItem.style';

export default function AdItem(props) {
  const { item, handleInputChange } = props;
  const [modToggle, setModToggle] = useState(false);
  // const [adItemValue, setAdItemValue] = useState({
  //   title: item.title,
  //   status: item.status,
  //   startData: item.startData,
  //   budget: item.budget,
  //   roas: item.report.roas,
  //   amount: item.report.roas * item.report.cost,
  //   cost: item.report.cost
  // });

  const handleModToggle = () => {
    setModToggle((currentState) => !currentState);
  };

  const onChange = (event) => {
    const {
      target: { value, name }
    } = event;
    handleInputChange({ value, name });
  };

  return (
    <StyledAdItem>
      <StyledAdItemTitle>
        <Typograpy size='xlg'>{item.title}</Typograpy>
      </StyledAdItemTitle>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            상태
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput name='status' value={item.status} onChange={onChange} />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.status}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            광고 생성일
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput
            name='startDate'
            value={item.startDate}
            onChange={onChange}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.startDate}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            일 희망 예산
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput name='budget' value={item.budget} onChange={onChange} />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.budget}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            광고 수익률
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput
            name='roas'
            value={item.report.roas}
            onChange={onChange}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.report.roas}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            매출
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput
            name='amount'
            value={item.report.roas * item.report.cost}
            onChange={onChange}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {item.report.roas * item.report.cost}
            </Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            광고 비용
          </Typograpy>
        </StyledAdContent>
        {modToggle ? (
          <StlyedInput
            name='cost'
            value={item.report.cost}
            onChange={onChange}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.report.cost}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdButtonWrapper>
        <Button onClick={handleModToggle}>
          <Typograpy size='lgBold'>수정하기</Typograpy>
        </Button>
      </StyledAdButtonWrapper>
    </StyledAdItem>
  );
}
