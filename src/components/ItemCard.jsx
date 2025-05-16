import { Card, CardContent, CardMedia, Typography, Box, Chip, Rating, Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getPlaceholderImage, handleImageError } from '../utils/imageUtils';

const ItemCard = ({ 
  name, 
  description, 
  image, 
  rating, 
  features, 
  address,
  googleMapUrl,
  openHours,
  priceRange,
  onClick,
  height = 220
}) => {
  // Truncate description for display
  const truncatedDescription = description.length > 120 
    ? `${description.substring(0, 117)}...` 
    : description;

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ position: 'relative', pt: `${(height / 3) * 2}px` }}>
        <LazyLoadImage
          alt={name}
          height={height}
          src={image || '/images/placeholder.jpg'}
          width="100%"
          effect="blur"
          placeholderSrc={getPlaceholderImage()}
          onError={handleImageError}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {priceRange && (
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 12, 
              right: 12, 
              bgcolor: 'rgba(0, 0, 0, 0.6)', 
              color: 'white',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}
          >
            {priceRange}
          </Box>
        )}
        {rating && (
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: 12, 
              right: 12, 
              bgcolor: 'rgba(0, 0, 0, 0.6)', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              px: 1,
              py: 0.5,
              borderRadius: 1
            }}
          >
            <Rating value={rating} readOnly precision={0.5} size="small" sx={{ color: '#FFD700' }} />
            <Typography variant="body2" sx={{ ml: 0.5, fontWeight: 'bold' }}>
              {rating}
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {truncatedDescription}
        </Typography>
        
        {features && features.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
            {features.slice(0, 3).map((feature, index) => (
              <Chip 
                key={index} 
                label={feature} 
                size="small" 
                sx={{ 
                  fontSize: '0.7rem', 
                  height: 24,
                  bgcolor: 'primary.light',
                  color: 'white',
                }}
              />
            ))}
            {features.length > 3 && (
              <Chip
                label={`+${features.length - 3}`}
                size="small"
                sx={{ 
                  fontSize: '0.7rem', 
                  height: 24,
                  bgcolor: 'grey.400',
                  color: 'white',
                }}
              />
            )}
          </Box>
        )}
        
        {address && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0.5 }}>
            {address.length > 40 ? `${address.substring(0, 37)}...` : address}
          </Typography>
        )}
        
        {openHours && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            영업시간: {openHours}
          </Typography>
        )}
        
        {googleMapUrl && (
          <Box sx={{ mt: 'auto', pt: 1.5 }}>
            <Button 
              variant="outlined" 
              size="small" 
              href={googleMapUrl} 
              target="_blank"
              fullWidth
              onClick={(e) => {
                e.stopPropagation();
              }}
              sx={{
                textTransform: 'none',
                mt: 'auto'
              }}
            >
              구글 지도에서 보기
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard; 