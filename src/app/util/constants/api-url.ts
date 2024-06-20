interface ApiUrls {
  LOGIN_URL: string;
  URL_ALL_OWNERS: string;
  URL_ALL_DOG_BREEDS: string;
}

const baseUrl = {
  BASE_URL: 'http://localhost:8080/mascocarev1-api/',
};

export const apiUrl: ApiUrls = {
  LOGIN_URL: baseUrl.BASE_URL + 'login',
  URL_ALL_OWNERS: baseUrl.BASE_URL + 'util/owners/getAllOwners?version=1',
  URL_ALL_DOG_BREEDS: baseUrl.BASE_URL + 'util/pets/getAllDogBreeds?version=1',
};
