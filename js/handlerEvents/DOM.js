import { get } from '../services/ip_public.js';
import { map } from '../index.js'

window.addEventListener('DOMContentLoaded', async (evt) => {
  const { ip, location, isp } = await get('');

  renderDetailsIp({
    ip,
    location: location.city,
    timezoe: location.timezone,
    isp,
  });

  map.setMarker([location.lat, location.lng]);
});

function renderDetailsIp(data) {
  const keys = Object.values(data);

  const elements = window.document.querySelectorAll('.section-detail-ip');
  elements.forEach((element, idx) => {
    element.lastElementChild.textContent = keys[idx];
  });
}