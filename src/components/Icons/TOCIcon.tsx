import { Icon } from '@aws-amplify/ui-react';
import styled from '@emotion/styled';

const TOCWrapper = styled.span`
  cursor: pointer;
  svg {
    fill: none;
  }
`;

export const TOCIcon = ({ ariaLabel, onClick }) => (
  <TOCWrapper>
    <Icon
      ariaLabel={ariaLabel}
      onClick={onClick}
      viewBox={{
        minX: 0,
        minY: 0,
        width: 20,
        height: 20
      }}
    >
      <path
        d="M11.2729 7.54541H13.3639"
        stroke="#232F3E"
        stroke-width="2.5"
        stroke-linecap="square"
      />
      <path
        d="M11.2729 12.4546H13.3639"
        stroke="#232F3E"
        stroke-width="2.5"
        stroke-linecap="square"
      />
      <path
        d="M17.2727 2H2.72727C2.32561 2 2 2.32561 2 2.72727V17.2727C2 17.6744 2.32561 18 2.72727 18H17.2727C17.6744 18 18 17.6744 18 17.2727V2.72727C18 2.32561 17.6744 2 17.2727 2Z"
        stroke="#232F3E"
        stroke-width="2.5"
        stroke-linecap="square"
      />
      <path
        d="M6.63623 2V18"
        stroke="#232F3E"
        stroke-width="2.5"
        stroke-linecap="square"
      />
    </Icon>
  </TOCWrapper>
);
