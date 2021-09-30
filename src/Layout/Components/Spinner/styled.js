import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const CubeSpinner = styled.div`
  border-radius: 100%;
  height: 10px;
  width: 10px;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
    40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
    40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
    40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
  -webkit-animation: load 3s infinite linear;
  -moz-animation: load 3s infinite linear;
  -o-animation: load 3s infinite linear;
  animation: load 3s infinite linear;

  @-webkit-keyframes load {
    0% {
      -webkit-transform: translate(0px, 0px), rotate(0deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    25% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    50% {
      box-shadow: 0px -40px 0px 0px #ffffff, 0px 40px 0px 0px #ffffff,
        -40px 0px 0px 0px #ffffff, 40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    70% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
    }

    75% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      height: 10px;
      width: 10px;
    }

    80% {
      -webkit-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    85% {
      -webkit-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    90% {
      -webkit-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 10px;
      width: 10px;
    }

    95% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    100% {
      -webkit-transform: rotate(360deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }
  }

  @-moz-keyframes load {
    0% {
      -moz-transform: translate(0px, 0px), rotate(0deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    25% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    50% {
      box-shadow: 0px -40px 0px 0px #ffffff, 0px 40px 0px 0px #ffffff,
        -40px 0px 0px 0px #ffffff, 40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    70% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
    }

    75% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      height: 10px;
      width: 10px;
    }

    80% {
      -moz-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    85% {
      -moz-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    90% {
      -moz-transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 10px;
      width: 10px;
    }

    95% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    100% {
      -moz-transform: rotate(360deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }
  }

  @keyframes load {
    0% {
      transform: translate(0px, 0px), rotate(0deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    25% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    50% {
      box-shadow: 0px -40px 0px 0px #ffffff, 0px 40px 0px 0px #ffffff,
        -40px 0px 0px 0px #ffffff, 40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    70% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
    }

    75% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      height: 10px;
      width: 10px;
    }

    80% {
      transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    85% {
      transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    90% {
      transform: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 10px;
      width: 10px;
    }

    95% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    100% {
      transform: rotate(360deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }
  }
  @-o-keyframes load {
    0% {
      -o-transforms: translate(0px, 0px), rotate(0deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    25% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    50% {
      box-shadow: 0px -40px 0px 0px #ffffff, 0px 40px 0px 0px #ffffff,
        -40px 0px 0px 0px #ffffff, 40px 0px 0px 0px #ffffff,
        -40px -40px 0px 0px #ffffff, 40px 40px 0px 0px #ffffff,
        -40px 40px 0px 0px #ffffff, 40px -40px 0px 0px #ffffff;
    }

    70% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
    }

    75% {
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      height: 10px;
      width: 10px;
    }

    80% {
      -o-transforms: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    85% {
      -o-transforms: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 40px;
      width: 40px;
    }

    90% {
      -o-transforms: translate(0px, 0px) rotate(360deg);
      box-shadow: 0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff,
        0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff;
      background-color: #ffffff;
      height: 10px;
      width: 10px;
    }

    95% {
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }

    100% {
      -o-transforms: rotate(360deg);
      box-shadow: 0px 40px 0px 0px #ffffff, 0px -40px 0px 0px #ffffff,
        40px 0px 0px 0px #ffffff, -40px 0px 0px 0px #ffffff,
        40px 40px 0px 0px #ffffff, -40px -40px 0px 0px #ffffff,
        40px -40px 0px 0px #ffffff, -40px 40px 0px 0px #ffffff;
    }
  }
`;
