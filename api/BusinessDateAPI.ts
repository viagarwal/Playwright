import { APIRequestContext } from '@playwright/test';

interface ApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
}

export class BusinessDateAPI {
  private baseURL = 'http://marcu2a.hospility-apiUs.com';
  private resource = '/bof/v1/hotels/HNMMC/businessDate';
  private headers = {
    'content-type': 'application/json',
    'x-appkey': '12345678',
    'x-hotelid': 'HNMMC',
    'authorization': 'Bearer 11111111ttttttttttttttttttthhhhhhhhhhggggggggjkkkkk'
  };

  async getBusinessDate(apiRequestContext: APIRequestContext): Promise<ApiResponse> {
    try {
      const response = await apiRequestContext.get(`${this.baseURL}${this.resource}`, {
        headers: this.headers,
      });

      const data = await response.json().catch(() => response.text());

      return {
        status: response.status(),
        statusText: response.statusText(),
        data,
        headers: Object.fromEntries(response.headersArray()),
      };
    } catch (error: any) {
      console.error('BusinessDate API Error:', error?.message ?? error);
      throw error;
    }
  }
}

export async function callBusinessDateAPI(apiRequestContext: APIRequestContext) {
  const api = new BusinessDateAPI();
  const result = await api.getBusinessDate(apiRequestContext);
  console.log('BusinessDate Response:', result);
  return result;
}
