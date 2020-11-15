import * as d3 from "d3";

export const getTopojson = async (callback = _.noop) => {
  const countries = await d3.json("/world-countries.json");
  callback(countries);
};
