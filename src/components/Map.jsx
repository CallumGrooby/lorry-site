import { useState, useMemo, useCallback, useRef } from "react"
import { GoogleMap } from "@react-google-maps/api"


export default function Map(){
    const center = useMemo(()=>({lat :43, lng: -88}), []);


  return (
    <div className="map">
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
        ></GoogleMap>
    </div>
  )
}
