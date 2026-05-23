import { APIRequestContext, request } from '@playwright/test';

interface ApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
}

export class HotelAPI {
  private baseURL = 'http://marcu2a.hospility-apiUs.com';
  private resource = '/bof/v1/hotels/HNMMC/businessDate';
  private headers = {
    'x-appkey': '12345678',
    'x-hotelid': 'HNMMC',
    'authentication': ''
  };

  async getBusinessDate(apiRequestContext: APIRequestContext): Promise<ApiResponse> {
    try {
      const response = await apiRequestContext.get(
        `${this.baseURL}${this.resource}`,
        {
          headers: this.headers
        }
      );

      const data = await response.json().catch(() => response.text());

      return {
        status: response.status(),
        statusText: response.statusText(),
        data: data,
        headers: Object.fromEntries(response.headersArray())
      };
    } catch (error: any) {
      console.error('API Error:', error.message);
      throw error;
    }
  }
}

// Example usage with Playwright test context
export async function callHotelBusinessDateAPI(apiRequestContext: APIRequestContext) {
  const api = new HotelAPI();
  const result = await api.getBusinessDate(apiRequestContext);
  console.log('Response:', result);
  return result;
}

// Standalone usage (creates its own context)
export async function callHotelBusinessDateAPIStandalone() {
  const apiRequestContext = await request.newContext();
  try {
    const api = new HotelAPI();
    const result = await api.getBusinessDate(apiRequestContext);
    console.log('Response:', result);
    return result;
  } finally {
    await apiRequestContext.dispose();
  }
}
