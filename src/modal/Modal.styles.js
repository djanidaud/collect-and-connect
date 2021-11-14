import { css } from "styled-components";

const styles = ({ theme }) => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;


  @keyframes a {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }


  .overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.37);
    z-index: 2000;
  }

  .modal-body {
    width: 450px;
    height: 750px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    border-radius: 6px;

    position: relative;
    background-color: white;
    z-index: 2001;
    animation-name: a;
    animation-duration: 0.5s;
    animation-timing-function: ease-in;

    img {
      width: 100%;
    }

    .title {
      font-size: 40px;
      position: relative;
      bottom: 25px;
      left: 150px;
    }

    .form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      div {
        padding-bottom: 20px;
      }

      span {
        width: 100px;
        display: inline-block;
        font-size: 18px;
      }

      input {
        width: 180px;
        height: 20px;

        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        border-radius: 6px;

        border: 1px solid rgba(164, 164, 164, 0.65);
        box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.2);
        padding: 12px 10px;
        font-size: 18px;

        &:focus {
          outline: none;
        }
      }

      button {
        margin-top: 12px;
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
