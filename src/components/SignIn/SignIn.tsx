import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const SignIn = () => {
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
   email: data.get('email'),
   password: data.get('password'),
  })
 }

 return (
  <Container component="main" maxWidth="xs">
   <CssBaseline />
   <Box
    sx={{
     marginTop: 8,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
    }}
   >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
     <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
     Sign in
    </Typography>
    <Box noValidate component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
     <TextField
      required
      fullWidth
      autoFocus
      margin="normal"
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
     />
     <TextField
      required
      fullWidth
      margin="normal"
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
     />
     <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
     </Button>
    </Box>
   </Box>
  </Container>
 )
}

export default SignIn
