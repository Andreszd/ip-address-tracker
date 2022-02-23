import { isIpAddress } from "../libs/isIpAddress.js";
import { get } from '../services/ip_public.js';
import { map } from '../index.js'


const refFieldSearch = window.document.getElementById('field-search');
const refButton = window.document.getElementById('btn-submit');

refButton.addEventListener('click', searchCoordenates);


refFieldSearch.addEventListener('keydown', async (evt) => {
  if (evt.key == 'Enter') {
    const { ip, location, isp } = await searchCoordenates(refFieldSearch.value);

    renderDetailsIp({
      ip,
      location: location.city,
      timezoe: location.timezone,
      isp,
    });

    map.setMarker([location.lat, location.lng]);
  }
});

function renderDetailsIp(data) {
  const keys = Object.values(data);

  const elements = window.document.querySelectorAll('.section-detail-ip');
  elements.forEach((element, idx) => {
    element.lastElementChild.textContent = keys[idx];
  });
}

async function searchCoordenates(ipAddress) {
  if (isIpAddress(ipAddress)) {
    const res = await get(ipAddress);

    return res;
  } else {
    console.log('is not a ip address');
  }
}