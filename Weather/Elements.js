let elements = {
  "maxt": {
    "element": "Maximum Temperature",
    "range": "168h",
    "param": "maxt"
  },
  "mint": {
    "element": "Minimum Temperature",
    "range": "154h",
    "param": "mint"
  },
  "pop12": {
    "element": "12-hour Probability of Precipitation",
    "range": "168h",
    "param": "pop12"
  },
  "qpf": {
    "element": "Quantitative Precipitation Forecast",
    "range": "72h",
    "param": "qpf"
  },
  "sky": {
    "element": "Sky Cover",
    "range": "168h",
    "param": "sky"
  },
  "snow": {
    "element": "Snow Amount",
    "range": "72h",
    "param": "snow"
  },
  "temp": {
    "element": "Temperature",
    "range": "168h",
    "param": "temp"
  },
  "td": {
    "element": "Dewpoint",
    "range": "168h",
    "param": "td"
  },
  "wdir": {
    "element": "Wind Direction",
    "range": "168h",
    "param": "wdir"
  },
  "wspd": {
    "element": "Wind Speed",
    "range": "168h",
    "param": "wspd"
  },
  "wx": {
    "element": "Weather",
    "range": "168h",
    "param": "wx"
  },
  "waveh": {
    "element": "Significant Wave Height",
    "range": "144h",
    "param": "waveh"
  },
  "apt": {
    "element": "Apparent Temperature",
    "range": "168h",
    "param": "apt"
  },
  "rhm": {
    "element": "Relative Humidity",
    "range": "168h",
    "param": "rhm"
  },
  "wgust": {
    "element": "Wind Gust Speed",
    "range": "72h",
    "param": "wgust"
  },
  "wwa": {
    "element": "Hazards",
    "range": "72h",
    "param": "wwa"
  },
  "maxrh": {
    "element": "Maximum Relative Humidity",
    "range": "162h",
    "param": "maxrh"
  },
  "minrh": {
    "element": "Minimum Relative Humidity",
    "range": "174h",
    "param": "minrh"
  },
  "iceaccum": {
    "element": "Ice Accumulation",
    "range": "72h",
    "param": "iceaccum"
  },
  "tcfrt": {
    "element": "Tropical Cyclone Flooding Rain Threat",
    "range": "72h",
    "param": "tcfrt"
  },
  "tcsst": {
    "element": "Tropical Cyclone Storm Surge Threat",
    "range": "72h",
    "param": "tcsst"
  },
  "tcwt": {
    "element": "Tropical Cyclone Wind Threat",
    "range": "72h",
    "param": "tcwt"
  },
  "tctt": {
    "element": "Tropical Cyclone Tornado Threat",
    "range": "72h",
    "param": "tctt"
  },
  "fret": {
    "element": "Daily Forecast of Reference Crop Evapotranspiration (FRET)",
    "range": "168h",
    "param": "fret"
  },
  "fretdep": {
    "element": "Daily FRET Departure from Normal",
    "range": "168h",
    "param": "fretdep"
  },
  "frettot": {
    "element": "Total Weekly FRET",
    "range": "168h",
    "param": "frettot"
  },
  "mixh": {
    "element": "Mixing Height",
    "range": "72h",
    "param": "mixh"
  },
  "twdir": {
    "element": "Transport Wind Direction",
    "range": "72h",
    "param": "twdir"
  },
  "twspd": {
    "element": "Transport Wind Speed",
    "range": "72h",
    "param": "twspd"
  },
  "lal": {
    "element": "Lightning Activity Level",
    "range": "72h",
    "param": "lal"
  },
  "haines": {
    "element": "Haines Index",
    "range": "168h",
    "param": "haines"
  },
  "fwspd": {
    "element": "20 ft Wind Speed",
    "range": "72h",
    "param": "fwspd"
  },
  "clrg": {
    "element": "Clearing Index",
    "range": "72h",
    "param": "clrg"
  },
  "cwr": {
    "element": "Chance of Wetting Rain",
    "range": "72h",
    "param": "cwr"
  },
  "maxvr": {
    "element": "Maximum Ventilation Rate",
    "range": "72h",
    "param": "maxvr"
  },
  "minvr": {
    "element": "Minimum Ventilation Rate",
    "range": "72h",
    "param": "minvr"
  },
  "ventr": {
    "element": "Ventilation Rate",
    "range": "72h",
    "param": "ventr"
  },
  "visby": {
    "element": "Visibility",
    "range": "",
    "param": "visby"
  },
  "icecvg": {
    "element": "Ice Coverage",
    "range": "",
    "param": "icecvg"
  },
  "swhgt": {
    "element": "Swell Height",
    "range": "",
    "param": "swhgt"
  },
  "swdir": {
    "element": "Swell Direction",
    "range": "",
    "param": "swdir"
  },
  "tmpabv14d": {
    "element": "8-14 Day Temperature Above Normal Climate Outlook",
    "range": "14d",
    "param": "tmpabv14d"
  },
  "tmpblw14d": {
    "element": "8-14 Day Temperature Below Normal Climate Outlook",
    "range": "14d",
    "param": "tmpblw14d"
  },
  "prcpabv14d": {
    "element": "8-14 Day Precipitation Above Normal Climate Outlook",
    "range": "14d",
    "param": "prcpabv14d"
  },
  "prcpblw14d": {
    "element": "8-14 Day Precipitation Below Normal Climate Outlook",
    "range": "14d",
    "param": "prcpblw14d"
  },
  "tmpabv30d": {
    "element": "30 Day Temperature Above Normal Climate Outlook",
    "range": "45d",
    "param": "tmpabv30d"
  },
  "tmpblw30d": {
    "element": "30 Day Temperature Below Normal Climate Outlook",
    "range": "45d",
    "param": "tmpblw30d"
  },
  "prcpabv30d": {
    "element": "30 Day Precipitation Above Normal Climate Outlook",
    "range": "45d",
    "param": "prcpabv30d"
  },
  "prcpblw30d": {
    "element": "30 Day Precipitation Below Normal Climate Outlook",
    "range": "45d",
    "param": "prcpblw30d"
  },
  "tmpabv90d": {
    "element": "90 Day Temperature Above Normal Climate Outlook",
    "range": "375d",
    "param": "tmpabv90d"
  },
  "tmpblw90d": {
    "element": "90 Day Temperature Below Normal Climate Outlook",
    "range": "375d",
    "param": "tmpblw90d"
  },
  "prcpabv90d": {
    "element": "90 Day Precipitation Above Normal Climate Outlook",
    "range": "375d",
    "param": "prcpabv90d"
  },
  "prcpblw90d": {
    "element": "90 Day Precipitation Below Normal Climate Outlook",
    "range": "375d",
    "param": "prcpblw90d"
  },
  "tcwspdabv34i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >34kts (incremental)",
    "range": "120h",
    "param": "tcwspdabv34i"
  },
  "tcwspdabv34c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >34kts (cumulative)",
    "range": "120h",
    "param": "tcwspdabv34c"
  },
  "tcwspdabv50i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >50kts (incremental)",
    "range": "120h",
    "param": "tcwspdabv50i"
  },
  "tcwspdabv50c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >50kts (cumulative)",
    "range": "120h",
    "param": "tcwspdabv50c"
  },
  "tcwspdabv64i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >64kts  (incremental)",
    "range": "120h",
    "param": "tcwspdabv64i"
  },
  "tcwspdabv64c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >64kts  (cumulative)",
    "range": "120h",
    "param": "tcwspdabv64c"
  },
  "ptornado": {
    "element": "Probability of Tornadoes",
    "range": "36h",
    "param": "ptornado"
  },
  "phail": {
    "element": "Probability of Hail",
    "range": "36h",
    "param": "phail"
  },
  "ptstmwinds": {
    "element": "Probability of Damaging Thunderstorm Winds",
    "range": "36h",
    "param": "ptstmwinds"
  },
  "pxtornado": {
    "element": "Probability of Extreme Tornadoes",
    "range": "36h",
    "param": "pxtornado"
  },
  "pxhail": {
    "element": "Probability of Extreme Hail",
    "range": "36h",
    "param": "pxhail"
  },
  "pxtstmwinds": {
    "element": "Probability of Extreme Thunderstorm Winds",
    "range": "36h",
    "param": "pxtstmwinds"
  },
  "ptotsvrtstm": {
    "element": "Total Probability of Severe Thunderstorms",
    "range": "180h",
    "param": "ptotsvrtstm"
  },
  "ptotxsvrtstm": {
    "element": "Total Probability of Extreme Severe Thunderstorms",
    "range": "84h",
    "param": "ptotxsvrtstm"
  },
  "conhazo": {
    "element": "Convective Hazard Outlook",
    "range": "84h",
    "param": "conhazo"
  },
  "critfireo": {
    "element": "Critical/Extreme-Critical Risk Fire Weather Outlook",
    "range": "180h",
    "param": "critfireo"
  },
  "dryfireo": {
    "element": "Dry Lightning Thunderstorm Risk Fire Weather Outlook",
    "range": "60h",
    "param": "dryfireo"
  },
};

module.exports = {
  "forecast": [
    elements.temp,
    elements.maxt,
    elements.mint,
    elements.wwa,
    elements.pop12,
    elements.qpf,
    elements.wdir,
    elements.wspd
  ]
};