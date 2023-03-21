import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Сoordinates, City} from '../types/types';
import { URL_MARKER_DEFAULT } from '../utils/consts';
import useMap from '../hooks/useMap';

type MapProps = {
	city: City;
	coordinates: Сoordinates[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map ({city, coordinates}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      coordinates.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);

      });
    }

  }, [map, coordinates]);


  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
