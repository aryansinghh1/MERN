import React, { useState, useEffect } from "react";

export default function FetchApi() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //to check if data is visible in console.
        console.log(data.current_weather);
        console.log(data.current_weather_units);
        console.log(data.elevation);
        console.log(data.generationtime_ms);
        console.log(data.latitude);
        console.log(data.longitude);
        console.log(data.timezone);
        console.log(data.timezone_abbreviation);
        console.log(data.utc_offset_seconds);

      });
  }, []);

}
