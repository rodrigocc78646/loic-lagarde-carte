import Head from "next/head";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { getTopojson } from "../lib/map";
import { useState, useEffect } from "react";

export default function Home() {
  const [countries, setCountries] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    getTopojson((tj) => setCountries(tj));
  });

  if (!countries) {
    return <div>Loading data...</div>;
  }

  const projection = d3.geoMercator().scale(120).translate([400, 350]);
  const geoPath = d3.geoPath().projection(projection);

  return (
    <div className="home-content">
      <p className="selected-country">
        {name ? `Would now show photos for: ${name}` : "Please select a country"}
      </p>
      <svg
        viewBox={`0 0 800 500`}
        preserveAspectRatio="xMidYMid"
        className="world-map"
      >
        <g>
          {topojson
            .feature(countries, countries.objects.countries1)
            .features.map((d, i) => (
              <path
                key={`country-${i}`}
                d={geoPath(d)}
                stroke="#eee"
                className={`world-map-country ${
                  name === d.properties.name && "selected"
                }`}
                onClick={() => setName(d.properties.name)}
              />
            ))}
        </g>
      </svg>
    </div>
  );
}
