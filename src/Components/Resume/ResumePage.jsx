/* eslint-disable jsx-a11y/alt-text */
import ResumePageStyled from "./ResumePage.style";
import resume1 from "../../assets/Resume1.png";
import resume2 from "../../assets/Resume2.png";
import DownloadIcon from '@mui/icons-material/Download';
import Button from "@mui/material/Button";
export const ResumePage = () => {
  return (
    <ResumePageStyled>
      <Button
        onClick={() => {
          const link = document.createElement("a");
          link.href = `${process.env.PUBLIC_URL}/Hirak-Resume.pdf`;
          link.download = "Hirak-Resume.pdf";
          link.click();
        }}
        variant="contained"
        endIcon={<DownloadIcon />}
        sx={{
          float: "right",
          position: "absolute",
          zIndex: 4,
          top: "48px",
          right: "50px",
          backgroundColor: '#ffffff',
          border: '4px solid grey',
          borderRadius: '100px',
          fontWeight: '600',
          color: '#000000'
        }}
      >
        Download Resume
      </Button>
      <img src={resume1} alt="r1" className="resume" />
      <img src={resume2} alt="r2" className="resume" />
    </ResumePageStyled>
  );
};
