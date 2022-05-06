import * as React from 'react'
import { Grid } from '@mui/material'
import SignIn from '../../components/SignIn/SignIn'
import { Paper } from '@material-ui/core'
import { signInPageStyles } from './SignInPageStyles'

const SignInPage = () => (
 <Grid container sx={{ mt: 10 }}>
  <Grid item md={4} />
  <Grid item md={4} alignSelf="center">
   <Paper elevation={12} style={signInPageStyles.paperStyle}>
    <SignIn />
   </Paper>
  </Grid>
 </Grid>
)

export default SignInPage
