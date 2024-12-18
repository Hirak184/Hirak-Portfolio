import styled from "styled-components";
const NavigationBarStyled = styled.div`
.name{
font-size:30px;
}
.contents{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    .links{
        color: white;
        text-decoration: none;
        
    }
}
.icon_name{
width: 10%;
display: flex;
justify-content: space-around;
}
.navbar{
    display: flex;
    justify-content: space-between;
}
`
export default NavigationBarStyled;