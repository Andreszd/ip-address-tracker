import { apis } from '../config/apis.js';

async function get(ipAddress) {
  const res = await fetch(apis.IPFY({ ipAddress }));
  const data = await res.json();
  return data;
}

export { get };

