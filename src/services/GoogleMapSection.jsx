import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export const GoogleMapSection = () => {
  const position = { lat: 53.54, lng: 10 };
  const [open, setOpen] = useState(false);
  return (
    <APIProvider apiKey="AIzaSyD2fHzPMB1BBG5OYciynfS78N1zFRxhiRU">
      <div className="map-container" style={{ height: "100%", width: " 100%" }}>
        <Map zoom={9} center={position} mapId={"b5e731b5210858b8"}>
          <AdvancedMarker
            position={position}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Pin />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>test</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};
