import axios from 'axios';
import firebaseConfig from '../apiKeys.json'

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFavMeatsByUid = (uid) => new Promise((resolve, reject) => {
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

const getSingleMeat = (meatId) => axios.get(`${baseUrl}/meats/${meatId}.json`);

const deleteMeat = (meatId) => axios.delete(`${baseUrl}/meats/${meatId}.json`);

const postMeat = (newMeat) => axios.post(`${baseUrl}/meats.json`, newMeat);

const updateMeat = (meatId, updatedMeat) => axios.put(`${baseUrl}/meats/${meatId}.json`, updatedMeat);

export default {
  getFavMeatsByUid,
  getAllMeats,
  getSingleMeat,
  deleteMeat,
  postMeat,
  updateMeat,
}
