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
import useCardInputHandler from '../../utils/hooks/useCardInputHandler';
import ADLIST_STATUS_NAME from '../../utils/constants/adlistStatusName';
import convertDateFormat from '../../utils/makeData/convertDateFormat';
import tenThousandFormatting from '../../utils/makeData/tenThousandFormatting';

export default function AdItem(props) {
  const { item, target, setUpdateTarget, adListValuesHanlder } = props;
  const [inputValues, inputValuesHandler] = useCardInputHandler();

  const handleModToggle = () => {
    if (!target) {
      setUpdateTarget(item.id);
    } else {
      setUpdateTarget(null);
    }
  };
  const statusValue = item.status === 'active' ? '진행중' : '중단됨';
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
          <StlyedInput
            name='status'
            defaultValue={statusValue}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {ADLIST_STATUS_NAME[item.status]}
            </Typograpy>
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
            defaultValue={convertDateFormat(item.startDate)}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {convertDateFormat(item.startDate)}
            </Typograpy>
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
          <StlyedInput
            name='budget'
            defaultValue={item.budget}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {tenThousandFormatting(item.budget)}
            </Typograpy>
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
            defaultValue={item.report.roas}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>{item.report.roas}%</Typograpy>
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
            defaultValue={item.report.convValue}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {tenThousandFormatting(item.report.convValue)}
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
        {target ? (
          <StlyedInput
            name='cost'
            defaultValue={item.report.cost}
            onChange={inputValuesHandler}
          />
        ) : (
          <StyledAdContent>
            <Typograpy size='smBold'>
              {tenThousandFormatting(item.report.cost)}
            </Typograpy>
          </StyledAdContent>
        )}
      </StyledAdItemColumn>
      <StyledAdButtonWrapper>
        {target ? (
          <Button
            onClick={() => {
              setUpdateTarget(null);
              adListValuesHanlder(item.id, inputValues);
            }}
          >
            <Typograpy size='lgBold'>완료</Typograpy>
          </Button>
        ) : (
          <Button onClick={handleModToggle}>
            <Typograpy size='lgBold'>수정하기</Typograpy>
          </Button>
        )}
      </StyledAdButtonWrapper>
    </StyledAdItem>
  );
}
