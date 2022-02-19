import React from 'react'
import { Box } from '@mui/system'
import { Container, Grid, Typography, Button } from '@mui/material'

const img1 = "http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png";

const ProductContainer = () => {
  return (
    <Container maxWidth="xl">
      {/* Featured Product */}
        <Grid container spacing={2}>
          <Grid md={6} item sx={{display: "flex", flexDirection: {xs:"column", lg:"row", justifyContent:"center", alignItems:"center"}}}>
            <Box component="img" src={img1} sx={{width: {xs:'100%',lg: "50%"}}} />
            <Box sx={{paddingLeft: "10px", marginTop: {xs: "20px"}}}>
              <Typography variant="h6" sx={{fontWeight: "bold"}}>
                Winter Vegitables 2022
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique modi earum?
              </Typography>
              <Typography variant="h6" sx={{fontWeight: "bold", color: "red"}}>
                $120
              </Typography>
              <Button variant='contained' color="primary">Add to Cart</Button>
            </Box>
          </Grid>
          <Grid md={6} item sx={{display: "flex", flexDirection: {xs:"column", lg:"row", justifyContent:"center", alignItems:"center"}}}>
            <Box component="img" src={img1} sx={{width: {xs:'100%',lg: "50%"}}} />
            <Box sx={{paddingLeft: "10px", marginTop: {xs: "20px"}}}>
              <Typography variant="h6" sx={{fontWeight: "bold"}}>
                Winter Vegitables 2022
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique modi earum?
              </Typography>
              <Typography variant="h6" sx={{fontWeight: "bold", color: "red"}}>
                $120
              </Typography>
              <Button variant='contained' color="primary">Add to Cart</Button>
            </Box>
          </Grid>
        </Grid>
      {/* Product List */}
      <h1>Hi</h1>
    </Container>
  )
}

export default ProductContainer