import styled, { css } from 'styled-components';

export const NavBarContainer = styled.div`
  ${({ theme: { layout, colors, fontSize } }) => css`
    display: flex;
    align-items: center;
    height: ${layout.navBarHeight}px;
    max-height: ${layout.navBarHeight}px;
    width: 100%;
    border: 2px solid ${colors.secondary};
    background: ${colors.primary};
    border-radius: 0 0 30% 30%;
    padding: 15px;
    & p {
      margin: 0 auto;
      user-select: none;
      font-size: ${fontSize.XXXL}px;
      color: ${colors.secondary};
      text-decoration: overline;
      animation: bling 10s infinite;
    }
    @keyframes bling {
      0% {
        text-shadow: 1px 0 ${colors.mainBackground};
      }
      15% {
        text-shadow: 4px 0px ${colors.secondary};
      }
      25% {
        text-shadow: 2px -1px ${colors.mainBackground};
      }
      50% {
        text-shadow: -1px 0 ${colors.mainBackground};
      }
      75% {
        text-shadow: -3px 1px ${colors.secondary};
      }
      100% {
        text-shadow: 1px 0px ${colors.mainBackground};
      }
    }
  `}
`;
export const NavBarLogoContainer = styled.div`
  ${({ theme: { colors } }) => css`
    border-radius: 90%;
    padding: 15px;
    transition: 0.4s;
    margin-top: -35px;
    &:hover {
      margin-top: -20px;
      background: linear-gradient(
        135deg,
        ${colors.primary} 0%,
        ${colors.secondary} 100%
      );
      box-shadow: inset -8px -7px 4px 0px rgba(0, 0, 0, 0.3);
      & svg > * > * {
        fill: ${colors.mainBackground};
      }
    }
  `}
`;
