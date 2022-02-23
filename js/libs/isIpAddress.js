export function isIpAddress(value) {
  return value.split('.').length === 4;
}