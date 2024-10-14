import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const marker =[
    {
        id: 1,
        name: "Pérgolas Canor Benissa",
        position: {lat: 38.72160414711352, lng: 0.05543562698653874 },
    },
]

const Mapa = (props)=>{
    const { isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
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
                center={{ lat: 38.72160414711352, lng: 0.05543562698653874 }}
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
export default Mapa