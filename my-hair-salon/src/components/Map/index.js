import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapContainerStyle = {
  width: '500px',
  height: '500px',
  boxShadow: '0 .5rem 1rem rgba(0, 0, 0, .15)',
  borderRadius: '.3rem'
};

const mapCenter = {
  lat: 42.3174,
  lng: -83.026
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCekYSaFBteeyBClHCm5_qHrvVug3gy3Wk'
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <GoogleMap
      mapContainerStyle={MapContainerStyle}
      center={mapCenter}
      zoom={10}
    />
  );
}

export default Map;
