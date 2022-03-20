import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/system';

const StyledBox = styled(Paper, {})({
    width: "120px",
    height: "120px",
    background: "red",
    border: "1px solid green"
})

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280
    }
  }));

const StyledPaper = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
        <DashboardLayoutRoot>
            <Typography variant='h4'>This is New styled api in mui_v5</Typography>
            <StyledBox />
        </DashboardLayoutRoot>
    </Container>
  )
}

export default StyledPaper