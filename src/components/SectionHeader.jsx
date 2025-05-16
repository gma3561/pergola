import { Box, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  divider = true,
  marginBottom = 6
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box 
      sx={{
        width: '100%',
        mb: marginBottom,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{
          fontWeight: 'bold',
          textAlign: align,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
          position: 'relative',
          mb: subtitle ? 2 : (divider ? 1 : 0),
          "&::after": !divider ? {
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: align === 'center' ? '50%' : 0,
            transform: align === 'center' ? 'translateX(-50%)' : 'none',
            width: align === 'center' ? '80px' : '60px',
            height: '4px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '2px'
          } : {}
        }}
      >
        {title}
      </Typography>
      
      {subtitle && (
        <Typography 
          variant="body1" 
          sx={{
            color: 'text.secondary',
            textAlign: align,
            maxWidth: '800px',
            fontSize: { xs: '0.95rem', md: '1rem' },
            mb: divider ? 2 : 0
          }}
        >
          {subtitle}
        </Typography>
      )}
      
      {divider && (
        <Divider 
          sx={{ 
            width: isMobile ? '100%' : (align === 'center' ? '200px' : '100px'),
            borderColor: theme.palette.primary.main,
            borderBottomWidth: 3,
            mt: 1
          }} 
        />
      )}
    </Box>
  );
};

export default SectionHeader; 