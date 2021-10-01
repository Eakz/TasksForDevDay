import styled, { css } from 'styled-components';

export const FooterContainer = styled.div`
  ${({ theme: { colors, layout, fontSize } }) => css`
    width: calc(100% - 30px);
    position: sticky;
    bottom: 0;
    height: ${layout.footerHeight}px;
    background: ${colors.mainText};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 15px;
    & p {
      font-size: ${fontSize.small}px;
      font-weight: 800;
      color: ${colors.mainBackground};
    }
  `}
`;
