const API_BASE_URL = 'http://localhost:8080/mascocarev1-api/';

export const apiUrls = {
  login: `${API_BASE_URL}login`,
  allOwners: `${API_BASE_URL}util/owners/getAllOwners?version=1`,
} as const;
