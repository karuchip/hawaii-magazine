export default function distanceCalc (lat:number, lon:number) {
  const LAT_KM = 111;
  const lngPerKm = (lat: number) => 111 * Math.cos((lat * Math.PI) / 180)
  const latDiff = 10 / LAT_KM;
  const lonDiff = 10 / lngPerKm(lat);

  return {
    minLat: lat - latDiff,
    maxLat: lat + latDiff,
		minLon: lon - lonDiff,
		maxLon: lon + lonDiff,
  }
}
