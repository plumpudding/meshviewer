define(function () {
    return function (config, el, router, d) {
        var h2 = document.createElement("h2")
        h2.textContent = config.siteName
        el.appendChild(h2)

        var h3 = document.createElement("h3")
        h3.textContent = "Koordinaten:"
        el.appendChild(h3)

        var lat = document.createElement("p")
        lat.classList.add("latGeo")
        var latText = document.createTextNode("Breite: ")
        lat.appendChild(latText)

        var latSpan = document.createElement("span")
        var latCoord = document.createTextNode(d.lat.toFixed(6))
        latSpan.appendChild(latCoord)
        latSpan.classList.add("lat")
        latSpan.classList.add("geo")
        lat.appendChild(latSpan)

        el.appendChild(lat)

        var lng = document.createElement("p")
        var lngText = document.createTextNode("Länge: ")
        lng.appendChild(lngText)

        var lngSpan = document.createElement("span")
        var lngCoord = document.createTextNode(d.lng.toFixed(6))
        lngSpan.appendChild(lngCoord)
        lngSpan.classList.add("lng")
        lngSpan.classList.add("geo")
        lng.appendChild(lngSpan)

        el.appendChild(lng)
    }
})
