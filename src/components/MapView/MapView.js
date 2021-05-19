import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Icon from "@material-ui/core/Icon";

import Spinner from "../Spinner/Spinner"; 

import "./styles.scss";

export default props => {
    const { fetchMapDataLoading, mapDataList, toggleSideMenu, isSideMenuOpen } = props;
    const mapRef = React.useRef(null);
    const [state, setState] = React.useState({
        markerList: [],
        bond:[[25.268576, 121.611722], [23.879299, 120.294881], [23.762836, 121.544090], [21.257621, 120.740482], [21.899800, 120.837252]]
    });

    React.useEffect(()=>{
        if(Object.entries(mapDataList).length > 0){
            const updateMapList = [];
            const updateBonds = [];
            Object.entries(mapDataList).map(marker=>{
                updateMapList.push({
                    key: marker[0],
                    ...marker[1]
                });
                updateBonds.push([+marker[1].longitude, +marker[1].latitude]);
             });

            setState(state=>({
            ...state,
            markerList: updateMapList,
            bond: updateBonds
            }))
        };
      },[mapDataList])


      console.log(state)

      if(fetchMapDataLoading){
          return <div className="containers-spinner"><Spinner /></div>
      }else{
        return (
            <div className="containers">
                <div className="button-container">
                    <Icon onClick={toggleSideMenu}>{!isSideMenuOpen ? "arrow_forward_ios_icon" : "arrow_back_ios_icon"}</Icon>
                </div>
                <MapContainer 
                    ref={mapRef}
                    bounds={state.markerList.length === 0 ? [[25.268576, 121.611722], [23.879299, 120.294881], [23.762836, 121.544090], [21.257621, 120.740482], [21.899800, 120.837252]] : state.bond}
                    zoom={13} 
                    scrollWheelZoom={false}
                    className="map"
                    animate={true}
                >
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup>
                            {state.markerList.map(marker=> 
                                <Marker position={[marker.latitude, marker.longitude]} key={marker.key}>
                                    <Popup>
                                        <p>店家名稱: {marker["店家名稱"]}</p>
                                        <p>店家防疫措施: {marker["店家防疫措施"]}</p>
                                        <p>是否仍提供內用服務: {marker["是否仍提供內用服務"]}</p>
                                        <p>是否提供外帶: {marker["是否提供外帶"]}</p>
                                        <p>是否提供外送: {marker["是否提供外送"]}</p>
                                        <p>是否繼續維持營業: {marker["是否繼續維持營業"]}</p>
                                        <p>時間戳記: {marker["時間戳記"]}</p>
                                        <p>營業時間調整情況: {marker["營業時間調整情況"]}</p>
                                        <p>防疫外帶或外送優惠: {marker["防疫外帶或外送優惠"]}</p>
                                    </Popup>
                                </Marker>
                            )}
                     </MarkerClusterGroup>
                </MapContainer>
            </div>
            )
    }
      }

