import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  padding: 30px;
  //background-color: #88bb88;
  background-color: #48a397;
  user-select: none;
  
  .filter {
    
    width: calc(100% - 30px);
    border-radius: 6px;
    height: 20px;
    border: 1px solid rgba(164, 164, 164, 0.65);
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

  .lupa {
    width: 30px;
    height: 30px;
    background-image: url("https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/search1600.png");
    display: block;
    background-size: cover;
    position: relative;
    bottom: 35px;
    left: 240px;
  }
  
  .type {
    color: white;
    font-size: 28px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    
    input {
      margin-right: 15px;
      width: 20px;
      height: 20px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
  }
  
  .min-money, .max-money {
    width: 80px;
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
  

  .money-range {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
  
  .price-range {
    color:white;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 15px;
    text-align: center;
    font-weight: 500;
  }
`;

export default styles;
