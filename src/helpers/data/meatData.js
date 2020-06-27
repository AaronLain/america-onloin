import axios from 'axios';
import firebaseConfig from '../apiKeys.json'

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMeatsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meats.json?orderBy="uid"&equalTo="${uid}"`)
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

const getFavMeats = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/favorites.json`)
    .then((response) => {
      const responseMeats = response.data;
      const favMeats = [];
      if (responseMeats) {
        Object.keys(responseMeats).forEach((meatId) => {
          responseMeats[meatId].id = meatId;
          favMeats.push(responseMeats[meatId]);
        });
      }
      resolve(favMeats);
    }).catch((err) => reject(err));
});


const getAllMeats = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meats.json`)
    .then((response) => {
      const responseMeats = response.data;
      const meats = [];
      if (responseMeats) {
        Object.keys(responseMeats).forEach((meatId) => {
          responseMeats[meatId].id = meatId;
          meats.push(responseMeats[meatId]);
        })
      }
      resolve(meats);
    })
    .catch((err) => console.error('getAllMeats has failed to get ALL meats', err))
});

const getAllMeatTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meatTypes.json`)
    .then((response) => {
      const responseMeats = response.data;
      const meatTypes = [];
      if (responseMeats) {
        Object.keys(responseMeats).forEach((meatTypeId) => {
          responseMeats[meatTypeId].id = meatTypeId;
          meatTypes.push(responseMeats[meatTypeId]);
        })
      }
      resolve(meatTypes);
    })
    .catch((err) => reject(err))
});

const getSingleMeat = (meatId) => axios.get(`${baseUrl}/meats/${meatId}.json`);

const deleteMeat = (meatId) => axios.delete(`${baseUrl}/meats/${meatId}.json`);

const postMeat = (newMeat) => axios.post(`${baseUrl}/meats.json`, newMeat);

const updateMeat = (meatId, updatedMeat) => axios.put(`${baseUrl}/meats/${meatId}.json`, updatedMeat);

export default {
  getAllMeatTypes,
  getMeatsByUid,
  getFavMeats,
  getAllMeats,
  getSingleMeat,
  deleteMeat,
  postMeat,
  updateMeat,
}
