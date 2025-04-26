import styled from "styled-components";

const StyledContactCard = styled.div`
  .card {
    position: relative;
    padding: 0;
  }
.card:hover{
  .linkbox{
  border-radius: 10px;
  transform:scale(1.4); 
  box-shadow: 0 20px 25px -5px #ffffff, 0 10px 10px -5px #ffffff;
}
}
  .mainlogo {
      position: absolute;
      top: 15px;
      left: 15px;
    }
`;
export default StyledContactCard;
