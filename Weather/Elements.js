let elements = {
  "maxt": {
    "element": "Maximum Temperature",
    "range": "168h"
  },
  "mint": {
    "element": "Minimum Temperature",
    "range": "154h"
  },
  "pop12": {
    "element": "12-hour Probability of Precipitation",
    "range": "168h"
  },
  "qpf": {
    "element": "Quantitative Precipitation Forecast",
    "range": "72h"
  },
  "sky": {
    "element": "Sky Cover",
    "range": "168h"
  },
  "snow": {
    "element": "Snow Amount",
    "range": "72h"
  },
  "temp": {
    "element": "Temperature",
    "range": "168h"
  },
  "td": {
    "element": "Dewpoint",
    "range": "168h"
  },
  "wdir": {
    "element": "Wind Direction",
    "range": "168h"
  },
  "wspd": {
    "element": "Wind Speed",
    "range": "168h"
  },
  "wx": {
    "element": "Weather",
    "range": "168h"
  },
  "waveh": {
    "element": "Significant Wave Height",
    "range": "144h"
  },
  "apt": {
    "element": "Apparent Temperature",
    "range": "168h"
  },
  "rhm": {
    "element": "Relative Humidity",
    "range": "168h"
  },
  "wgust": {
    "element": "Wind Gust Speed",
    "range": "72h"
  },
  "wwa": {
    "element": "Hazards",
    "range": "72h"
  },
  "maxrh": {
    "element": "Maximum Relative Humidity",
    "range": "162h"
  },
  "minrh": {
    "element": "Minimum Relative Humidity",
    "range": "174h"
  },
  "iceaccum": {
    "element": "Ice Accumulation",
    "range": "72h"
  },
  "tcfrt": {
    "element": "Tropical Cyclone Flooding Rain Threat",
    "range": "72h"
  },
  "tcsst": {
    "element": "Tropical Cyclone Storm Surge Threat",
    "range": "72h"
  },
  "tcwt": {
    "element": "Tropical Cyclone Wind Threat",
    "range": "72h"
  },
  "tctt": {
    "element": "Tropical Cyclone Tornado Threat",
    "range": "72h"
  },
  "fret": {
    "element": "Daily Forecast of Reference Crop Evapotranspiration (FRET)",
    "range": "168h"
  },
  "fretdep": {
    "element": "Daily FRET Departure from Normal",
    "range": "168h"
  },
  "frettot": {
    "element": "Total Weekly FRET",
    "range": "168h"
  },
  "mixh": {
    "element": "Mixing Height",
    "range": "72h"
  },
  "twdir": {
    "element": "Transport Wind Direction",
    "range": "72h"
  },
  "twspd": {
    "element": "Transport Wind Speed",
    "range": "72h"
  },
  "lal": {
    "element": "Lightning Activity Level",
    "range": "72h"
  },
  "haines": {
    "element": "Haines Index",
    "range": "168h"
  },
  "fwspd": {
    "element": "20 ft Wind Speed",
    "range": "72h"
  },
  "clrg": {
    "element": "Clearing Index",
    "range": "72h"
  },
  "cwr": {
    "element": "Chance of Wetting Rain",
    "range": "72h"
  },
  "maxvr": {
    "element": "Maximum Ventilation Rate",
    "range": "72h"
  },
  "minvr": {
    "element": "Minimum Ventilation Rate",
    "range": "72h"
  },
  "ventr": {
    "element": "Ventilation Rate",
    "range": "72h"
  },
  "visby": {
    "element": "Visibility",
    "range": ""
  },
  "icecvg": {
    "element": "Ice Coverage",
    "range": ""
  },
  "swhgt": {
    "element": "Swell Height",
    "range": ""
  },
  "swdir": {
    "element": "Swell Direction",
    "range": ""
  },
  "tmpabv14d": {
    "element": "8-14 Day Temperature Above Normal Climate Outlook",
    "range": "14d"
  },
  "tmpblw14d": {
    "element": "8-14 Day Temperature Below Normal Climate Outlook",
    "range": "14d"
  },
  "prcpabv14d": {
    "element": "8-14 Day Precipitation Above Normal Climate Outlook",
    "range": "14d"
  },
  "prcpblw14d": {
    "element": "8-14 Day Precipitation Below Normal Climate Outlook",
    "range": "14d"
  },
  "tmpabv30d": {
    "element": "30 Day Temperature Above Normal Climate Outlook",
    "range": "45d"
  },
  "tmpblw30d": {
    "element": "30 Day Temperature Below Normal Climate Outlook",
    "range": "45d"
  },
  "prcpabv30d": {
    "element": "30 Day Precipitation Above Normal Climate Outlook",
    "range": "45d"
  },
  "prcpblw30d": {
    "element": "30 Day Precipitation Below Normal Climate Outlook",
    "range": "45d"
  },
  "tmpabv90d": {
    "element": "90 Day Temperature Above Normal Climate Outlook",
    "range": "375d"
  },
  "tmpblw90d": {
    "element": "90 Day Temperature Below Normal Climate Outlook",
    "range": "375d"
  },
  "prcpabv90d": {
    "element": "90 Day Precipitation Above Normal Climate Outlook",
    "range": "375d"
  },
  "prcpblw90d": {
    "element": "90 Day Precipitation Below Normal Climate Outlook",
    "range": "375d"
  },
  "tcwspdabv34i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >34kts (incremental)",
    "range": "120h"
  },
  "tcwspdabv34c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >34kts (cumulative)",
    "range": "120h"
  },
  "tcwspdabv50i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >50kts (incremental)",
    "range": "120h"
  },
  "tcwspdabv50c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >50kts (cumulative)",
    "range": "120h"
  },
  "tcwspdabv64i": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >64kts  (incremental)",
    "range": "120h"
  },
  "tcwspdabv64c": {
    "element": "Probabilistic Tropical Cyclone Surface Wind Speeds >64kts  (cumulative)",
    "range": "120h"
  },
  "ptornado": {
    "element": "Probability of Tornadoes",
    "range": "36h"
  },
  "phail": {
    "element": "Probability of Hail",
    "range": "36h"
  },
  "ptstmwinds": {
    "element": "Probability of Damaging Thunderstorm Winds",
    "range": "36h"
  },
  "pxtornado": {
    "element": "Probability of Extreme Tornadoes",
    "range": "36h"
  },
  "pxhail": {
    "element": "Probability of Extreme Hail",
    "range": "36h"
  },
  "pxtstmwinds": {
    "element": "Probability of Extreme Thunderstorm Winds",
    "range": "36h"
  },
  "ptotsvrtstm": {
    "element": "Total Probability of Severe Thunderstorms",
    "range": "180h"
  },
  "ptotxsvrtstm": {
    "element": "Total Probability of Extreme Severe Thunderstorms",
    "range": "84h"
  },
  "conhazo": {
    "element": "Convective Hazard Outlook",
    "range": "84h"
  },
  "critfireo": {
    "element": "Critical/Extreme-Critical Risk Fire Weather Outlook",
    "range": "180h"
  },
  "dryfireo": {
    "element": "Dry Lightning Thunderstorm Risk Fire Weather Outlook",
    "range": "60h"
  },
};

module.exports = {
  "elements": elements
};