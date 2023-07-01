import router from '@/router'
import axios from 'axios'
import HttpStatus from 'http-status-codes'

class ApiService {

  private readonly baseUrl: string
  private readonly headers: Record<string, string>

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  public get(url: string) {
    return this.request('GET', url)
  }

  public post(url: string, data: any) {
    return this.request('POST', url, data)
  }

  public put(url: string, data: any) {
    return this.request('PUT', url, data)
  }

  public delete(url: string) {
    return this.request('DELETE', url)
  }

  private async request(method: string, url: string, data?: any) {
    const config = {
      method,
      url: `${this.baseUrl}/${url}`,
      withCredentials: true,
      headers: this.headers,
      data,
    }

    return axios.request(config)
  }
}

export default ApiService
