// Function to get placeholder image URL for lazy loading
export const getPlaceholderImage = () => {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udQpzaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=';
};

// Function to handle image loading errors
export const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = '/images/placeholder.jpg';
};

// Function to get public URL for an image
export const getImageUrl = (path) => {
  // If path already starts with http or https, return as is
  if (path.startsWith('http')) {
    return path;
  }

  // Check if path starts with / to avoid double slashes
  if (path.startsWith('/')) {
    return path;
  } else {
    return `/${path}`;
  }
};

export default {
  getPlaceholderImage,
  handleImageError,
  getImageUrl
}; 