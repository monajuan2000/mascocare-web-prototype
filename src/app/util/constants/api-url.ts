interface ApiUrls {
  LOGIN_URL: string;
  ALL_OWNERS_URL: string;
}

const baseUrl = {
  BASE_URL: 'http://localhost:8080/mascocarev1-api/',
};

export const apiUrl: ApiUrls = {
  LOGIN_URL: baseUrl.BASE_URL + 'login',
  ALL_OWNERS_URL: baseUrl.BASE_URL + 'util/owners/getAllOwners?version=1',
};
