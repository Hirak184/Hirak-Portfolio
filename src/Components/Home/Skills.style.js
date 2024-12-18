import styled from "styled-components";
const Skillstabstyled = styled.div`
  padding: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  .skillBox {
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 150px;
    background-image: linear-gradient(
      109.6deg,
      rgb(11, 132, 145 ) 35.2%,
      rgb(0, 0, 0, 0.5) 65.1%
    );
    align-items: center;
    padding: 20px;
    border-radius: 24px;
    transition: 1s linear;
  }
  .skillBox:hover {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    transition: 1s linear;
    position: absolute;
    z-index: 15;
    box-shadow: 3px 3px 10px 1px rgb(11, 132, 145);

    .skillName {
      font-size: 25px;
    }
    .skillProgressLabel > div {
      font-size: 25px;
    }
    .MuiCircularProgress-circleDeterminate {
      transition: 1s;
    }
  .cpwrapper{
    box-shadow: 1px 1px 10px 1px #009E60; // Apply shadow on wrapper
    border-radius: 50%; // Rounded shadow for circular appearance
    transition: 1s;
  }
  }
  .skillName {
    transition: 1s;
    color: #ffffff;
  }
  .skillProgressLabel {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      color: #ffffff;
    }
  }
`;
export default Skillstabstyled;
