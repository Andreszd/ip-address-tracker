export const apis = {
    IPFY: function({ ipAddress })  {
        const key = 'at_1nuRk3OJcqwnnUy3A8O2JCfcNKEkz'
        return `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}`
    },
    MAPBOX: function({ style }){
        const key = 'pk.eyJ1IjoiYW5kcmVzemQiLCJhIjoiY2tycHB4cDNqM2dlMzMxbzJrOHIzaWV3eiJ9.2r_xVAy10GyDIJ_EUKcHpA'
        return `https://api.mapbox.com/styles/v1/${style}/tiles/{z}/{x}/{y}?access_token=${key}`
    }
}