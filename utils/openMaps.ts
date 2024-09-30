const openMaps = () => {
  //@ts-expect-error Property opera may not exist in window
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  //@ts-expect-error Property MSStream may not exist in window
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  const appleMapsLink = `https://maps.apple.com/?q=${encodeURIComponent('Via S. Filippo, 12, 90125 Palermo PA, Italy')}`;
  const googleMapsLink = 'https://maps.app.goo.gl/Wy4t5npXsJmcvK7T6';

  const mapLink = isIOS ? appleMapsLink : googleMapsLink;

  window.open(mapLink);
}

export default openMaps;
