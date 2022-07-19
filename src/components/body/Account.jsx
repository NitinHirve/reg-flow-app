import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Slide, Stack, styled, Switch, TextField, Typography } from '@mui/material';
import { Comment, CheckCircleOutline, Visibility, RadioButtonUnchecked, VisibilityOff } from '@mui/icons-material';



const StyledFormBox = styled(Box)({
    margin: "10px 0 10px 0 ",
    maxWidth: "75rem",
})

const StyledFormBoxWithWhite = styled(Box)({
    margin: "10px 0 10px 0 ",
    maxWidth: "75rem",
    backgroundColor: "white",
    paddingLeft: "20px",
    paddingBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #e9e9e9",

})

const StyledForm = styled(Form)({
    maxWidth: "470px",
    // padding: "10px",
    marginTop: "35px",
    paddingLeft: "0.9375rem",
    paddingRight: "0.9375rem",

})

const StyledTextField = styled(TextField)({
    width: "80%",
    backgroundColor: "white",
})

const StyledListItem = styled(ListItem)({
    padding: 0,
    margin: 0
})

const StyledFormControlLabel = styled(FormControlLabel)({
    marginTop: "-10px",
    // marginBottom:"-5px",
    fontSize: "15px!important",
    color: "#757575",
})

const Account = () => {

    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
    });

    const onSubmit = (values) => {
        console.log(values);
    }


    const [capitalLetter, setCapitalLetter] = useState(false)
    const [more8, setMore8] = useState(false)
    const [num, setNum] = useState(false)
    const [smallLetter, setSmallLetter] = useState(false)
    const [referred, setReferred] = React.useState('none');
    const [buttonOpacity,setButtonOpacity]=useState('0.5');

    





    const handlePasswordInputChange = (e) => {
        console.log(e.target.value);
        const txt = e.target.value;
        if (txt.match(/[A-Z]/) != null) {
            setCapitalLetter(true);
        }
        else {
            setCapitalLetter(false);
        }

        if (txt.match(/[a-z]/) != null) {
            setSmallLetter(true);
        }
        else {
            setSmallLetter(false);
        }

        if (txt.match(/[0-9]/) != null) {
            setNum(true);
        }
        else {
            setNum(false);
        }

        if (txt.length > 7) {
            setMore8(true);
        }
        else {
            setMore8(false);
        }

        if(capitalLetter && more8 && num && smallLetter)
        {
            setButtonOpacity('none');
        }
        else {
            setButtonOpacity('0.5');
        }

    }

    const [showEye, setShowEye] = useState(false);

    const showHide = () => {
        setShowEye(!showEye)
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <StyledForm
                >
                    <StyledFormBox >
                        <Typography sx={{ fontFamily: "Poppins", fontSize: "28px" }} fontWeight={600} variant="h5">Create your login</Typography>
                        <Box sx={{ margin: "20px 0 30px" }}>
                            <Typography sx={{ color: "#626262", fontSize: "15px" }} variant="p">It only takes a couple of minutes to create an account. Get started by entering your email address and a memorable password.</Typography>
                        </Box>
                    </StyledFormBox>
                    <StyledFormBoxWithWhite >
                        <Field type="text" label="First and middle name" variant="standard" InputProps={{ disableUnderline: true, }} id="first-and-middle-names" name="name" placeholder="Your name" as={StyledTextField} />
                        {/* <ErrorMessage name="name" /> */}
                    </StyledFormBoxWithWhite>
                    <StyledFormBoxWithWhite >
                        <Field type="text" label="Lastname" variant="standard" InputProps={{ disableUnderline: true, }} id="lastname" name="lastname" placeholder="Your lastname" as={StyledTextField} />
                    </StyledFormBoxWithWhite>
                    <StyledFormBoxWithWhite >
                        <Field type="text" label="Email address" variant="standard" id="email-address" name="email"
                            InputProps={{ disableUnderline: true, }} placeholder="Your email" as={StyledTextField} />
                    </StyledFormBoxWithWhite>
                    <StyledFormBoxWithWhite sx={{ position: "relative", display: "flex", alignItems: "center" }} >

                        <Field
                            sx={{ width: "80%" }}

                            type={showEye ? "text" : "password"}
                            label="Create password"
                            id="login_password_input"
                            name="password"
                            placeholder="Your password"
                            as={StyledTextField}
                            // InputProps={{ onChange:handleBlur }}
                            onKeyUp={handlePasswordInputChange}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                            }}

                        />
                        {
                            showEye ? (<span onClick={showHide} style={{ position: 'absolute', right: '15px', color: "gray", cursor: "pointer" }}><VisibilityOff /></span>)
                                : (<span onClick={showHide} style={{ position: 'absolute', right: '15px', color: "gray", cursor: "pointer" }}><Visibility /></span>)
                        }

                    </StyledFormBoxWithWhite>


                    <StyledFormBox>
                        <Box sx={{ marginBottom: "20px", color: "#757575" }}>
                            <Typography variant='p' sx={{ color: "#757575" }}>Your password must contain:</Typography>
                        </Box>
                        <RadioGroup >
                            <StyledFormControlLabel value="h"
                                control={<Checkbox
                                    id="more8"
                                    disabled={true}
                                    checked={more8}
                                    icon={<RadioButtonUnchecked sx={{ fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />}
                                    checkedIcon={<CheckCircleOutline sx={{ color: "#00aa5e", fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />} />}
                                label="at least 8 characters"
                            />
                            <StyledFormControlLabel value="at least 1 number"
                                control={<Checkbox
                                    id="num"
                                    disabled={true}
                                    checked={num}
                                    icon={<RadioButtonUnchecked sx={{ fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />}
                                    checkedIcon={<CheckCircleOutline sx={{ color: "#00aa5e", fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />} />}
                                label="at least 1 number"
                            />
                            <StyledFormControlLabel value="a lower case character"
                                control={<Checkbox
                                    id="smallLetter"
                                    disabled={true}
                                    checked={smallLetter}
                                    icon={<RadioButtonUnchecked sx={{ fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />}
                                    checkedIcon={<CheckCircleOutline sx={{ color: "#00aa5e", fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />} />}
                                label="a lower case character"
                            />
                            <StyledFormControlLabel value="a upper case character"
                                control={<Checkbox
                                    id="capitalLetter"
                                    disabled={true}
                                    checked={capitalLetter}
                                    icon={<RadioButtonUnchecked sx={{ fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />}
                                    checkedIcon={<CheckCircleOutline sx={{ color: "#00aa5e", fontSize: "20px", stroke: "#ffffff", strokeWidth: 0.5 }} />} />}
                                label="a upper case character"
                            />
                        </RadioGroup>

                    </StyledFormBox>

                    <StyledFormBox>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: "600", color: "black" }} variant="h5" >Were you referred to us?</FormLabel>
                            <RadioGroup
                                sx={{ width: '100%', display: "flex", justifyContent: "space-between" }}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel  onClick={()=>setReferred('none')} value="No" control={<Radio  />} label="No" />
                                <FormControlLabel onClick={()=>setReferred('block')} value="Yes" control={<Radio />} label="Yes" />
                            </RadioGroup>
                        </FormControl>
                    </StyledFormBox>

                    <StyledFormBox sx={{display:referred, marginBottom:"20px"}}>
                        <Box>
                            <Typography sx={{ color: "#626262", fontSize: "15px", wordWrap: "break-word" }} variant="p">
                                Please enter your referral code, or the name of the person who referred you.
                            </Typography>
                        </Box>
                        <StyledFormBoxWithWhite  >
                            <Field  type="text" label="Enter referral code or name" variant="standard" InputProps={{ disableUnderline: true, }} id="referrer-code-name" name="referrer-code-name" placeholder="Your name" as={StyledTextField} />
                        </StyledFormBoxWithWhite>
                    </StyledFormBox>

                    <StyledFormBox  width="100%">
                        <Button elevation={0} type="submit" sx={{width:"100%",borderRadius:"35px",minHeight:"50px",
                        textTransform: 'none',boxShadow: 'none', '&:hover': {
            boxShadow: 'none'},fontFamily: "Poppins",marginBottom:"80px", opacity:buttonOpacity, background: "linear-gradient(95deg,#f03ea6 4.1%,#ff6b00 95.1%,#f03ea6 200%)"}
               
            } variant="contained"><strong>Continue</strong></Button>

                    </StyledFormBox>




                </StyledForm>
            </Formik>
        </>
    )
}

export default Account