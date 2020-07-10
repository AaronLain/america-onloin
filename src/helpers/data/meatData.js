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

const getFavMeatsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/favorites.json?orderBy="uid"&equalTo="${uid}"`)
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

const getSortedFavMeats = (uid) => new Promise((resolve, reject) => {
  getFavMeatsByUid(uid).then((response) => {
    getAllMeats().then((meats) => {
      const filteredMeats = [];
      response.forEach((fav) => {
        const selectedMeat = meats.find((x) => fav.meatId === x.id);
        filteredMeats.push(selectedMeat);
      })
      resolve(filteredMeats);
    });
  }).catch((err) => reject(err))
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

const addFavMeat = (newFav) => axios.post(`${baseUrl}/favorites.json`, newFav);

const patchFavMeatIdToMeat = (meatId, favMeatId) => axios.patch(`${baseUrl}/meats/${meatId}.json`, {"favoriteId": favMeatId})

const deleteFavMeat = (favMeatId) => axios.delete(`${baseUrl}/favorites/${favMeatId}.json`);
  
const getSingleMeat = (meatId) => axios.get(`${baseUrl}/meats/${meatId}.json`);

const deleteMeat = (meatId) => axios.delete(`${baseUrl}/meats/${meatId}.json`);

const postMeat = (newMeat) => axios.post(`${baseUrl}/meats.json`, newMeat);

const updateMeat = (meatId, updatedMeat) => axios.put(`${baseUrl}/meats/${meatId}.json`, updatedMeat);

export default {
  getSortedFavMeats,
  getAllMeatTypes,
  getFavMeatsByUid,
  getMeatsByUid,
  getFavMeats,
  getAllMeats,
  getSingleMeat,
  deleteMeat,
  deleteFavMeat,
  addFavMeat,
  postMeat,
  patchFavMeatIdToMeat,
  updateMeat,
}
