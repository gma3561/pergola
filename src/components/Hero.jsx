import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  height = '70vh',
  minHeight = '400px',
  maxHeight = '800px',
  buttons = [],
  overlayOpacity = 0.5,
  textAlign = 'center'
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box 
      sx={{
        position: 'relative',
        height,
        minHeight,
        maxHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        "&::before": {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          p: isMobile ? 3 : 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: textAlign === 'center' ? 'center' : 'flex-start'
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textAlign,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            mb: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          {title}
        </Typography>
        
        {subtitle && (
          <Typography 
            variant="h5" 
            sx={{
              color: 'white',
              fontWeight: 300,
              textAlign,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              maxWidth: textAlign === 'center' ? '800px' : '600px',
              mb: 4,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
            }}
          >
            {subtitle}
          </Typography>
        )}
        
        {buttons.length > 0 && (
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: textAlign === 'center' ? 'center' : 'flex-start',
            width: isMobile ? '100%' : 'auto'
          }}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                component={Link}
                to={button.to}
                variant={index === 0 ? "contained" : "outlined"}
                size="large"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  backgroundColor: index === 0 ? 'primary.main' : 'transparent',
                  border: index === 0 ? 'none' : '2px solid white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: index === 0 ? 'primary.dark' : 'rgba(255, 255, 255, 0.1)',
                    border: index === 0 ? 'none' : '2px solid white',
                  }
                }}
              >
                {button.label}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero; 