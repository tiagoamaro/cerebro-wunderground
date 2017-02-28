'use strict';

const icon = require('./icon.png')

const plugin = ({term, display, actions}) => {
  let match = term.match(/weather\s+(.*)/i)

  if (match) {
    const openWeather = (location) => {
      let q = encodeURIComponent(location)
      actions.open(`https://www.wunderground.com/cgi-bin/findweather/getForecast?query=${q}`)
      actions.hideWindow()
    }

    display({
      icon: icon,
      title: `Show forecast for ${match[1]}`,
      onSelect: () => openWeather(match[1])
    })
  }
};

module.exports = {
  fn: plugin
}
