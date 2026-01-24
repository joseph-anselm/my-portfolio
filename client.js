// client.js

import { createClient } from 'next-sanity';


export default createClient({
  projectId: "jy07zzhq", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  token: "skENhRKNBAEMPExbKISXU91yLamTEaNfems6FGBH4asK8uMkRX1jyJs1CyC2NBPkiD2ftUrwzmYaiFyaSujpRtcz6oCEY25wDnMf40mrQuU3C9dvI8aO3hhhO7oskXnzStv9x6M24kMXdvLw1S2FTodAcewIkyqaoiLe821dl2mNCr3ShdJU",
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-08-31', // use a UTC date string
  useCdn: true, 
});
