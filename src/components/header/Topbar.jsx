import React from 'react';
import { AppBar, Avatar, Step, StepLabel, Stepper, styled, Toolbar } from '@mui/material';
import { Close } from '@mui/icons-material';
import MediaQuery, { useMediaQuery } from "react-responsive";



const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-around",
    height: "70px",
    backgroundColor: "#ffffff",

})

const StyledAvatar = styled(Avatar)({
    borderRadius: 0,
})

const steps = ["Account", "Security", "Details", "Preferences", "Identity"];

const TopBar = () => {
    return (
        <AppBar elevation={0} position="sticky">
            <StyledToolbar   >
                <StyledAvatar
                    sx={{ display: { xs: "none", sm: "block" }, width: 110, height: 35, cursor: "pointer" }}
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/ico_CD_large.svg"
                />
                <StyledAvatar
                    sx={{ display: { xs: "block", sm: "none" }, height: 30, width: 28 }}
                    src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/c-d-logo-icon.svg"
                />



                
                <MediaQuery minWidth={700} >
                <Stepper activeStep={0}>
                    {steps.map((step) => (
                        <Step>
                            <StepLabel  >{step}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                    </MediaQuery>

                    <MediaQuery maxWidth={699} >
                    <Stepper activeStep={0}>
                    {steps.map((step) => (
                        <Step>
                            <StepLabel  >{}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                    </MediaQuery>
              
                <Close sx={{ color: "gray", fontSize: "30px" }} />



            </StyledToolbar>
           

        </AppBar >
    )
}

export default TopBar