import axios from 'axios';

export class AdvertisementsService {
  constructor() {
    this._apiUrl = 'https://5ec1c70661975300160926ef.mockapi.io';
  }

  async getAdvertisements() {
    return axios.get(`${this._apiUrl}/advertisements`);
  }

  async getAdvertisementById(id) {
    return axios.get(`${this._apiUrl}/advertisements/${id}`);
  }

  async addAdvertisement(data) {
    return axios.post(`${this._apiUrl}/advertisements`, data);
  }

  async updateAdvertisement(id, data) {
    return axios.put(`${this._apiUrl}/advertisements/${id}`, data);
  }

  async deleteAdvertisement(id) {
    return axios.delete(`${this._apiUrl}/advertisements/${id}`);
  }
}
