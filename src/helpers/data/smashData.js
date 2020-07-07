import axios from 'axios';
import firebaseConfig from '../apiKeys.json'

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const deleteFavMeatByMeatId = (meatId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/favorites.json?orderBy="meatId"&equalTo="${meatId}"`)
    .then((response) => {
      const responseMeats = response.data;
      const meats = [];
      if (responseMeats) {
        Object.keys(responseMeats).forEach((meatId) => {
          responseMeats[meatId].id = meatId;
          meats.push(responseMeats[meatId]);
        });
      }
      resolve(meats);
    }).catch((err) => reject(err));
});

export default { deleteFavMeatByMeatId };
