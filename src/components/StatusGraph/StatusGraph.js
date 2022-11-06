import React from 'react';
import GraphChart from '../GraphChart/GraphChart';

import GraphDateFilter from '../GraphDateFilter/GraphDateFilter';
import GraphItemFilter from '../GraphItemFilter/GraphItemFilter';
import GraphTitleFilter from '../GraphTitleFilter/GraphTitleFilter';

import {
  StyledDropdownFilter,
  StyledStatusGraph,
  StyledStatusGraphFilter
} from './StatusGraph.style';

export default function StatusGraph() {
  return (
    <StyledStatusGraph>
      <StyledStatusGraphFilter>
        <StyledDropdownFilter>
          <GraphTitleFilter />
          <GraphItemFilter />
        </StyledDropdownFilter>
        <GraphDateFilter />
      </StyledStatusGraphFilter>
      <GraphChart />
    </StyledStatusGraph>
  );
}
