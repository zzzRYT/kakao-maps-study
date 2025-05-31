import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { TOUR_API } from "../api/openAPI";

export default function Maps() {
  const [geolocation, setGeolocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const Geolocation = navigator.geolocation;
    Geolocation.getCurrentPosition(
      (data) => {
        setGeolocation((prev) => {
          return {
            ...prev,
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    TOUR_API.getTourList({
      serviceKey: import.meta.env.VITE_TOUR_SERVICE_KEY || "",
      _type: "json",
      mapX: geolocation.longitude,
      mapY: geolocation.latitude,
      MobileOS: "WEB",
      MobileApp: "AppTest",
      radius: 20000,
      numOfRows: 10,
      pageNo: 1,
    });
  }, [geolocation]);

  return (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "100%", height: "600px" }}
      level={3}
    />
  );
}
