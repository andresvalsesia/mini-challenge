import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as LinkRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';


const Footer = () => {
  const matchMobile = useMediaQuery('(max-width:575px)');

  return (
    <Grid container sx={{ width: '100%', backgroundColor: '#354259', textAlign: 'center', padding: '1rem' }}>
      {matchMobile ? (

        <>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>

            <Box>

            <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/"> <HomeRoundedIcon sx={{ fontSize: "30px", color: "white", float: 'left', "&:hover": { color: '#FF7433', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter> 
              <a target="_blank" href="https://www.facebook.com/">  <FacebookIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#385898', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.instagram.com/"> <InstagramIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#E1306C', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.linkedin.com/in/andres-valsesia/"><LinkedInIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#00acee', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="mailto:myitenerary@gmail.com"><DraftsIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#d93025 ', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://github.com/andresvalsesia/mytinerary-valsesia"><GitHubIcon sx={{ fontSize: "30px", color: "white", marginLeft: '0.3rem', "&:hover": { color: 'black', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
          <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/formulario"><TableRowsIcon sx={{ fontSize: "30px", color: "white", float: 'right', "&:hover": { color: '#34A853', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter>

            </Box>

          </Grid>


          <Grid item xs={12}>
            <Typography variant="h5" color='white' sx={{ fontWeight: 'bold', fontSize: '20px' }}> Challengue  © 2022 </Typography>
            <Typography variant="h5" color="white" sx={{ fontFamily: 'alegreya-light;', marginBottom: '0.5rem', fontSize: '20px' }} >
              Andres Valsesia. All rights reserved.
            </Typography>

          </Grid>
        </>




      ) : (


        <>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>

            <Box>
           <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/"> <HomeRoundedIcon sx={{ fontSize: "35px", color: "white", float: 'left', "&:hover": { color: '#FF7433', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter> 
              <a target="_blank" href="https://www.facebook.com/">  <FacebookIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#385898', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.instagram.com/"> <InstagramIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#E1306C', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://www.linkedin.com/in/andres-valsesia/"><LinkedInIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#00acee', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="mailto:myitenerary@gmail.com"><DraftsIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: '#d93025 ', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
              <a target="_blank" href="https://github.com/andresvalsesia/mytinerary-valsesia"><GitHubIcon sx={{ fontSize: "35px", color: "white", marginLeft: '0.3rem', "&:hover": { color: 'black', transition: '0.3s', transform: 'rotate(360deg)' } }} /></a>
        <LinkRouter  onClick={()=>{window.scrollTo(0,0);}} to="/formulario" >   <TableRowsIcon sx={{ fontSize: "35px", color: "white", float: 'right', "&:hover": { color: '#34A853', transition: '0.3s', transform: 'rotate(360deg)' } }} /> </LinkRouter> 

            </Box>

          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" color='white' sx={{ fontWeight: 'bold' }}> Challengue  © 2022 </Typography>
            <Typography variant="h5" color="white" sx={{ fontFamily: 'alegreya-light;', marginBottom: '0.5rem' }} >
             Andres Valsesia. All rights reserved.
            </Typography>

          </Grid>
        </>
      )}

    </Grid>
  )
}

export default Footer
