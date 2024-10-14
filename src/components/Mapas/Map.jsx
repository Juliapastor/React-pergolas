import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const marker =[
    {
        id: 2,
        name: "Pérgolas Canor Murcia",
        position: {lat: 37.97390805552043, lng: -1.1160622529731956 },
    },
]

const Map = (props)=>{
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_SOME_KEY
})

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActivemarker = (marker) => {
        if (marker === activeMarker){
        return
    }
    setActiveMarker(marker);
}

    return (
        <div className='container_mapa'>
            <div style={{ width: '400px', height: '50px'}}/>
            {isLoaded ? (
                <GoogleMap
                center={{lat: 37.97390805552043, lng: -1.1160622529731956 }}
                zoom={15}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{
                    width: "100%",
                    height: "50vh",
                }}> 
                {marker.map(({ id, name, position}) => (
                    <MarkerF key={id} position={position} onClick={() => handleActivemarker(id)}>
                        <div>{name}</div>
                    </MarkerF>
                ))}

            </GoogleMap>
            ):null}
        </div>
    );
}
export default Map

