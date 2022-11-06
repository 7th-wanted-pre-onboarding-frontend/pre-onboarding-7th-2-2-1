import React from 'react';

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
  const { item, handleInputChange, target, setUpdateTarget } = props;

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
    if (!target) {
      setUpdateTarget(item.id);
    } else {
      setUpdateTarget(null);
    }
  };

  const onChange = (event) => {
    const {
      target: { value, name }
    } = event;
    handleInputChange({ value, name }, item.id);
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
        {target ? (
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
        {target ? (
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
        {target ? (
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
        {target ? (
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
        {target ? (
          <StlyedInput
            name='convValue'
            value={item.report.convValue}
            onChange={onChange}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.report.convValue}</Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdItemColumn>
        <StyledAdContent>
          <Typograpy size='md' variant='label'>
            광고 비용
          </Typograpy>
        </StyledAdContent>
        {target ? (
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
