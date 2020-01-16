const axios = require('axios');

axios.get("http://192.168.1.100:8000/api/v1/get_current_tracks")
  .then((response) => {
    console.log(response.data)
  });

// axios.get("http://192.168.1.100:8000/api/v1/get_last10_vocaltrance_track/")
//   .then((response) => {
//     console.log(response.data)
//   });
