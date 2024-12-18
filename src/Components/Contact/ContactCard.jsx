import { Box, Card, CardContent, Grid } from "@mui/material";
import StyledContactCard from "./ContactCard.style";
import LinkdlinLogo from "./LinkdlinLogo";
import GmailLogo from "./GmailLogo";
import GitHubLogo from "./GithubLogo";
import { GitHub, Google } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactCard = () => {
  const contactInfo = [
    {
      mainLogo: <LinkdlinLogo />,
      smallLogo: <LinkedInIcon />,
    },
    {
      mainLogo: <GmailLogo />,
      smallLogo: <Google />,
    },
    {
      logo: <GitHubLogo />,
      smallLogo: <GitHub />,
    },
  ];
  return (
    <StyledContactCard>
      <Grid container rowGap="100px">
        {contactInfo.map((contact) => (
          <Grid item sm={6} md={6}>
            <Card
              sx={{
                width: "300px",
              }}
            >
              <CardContent>
                <Box>{contact.smallLogo}</Box>
                {contact.mainLogo}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StyledContactCard>
  );
};
export default ContactCard;
