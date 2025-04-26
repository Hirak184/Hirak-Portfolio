import { Typography, Grid, Card, CardContent, Box, Chip } from "@mui/material";
import WorkPageStyled from "./WorkPage.style";
export const WorkPage = () => {
  const ExperienceInfo = [
    {
      company: "Deutsche Bank",
      profile: "Associate Engineer",
      description: "Build UI for the banking application used by corporate banking sector and enhancing with automation testing.",
      techStack:["HTML", "CSS", "JavaScript","React","Cyprus"],
      flexDirection: "row",
    },

    {
      company: "Barclays",
      profile: "BA3",
      description: "Build Graphs to make and run jobs for transforming data and loading transformed data for company use",
      techStack:["SQL","UNIX","Ab-Initio"],
      flexDirection: "row-reverse",
    },
    {
      company: "Publicis Sapient",
      profile: "Associate Experience Technology L1",
      description: "Build and maintain UI or several clients and working with client technical teams to create web applications for client useage",
      techStack:["HTML", "CSS", "JavaScript","React"],
      flexDirection: "row",
    },
    {
      company: "Publicis Sapient",
      profile: "Junior Associate Technology",
      description: "Build and maintain UI or several clients and working with client technical teams to create web applications for client useage",
      techStack:["HTML", "CSS", "JavaScript","React"],
      flexDirection: "row-reverse",
    },
  ];
  return (
    <WorkPageStyled>
      <Typography sx={{ fontSize: "100px", color: "#5b7c99" }}>
        Work Experience
      </Typography>
      <Grid container rowGap={"100px"} sx={{ padding: "80px" }}>
        {ExperienceInfo.map((content) => (
          <Grid
            item
            sm={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: content.flexDirection,
              gap: "350px",
              justifyContent: "center",
            }}
          >
            <Card sx={{ height: "250px", width: "400px",  boxShadow: "0 20px 25px -5px #000000, 0 10px 10px -5px #000000", borderRadius:'50px' }}>
              <CardContent>
                <Typography variant="h3" sx={{fontSize: '40px'}}>{content.company}</Typography>
                <Typography variant="h6" sx={{fontSize: '20px', marginTop:'50px'}}>{content.profile}</Typography>
              </CardContent>
            </Card>
            <Box>
            <Typography sx={{ color: "#ffffff", width:'350px', textAlign: 'left' }}>
              {content.description}
            </Typography>
            <Box sx={{display: "flex", flexDirection:'flex-start', marginTop: '50px'}}>
            {
              content.techStack.map((tech)=>(
                <Chip label={tech} color="primary" sx={{marginLeft:'10px'}}/>
              ))
            }
            </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </WorkPageStyled>
  );
};
