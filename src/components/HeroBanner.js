import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
 export const HeroBanner = () => {
  return (
    <Box sx ={{
        mt : {lg : '212px', xs : '70px'},
        ml : {sm : '50px'} 
    }}  
    position = 'relative' p = '20px' >
        <Typography color = '#9c27b0' fontSize= '26px' fontWeight = '700'  >
            Fitness Club
        </Typography>
        <Typography fontWeight = "700"
        sx = {{fontSize: {lg:'44px', xs:'40px'}}}
        mb = '23px' mt = '30px' >
            Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography fontSize = '22px' lineheight = "35px" mb = {2}
        sx = {{color : '#303646', fontWeight : '600'}}>
           Check out the most Effective Exercises
        </Typography>
        <Button variant = "contained" color = "secondary" href = "#exercises"
        sx = {{ padding :'15px 20px'}}>Explore Exercises</Button >
        <Typography  color = '#9c27b0' fontWeight={700}
        sx ={{
            opacity : 0.2,
             display : {lg : 'block', xs : 'none'} 
           
        }}
        fontSize = {200}>Exercise</Typography>
        <img src = {HeroBannerImage} alt = "banner" className='hero-banner-img' />
    </Box >
  )
}
export default HeroBanner
