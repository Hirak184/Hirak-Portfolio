import { Box, Card, CardContent, Grid, Link } from "@mui/material";
import StyledContactCard from "./ContactCard.style";
import LinkdlinLogo from "./LinkdlinLogo";
import GmailLogo from "./GmailLogo";
import { GitHub, Google } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactCard = () => {
  const contactInfo = [
    {
      mainLogo: <LinkdlinLogo />,
      smallLogo: <LinkedInIcon />,
      link: (
        <Link
          href="https://www.linkedin.com/in/hirak-kalita-28890a18b/"
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none", color: "#ffffff" }}
        >
          linkdlin
        </Link>
      ),
    },
    {
      mainLogo: <GmailLogo />,
      smallLogo: <Google />,
      link: (
        <Link
          href="mailto:hirakjyoti.jyoti40@gmail.com"
          sx={{ textDecoration: "none", color: "#ffffff" }}
        >
          Gmail
        </Link>
      ),
    },
    {
      mainLogo: <GitHub />,
      smallLogo: <GitHub />,
      link: (
        <Link
          href="https://github.com/Hirak184"
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none", color: "#ffffff" }}
        >
          Github
        </Link>
      ),
    },
  ];
  return (
    <StyledContactCard>
      <Grid
        container
        sx={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        {contactInfo.map((contact) => (
          <Grid item sm={3} md={3}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                backgroundColor: "#106EBE",
                backgroundImage:
                  "radial-gradient( circle at 0% 0%, rgb(37, 7, 44) 15%, rgba(0, 0, 0, 0) 75% ), radial-gradient(circle at 100% 100%,rgb(25, 2, 31, 0.9) 15%,rgba(0, 0, 0, 0) 150%), linear-gradient(   135deg,   rgba(24, 8, 28, 0) 0%, #106EBE 50%, rgba(24, 8, 28, 0) 100% )",
                padding: 0,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="card"
            >
              <CardContent className="cardcontent">
                <Box
                  sx={{
                    display: "block",
                    height: "10px",
                    marginTop: "40px",
                  }}
                  className="smallLogo"
                >
                  {contact.smallLogo}
                </Box>
                <Box className="mainlogo">{contact.mainLogo}</Box>
                <Box
                  sx={{
                    marginTop: "80px",
                    height: "30px",
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(37, 99, 235, 1)",
                    border: "2px solid black",
                  }}
                  className="linkbox"
                >
                  {contact.link}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StyledContactCard>
  );
};
export default ContactCard;
