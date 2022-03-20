import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/Styles';
import { MyButton } from '../styles/MyButton';

const CustomButton = () => {
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <Typography variant='h4' sx={{ my: 4 }}>We can customize this buttons globially</Typography>
            <Button variant='contained' color="primary">This is Custom Button</Button>
            <MyButton variant='contained' color="secondary">This is Custom Button</MyButton>
        </Container>
    </ThemeProvider>
  )
}

export default CustomButton