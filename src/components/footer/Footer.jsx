import { Adb, Menu } from '@mui/icons-material'
import { AppBar, Button, Grid, IconButton, Paper, Stack, styled, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {

    const pages = ['Products', 'Pricing', 'Blog'];
    return (
        <>
            <AppBar sx={{ color: "gray!important" }} elevation={0} bgcolor="white" position="static">
                <Toolbar sx={{ backgroundColor: "white", minHeight: "85px", fontSize: "12px", paddingTop: "20px", paddingBottom: "20px" }} >


                    <Grid sx={{alignItems:{xs:"center"} }} container spacing={2}>
                        <Grid item sm={1.5} xs={12} sx={{textAlign: "center"}}>
                            Terms & conditions
                        </Grid>
                        <Grid item sm={1.2} xs={12} sx={{textAlign: "center"}}>
                            Privacy policy
                        </Grid>
                        <Grid item sm={1} xs={12} sx={{textAlign: "center"}}>
                            Cookies
                        </Grid>
                        <Grid item sm={2} xs={12} sx={{textAlign: "center"}}>
                            Regulatory information
                        </Grid>
                    </Grid>

                    {/* <Stack  sx={{flexDirection:{xs:"column",sm:"row"}}} spacing={2}>
                    <Box >
                        <Box> Terms & conditions</Box>
                        <Box>Privacy policy</Box>
                        <Box>Cookies</Box>
                        <Box>Regulatory information</Box>
                    </Box>
                    </Stack> */}


                </Toolbar>
            </AppBar>
        </>
    )
}

export default Footer