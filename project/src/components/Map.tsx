import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Сoordinates, City} from '../types/types';
import { URL_MARKER_DEFAULT, MapClassName } from '../utils/consts';
import useMap from '../hooks/useMap';

type MapProps = {
	city: City;
	coordinates: Сoordinates[];
	className: MapClassName;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({city, coordinates, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);
  useEffect(() => {

    const markers: Marker[] = [];

    if (map) {
      coordinates.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if(map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, coordinates]);


  return (
    <section ref={mapRef} className={`${className} map`} ></section>
  );
}

export default Map;

