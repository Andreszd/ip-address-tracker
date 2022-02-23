import { apis } from '../config/apis.js'
 
export class LealfLeft{
    constructor(idNode) {
        this.leafLeft = L
        this.map = this.leafLeft.map(idNode)
    }

    setLeafleft() {
        this.leafLeft.tileLayer(apis.MAPBOX({style: 'mapbox/streets-v11'}))
            .addTo(this.map)
    }

    customIcon(config) {
        this.icon = config ? leafLeft.icon(config) : null
    }

    setMarker(coords) {
        this.map.setView(coords, 20) 
        let showMarker = null 

        if (this.icon) {
            showMarker = this.leafLeft.marker(coords, {icon: this.icon})
        } else {
            showMarker = this.leafLeft.marker(coords)
        }
        showMarker
            .addTo(this.map)
            .bindPopup('Ip Address Location')
            .openPopup()
    }
}

export function setLeafleft(idNode){

    const map = leafLeft.map(idNode)

    const customIcon = leafLeft.icon({
        iconUrl: '/assets/images/icon-location.svg',
        iconSize: [35, 40],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })

    leafLeft.tileLayer(apis.MAPBOX({style: 'mapbox/streets-v11'})).addTo(map)

    navigator.geolocation.getCurrentPosition(position => {
        const coords = [position.coords.latitude, position.coords.longitude]
        map.setView(coords, 20) 

        leafLeft.marker(coords, {icon: customIcon}).addTo(map)
            .bindPopup('Your Location')
            .openPopup()
    })

}