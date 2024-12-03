import axios from 'axios';

class RequestHandler {
  constructor(baseUrl = 'http://localhost:3000/') {
    this.baseUrl = baseUrl;
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // GET request
  async getRequest(endpoint, params = {}, headers = {}) {
    try {
      const response = await this.client.get(endpoint, {
        params: params,
        headers: this._setHeaders(headers),
      });
      return this._handleResponse(response);
    } catch (error) {
      this._handleError(error);
    }
  }

  // POST request
  async postRequest(endpoint, data = {}, params = {}, headers = {}) {
    try {
      const response = await this.client.post(endpoint, data, {
        params: params,
        headers: this._setHeaders(headers),
      });
      return this._handleResponse(response);
    } catch (error) {
      this._handleError(error);
    }
  }

  // PUT request
  async putRequest(endpoint, data = {}, params = {}, headers = {}) {
    try {
      const response = await this.client.put(endpoint, data, {
        params: params,
        headers: this._setHeaders(headers),
      });
      return this._handleResponse(response);
    } catch (error) {
      this._handleError(error);
    }
  }

  // PATCH request
  async patchRequest(endpoint, data = {}, params = {}, headers = {}) {
    try {
      const response = await this.client.patch(endpoint, data, {
        params: params,
        headers: this._setHeaders(headers),
      });
      return this._handleResponse(response);
    } catch (error) {
      this._handleError(error);
    }
  }

  // DELETE request
  async deleteRequest(endpoint, params = {}, headers = {}) {
    try {
      const response = await this.client.delete(endpoint, {
        params: params,
        headers: this._setHeaders(headers),
      });
      return this._handleResponse(response);
    } catch (error) {
      this._handleError(error);
    }
  }

  // Handle response by checking status code
  _handleResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.data}`);
    }
  }

  // Handle errors
  _handleError(error) {
    console.error('Error in HTTP request:', error);
    throw new Error(`Error in HTTP request: ${error}`);
  }

  // Set Authorization header if provided
  _setHeaders(headers) {
    if (headers && headers.Authorization) {
      headers['Authorization'] = `Token ${headers.Authorization.replace('Token ', '')}`;
    }
    return headers;
  }
}

export default RequestHandler;
