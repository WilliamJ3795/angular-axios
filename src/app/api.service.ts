import { Injectable } from '@angular/core';

import axios from 'axios';
@Injectable({
  providedIn: 'root',
}
)
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor() {}
  get(endpoint: string) {
    return axios.get(`${this.apiUrl}/${endpoint}`);
  }
  post(endpoint: string, data: any) {
    return axios.post(`${this.apiUrl}/${endpoint}`, data);
}
// Add other HTTP methods as needed
}