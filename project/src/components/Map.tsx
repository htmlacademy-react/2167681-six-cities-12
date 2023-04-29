import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Location, City} from '../types/types';
import { URL_MARKER_DEFAULT, MapClassName, URL_MARKER_CURRENT } from '../utils/consts';
import useMap from '../hooks/use-map';

type MapProps = {
	city: City;
	coordinates: (Location & {id?: number})[];
	className: MapClassName;
	activeOfferId?: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({city, coordinates, className, activeOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    const markers: Marker[] = [];

    if (map) {
      coordinates.forEach(( { id, latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(activeOfferId === id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
        markers.push(marker);
      });

      const { location} = city;

      map.setView({ lat:location.latitude, lng:location.longitude });

    }

    return () => {
      if(map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, coordinates, city, activeOfferId]);

  return (
    <section ref={mapRef} className={`${className} map`} ></section>
  );
}

export default Map;

