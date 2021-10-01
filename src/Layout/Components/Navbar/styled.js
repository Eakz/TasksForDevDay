import styled, { css } from 'styled-components';
import { ANIMATION_TIMING } from '../../../App/constants';

export const NavBarContainer = styled.div`
  ${({ theme: { layout, colors, fontSize }, animation }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: ${layout.navBarHeight}px;
    width: 100%;
    border: 2px solid ${colors.secondary};
    background: ${colors.primary};
    border-radius: 0 0 30% 30%;
    padding: 7px;
    box-shadow: inset -15px -15px 35px ${colors.secondary};

    & > div {
      display: flex;
      width: 100%;
      padding: 15px;
      flex-direction: row;
      max-height: ${layout.navBarHeight}px;
      align-items: center;
      justify-content: flex-start;
    }
    ${animation &&
    css`
      animation: navLoad ${ANIMATION_TIMING}ms linear;
    `}
    & p {
      margin: 0 auto;
      user-select: none;
      font-size: ${fontSize.XXXL}px;
      color: ${colors.secondary};
      text-decoration: overline;
      animation: bling 10s infinite;
      & #odd {
        animation: letterColorSwitchOdd 4s ease-in-out infinite;
      }
      & #even {
        animation: letterColorSwitchEven 4s ease-in-out infinite;
      }
    }
    @keyframes letterColorSwitchOdd {
      0% {
        color: ${colors.secondary};
      }
      25% {
        color: ${colors.tertiary};
      }
      75% {
        color: ${colors.tertiary};
      }
      100% {
        color: ${colors.secondary};
      }
    }
    @keyframes letterColorSwitchEven {
      0% {
        color: ${colors.tertiary};
      }
      25% {
        color: ${colors.secondary};
      }
      75% {
        color: ${colors.secondary};
      }
      100% {
        color: ${colors.tertiary};
      }
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
    @keyframes navLoad {
      0% {
        height: ${layout.navBarHeight}px;
      }
      25% {
        height: 100vh;
        border-radius: 0;
      }
      90% {
        height: 100vh;
        border-radius: 0;
      }
      100% {
        height: ${layout.navBarHeight}px;
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
