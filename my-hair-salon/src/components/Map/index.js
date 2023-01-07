import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapContainerStyle = {
    width: '300px',
    height: '300px'
};

const center = {
    lat: 40.7128,
    lng: -74.0060
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
      center={center}
      zoom={10}
    />
    );
}

export default Map;
