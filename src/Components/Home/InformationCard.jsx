import React from "react";
import InformationCardStyled from "./InformationCard.style";
import { Box, Typography } from "@mui/material";
import ProfileImage from "../../assets/ProfileImage.jpg";

const InformationCard = () => {
  return (
    <InformationCardStyled>
      <Box
        sx={{
          width: "600px",
          height: "500px",
          marginLeft: "100px",
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(2.1px)",
          webkitBackdropFilter: "blur(2.1px)",
          border: "1px solid rgba(255, 255, 255, 0.56)",
        }}
      >
        <div className="image-container">
          <img src={ProfileImage} alt="ProfileImg" className="profileImage" />
        </div>
        <Typography sx={{ color: "#d5d5d5" }}>
        I am a passionate web developer with a strong foundation in both
        frontend and backend development, committed to creating engaging,
        user-friendly web applications. I have experience working with HTML,
        CSS, and JavaScript to build dynamic interfaces, and I’m proficient in
        using frameworks like React and Vue to streamline and enhance the user
        experience. On the backend, I work with technologies like Node.js and
        Express (or replace with your backend stack) to handle server-side
        logic, API integration, and database management.{" "}
      </Typography>
      </Box>
    </InformationCardStyled>
  );
};
export default InformationCard;
