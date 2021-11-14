import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import LocationMarker from "./LocationMarker";
import L from "leaflet"

function LeafletMap({offers, onLoc}) {
    const position = [51.505, -0.09]
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        onLoc(loc === null ? "" : loc.lat + " " + loc.log)
    }, [loc]);

    const services = [
        {title:"Garden Help", x: 50.93908775361642, y: -1.3972621480934326, value: 30},
        {title:"Park Cleaning", x: 50.937462520953005, y: -1.3995277136564257, value: 40}
    ]

    const getIcon = (type) => {
        if (type === "Furniture") return new L.Icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/148/148188.png",
            iconSize: new L.Point(70, 70),
        });
        if (type === "Tools") return null;
        if (type === "Food") return null;
        if (type === "Tech") return null;
        if (type === "Books") return null;
        if (type === "Clothes") return new L.Icon({
            iconUrl: "https://cdn.iconscout.com/icon/free/png-256/cloth-138-729049.png",
            iconSize: new L.Point(70, 70),
        });

        return new L.Icon({
            iconUrl: "/images/jim.png",
            iconSize: new L.Point(70, 70),
        });
    }


    return (
        <MapContainer style={{ height: "calc(100vh - 100px)", width: "100%", gridArea:"map" }} center={position} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {

                offers.map(e => {
                    const arr = e.location.split(" ").map(g => parseFloat(g));
                    return <Marker position={arr} icon={getIcon(e.tags[0])}>
                        <Popup>
                            <h1>{e.title} </h1>
                            <h3 style={{display: "flex", alignItems: "center", fontSize: "18px"}}>{e.value}
                                <img style={{width: "45px", height: "45px"}}
                                     src={"https://images.assetsdelivery.com/compings_v2/viktoriadesign888/viktoriadesign8882006/viktoriadesign888200600086.jpg"}/>
                            </h3>
                            {loc && <h4> {(loc.distanceTo(L.latLng(arr[0], arr[1]))).toFixed(0)/1000} km away</h4>}
                        </Popup>
                    </Marker>
                })
            }

            {
                services.map(e => {
                    return <Marker position={[e.x, e.y]} icon={getIcon("gem")}>
                        <Popup>
                            <h1>{e.title} </h1>
                            <h3 style={{display: "flex", alignItems: "center", fontSize: "18px"}}>{e.value}
                                <img style={{width: "45px", height: "45px"}}
                                     src={"https://images.assetsdelivery.com/compings_v2/viktoriadesign888/viktoriadesign8882006/viktoriadesign888200600086.jpg"}/>
                            </h3>
                            {loc && <h4> {(loc.distanceTo(L.latLng(e.x, e.y))).toFixed(0)/1000} km away</h4>}
                        </Popup>
                    </Marker>
                })
            }
            <LocationMarker onLocChange={setLoc}/>
        </MapContainer>
    );
}

export default LeafletMap;
