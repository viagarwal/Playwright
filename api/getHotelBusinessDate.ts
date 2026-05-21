import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  status: number;
  data: any;
}

export class HotelAPI {
  private baseURL = 'http://marcu2a.hospility-apiUs.com';
  private resource = '/bof/v1/hotels/HNMMC/businessDate';

  async getBusinessDate(): Promise<ApiResponse> {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.baseURL}${this.resource}`,
        {
          headers: {
            'x-appkey': '12345678',
            'x-hotelid': 'HNMMC',
            'authentication': ''
          }
        }
      );

      return {
        status: response.status,
        data: response.data
      };
    } catch (error: any) {
      console.error('API Error:', error.message);
      return {
        status: error.response?.status || 500,
        data: error.response?.data || { error: error.message }
      };
    }
  }
}

// Example usage
export async function callHotelBusinessDateAPI() {
  const api = new HotelAPI();
  const result = await api.getBusinessDate();
  console.log('Response:', result);
  return result;
}
