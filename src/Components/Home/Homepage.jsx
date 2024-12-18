/* eslint-disable jsx-a11y/alt-text */
import Homepagestyled from "./Homepage.style";
import { Skillstab } from "./Skills";
import InformationCard from "./InformationCard";
import { Box, keyframes, Typography } from "@mui/material";

export const Homepage = () => {
  const animation = keyframes`
    100%{
      background-position: 0 0;
    }
  `
  return (
    <Homepagestyled>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding:'90px' }}>
        <InformationCard />
        <Typography
          sx={{
            display:'flex',
            alignItems:'center',
            width: '720px',
            fontSize: "60px",
            color: "transparent",
            WebkitTextStroke:"1px #00dbde",
            backgroundImage: 'linear-gradient(to right, #00dbde 0%, #fc00ff 100%)',
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            backgroundPosition: "-1000px 0",
            animation: `${animation} 3s linear infinite alternate`,
          }}
        >
          Hi I am Hirak A Passionate Web Developer.
        </Typography>
      </Box>
      <Skillstab />
    </Homepagestyled>
  );
};
