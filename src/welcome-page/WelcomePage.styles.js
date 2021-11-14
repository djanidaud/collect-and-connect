import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw);
  height: calc(100vh);

  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.19);
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 45px;
    color: #fff3f3;
    text-shadow: 0 1px 1px rgba(0,0,0,0.1);
    font-weight: 500;
    padding-left: 30px;
  }

  &.isLogin {

    .login {
      opacity: 1;
      transform: translateX(0px);
    }

    .register {
      opacity: 0;
      transform: translateX(800px);
    }
  }

  &:not(.isLogin) {
    .login {
      opacity: 0;
      transform: translateX(-800px);
    }
  }

  .background {
    margin: -10px;
    width: calc(100vw + 20px);
    height: calc(100vh + 20px);
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    background-image: url("https://us.123rf.com/450wm/natis76/natis761511/natis76151100015/48058251-forest-landscape-nature-vector-background.jpg?ver=6");
  }

  .main {
    position: absolute;
    transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgba(255, 255, 255, 0.85);
    padding: 55px 40px;
    border-radius: 10px;
    box-shadow: 0 3px 10px hsla(0, 0%, 0%, 0.4);
  }

  .heading {
    font-size: 45px;
    letter-spacing: 1.5px;
    width: 100%;
    text-align: center;
    padding-bottom: 40px;
    font-weight: 400;
    color: rgb(68, 68, 68);
    cursor: default;
    user-select: none;
  }

  .form-input {
    display: flex;
    align-items: center;

    width: 100%;
    padding-bottom: 25px;

    span {
      width: 110px;
      color: rgb(75, 75, 75);
      font-size: 20px;
      display: inline-block;
      cursor: default;
      user-select: none;
    }


    input {
      width: 220px;
      border-radius: 6px;
      height: 20px;
      border: 1px solid #a4a4a4;
      box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.2);
      padding: 12px 10px;
      font-size: 18px;

      &:focus {
        outline: none;
      }

      &:hover {
        box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.2);
      }
    }
  }

  .form-submit {
    display: flex;
    padding-top: 15px;
    justify-content: space-between;
    width: 100%;

    span {
      text-decoration: underline;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 16px;
      letter-spacing: 1px;
    }

    button {
      padding: 10px 8px;
      font-size: 20px;
      background-color: #43a498;
      color: white;
      width: 140px;
      font-weight: 500;
      letter-spacing: 1px;

      border-radius: 6px;
      box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.2);
      cursor: pointer;
      border: none;

      &:hover {
        outline: none;
        box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.25);
        background-color: #337a71;
      }
    }

  }
`;

export default styles;
