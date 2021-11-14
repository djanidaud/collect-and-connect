import { css } from "styled-components";

const styles = ({ theme }) => css`
  width: 100vw;
  display: grid;
  grid-template-areas:
      "nav nav"
      "side map";

  grid-template-rows: min-content 1fr;
  grid-auto-columns: 350px 1fr;


  .sidemenu {
    grid-area: side;
  }

  .header {
    grid-area: nav;
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 45px;
    //color: #437929;
    color: #337a71;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    font-weight: 500;
    padding: 0 30px;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
    letter-spacing: 1px;

    .profile {
      letter-spacing: 0px;
      display: flex;
      font-size: 25px;
      align-items: center;
      font-weight: 300;
    }

    .gems {
      font-weight: 500;
      user-select: none;
      cursor: pointer;
      
      &:hover:before {
        content: "+ ";
      }
      
    }
    
    img {
      width: 60px;
      height: 60px;
      user-select: none;
    }

    .account-name {
      padding-left: 25px;
      padding-right: 15px;
      font-size: 30px;
      color: #3f3f3f;
      user-select: none;
    }

    .circle {
      background-image: url("https://st2.depositphotos.com/2703645/11766/v/450/depositphotos_117665288-stock-illustration-woman-avatar-character.jpg");
      border-radius: 100%;
      width: 70px;
      height: 70px;
      display: block;
      background-size: cover;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
      
      &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
    }
  }
  
  .modal-window {
    transition: opacity 0.5s ease-in-out;
  }
`;

export default styles;
