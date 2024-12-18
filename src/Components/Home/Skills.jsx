import React, { useState } from "react";
import Skillstabstyled from "./Skills.style";
import { CircularProgress, Grid, Stack, Typography, Box } from "@mui/material";
export const Skillstab = () => {
  const [isHovered, setIsHovered] = useState(false);
  const skillsobj = [
    {
      field: "HTML",
      size: 90,
      text: "9/10",
    },
    {
      field: "CSS",
      size: 85,
      text: "8.5/10",
    },
    {
      field: "Javascript",
      size: 80,
      text: "8/10",
    },
    {
      field: "Core Java",
      size: 70,
      text: "7/10",
    },
    {
      field: "React JS",
      size: 80,
      text: "8/10",
    },
    {
      field: "SQL",
      size: 80,
      text: "8/10",
    },
  ];
  return (
    <Skillstabstyled>
      <Grid container rowSpacing="100px" alignSelf="center" width="1200px">
        {skillsobj.map((skill) => (
          <Grid item sm={6} md={6}>
            <Stack
              direction="row"
              className="skillBox"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Typography className="skillName">{skill.field}</Typography>
              <Box
                position="relative"
                display="inline-flex"
                className="cpwrapper"
              >
                <CircularProgress
                  variant="determinate"
                  value={skill.size}
                  size={isHovered ? 80 : 40}
                  classname="circularProgress"
                  sx={{
                    color: "#009E60",
                  }}
                />
                <Box className="skillProgressLabel">
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                  >
                    {skill.text}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Skillstabstyled>
  );
};
