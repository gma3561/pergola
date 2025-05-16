import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import WeatherIcon from '@mui/icons-material/WbSunny';
import TransportIcon from '@mui/icons-material/DirectionsBus';
import HealthIcon from '@mui/icons-material/HealthAndSafety';
import CultureIcon from '@mui/icons-material/Museum';
import WifiIcon from '@mui/icons-material/Wifi';
import MoneyIcon from '@mui/icons-material/Payments';
import TravelIcon from '@mui/icons-material/Luggage';
import ShoppingIcon from '@mui/icons-material/ShoppingBag';

const TipCard = ({ title, content, category, important, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'weather':
        return <WeatherIcon />;
      case 'transport':
        return <TransportIcon />;
      case 'health':
        return <HealthIcon />;
      case 'culture':
        return <CultureIcon />;
      case 'wifi':
        return <WifiIcon />;
      case 'money':
        return <MoneyIcon />;
      case 'travel':
        return <TravelIcon />;
      case 'shopping':
        return <ShoppingIcon />;
      default:
        return <TravelIcon />;
    }
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        borderTop: important ? '4px solid #f44336' : 'none',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {important && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#f44336',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.7rem',
            padding: '2px 10px',
            borderBottomLeftRadius: 8,
            zIndex: 1,
          }}
        >
          필수
        </Box>
      )}
      
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 3 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 2,
            gap: 1
          }}
        >
          <Box
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0,
            }}
          >
            {getIcon()}
          </Box>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {content}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 'auto' }}>
          <Chip 
            label={category} 
            size="small" 
            sx={{ 
              backgroundColor: 'primary.light',
              color: 'white',
              fontSize: '0.7rem',
              height: 24 
            }} 
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TipCard; 