import { APIRequestContext, request } from '@playwright/test';

interface TokenApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
}

interface TokenRequestBody {
  grant_type: string;
  scope: string;
}

export class TokenAPI {
  private baseURL = 'http://marcu2a.hospility-apiUs.com';
  private resource = '/oath/vi/tokens/';
  private username = 'vipul';
  private password = 'agarwal';
  private headers = {
    'x-appkey': 'abc',
    'enterpriseid': '1234'
  };

  /**
   * Generates Basic Auth header from username and password
   */
  private getBasicAuthHeader(): string {
    const credentials = `${this.username}:${this.password}`;
    const encodedCredentials = Buffer.from(credentials).toString('base64');
    return `Basic ${encodedCredentials}`;
  }

  /**
   * Fetch token with basic authentication
   */
  async getToken(apiRequestContext: APIRequestContext): Promise<TokenApiResponse> {
    try {
      const requestHeaders = {
        ...this.headers,
        'Authorization': this.getBasicAuthHeader(),
        'Content-Type': 'application/json'
      };

      const body: TokenRequestBody = {
        grant_type: 'abc',
        scope: 'cde'
      };

      const response = await apiRequestContext.post(
        `${this.baseURL}${this.resource}`,
        {
          headers: requestHeaders,
          data: body
        }
      );

      const responseData = await response.json().catch(() => response.text());

      return {
        status: response.status(),
        statusText: response.statusText(),
        data: responseData,
        headers: Object.fromEntries(response.headersArray())
      };
    } catch (error: any) {
      console.error('Token API Error:', error.message);
      throw error;
    }
  }
}

// Example usage with Playwright test context
export async function callTokenAPI(apiRequestContext: APIRequestContext) {
  const api = new TokenAPI();
  const result = await api.getToken(apiRequestContext);
  console.log('Token Response:', result);
  return result;
}

// Standalone usage (creates its own context)
export async function callTokenAPIStandalone() {
  const apiRequestContext = await request.newContext();
  try {
    const api = new TokenAPI();
    const result = await api.getToken(apiRequestContext);
    console.log('Token Response:', result);
    return result;
  } finally {
    await apiRequestContext.dispose();
  }
}
