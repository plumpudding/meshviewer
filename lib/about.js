define(function () {
  return function() {
    this.render = function (d) {
      var el = document.createElement("div")
      d.appendChild(el)
      var s = "<h2>Über meshviewer</h2>"

      s += "<h3>Lizensiert unter AGPL 3</h3>"

      s += "<p>Copyright (C) Nils Schneider</p>"

      s += "<p>This program is free software: you can redistribute it and/or "
      s += "modify it under the terms of the GNU Affero General Public "
      s += "License as published by the Free Software Foundation, either "
      s += "version 3 of the License, or (at your option) any later version.</p>"

      s += "<p>This program is distributed in the hope that it will be useful, "
      s += "but WITHOUT ANY WARRANTY; without even the implied warranty of "
      s += "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the "
      s += "GNU Affero General Public License for more details.</p>"

      s += "<p>You should have received a copy of the GNU Affero General "
      s += "Public License along with this program. If not, see "
      s += "<a href=\"https://www.gnu.org/licenses/\">"
      s += "https://www.gnu.org/licenses/</a>.</p>"

      s += "<p>This version was modified by PetaByteBoy for the Freifunk gl.wupper Community. "
      s += "You may find the modified source code at "
      s += "<a href=\"https://github.com/plumpudding/meshviewer\">"
      s += "https://github.com/plumpudding/meshviewer</a>."

      s += "<p>You may find the source code at "
      s += "<a href=\"https://github.com/tcatm/meshviewer\">"
      s += "https://github.com/tcatm/meshviewer</a>."

      el.innerHTML = s
    }
  }
})
