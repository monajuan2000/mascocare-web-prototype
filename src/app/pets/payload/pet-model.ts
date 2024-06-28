export type AllowedPetTypes =
  | 'DOG'
  | 'CAT'
  | 'BIRD'
  | 'FISH'
  | 'REPTILE'
  | 'RODENT'
  | 'OTHER';

interface Pet {
  petId: string;
  name: string;
  age: number;
  breed: string;
}

export interface Dog extends Pet {}

export interface Cat extends Pet {}

export interface PetType {
  petType: AllowedPetTypes;
}

export interface DogBreed {
  dogBreed: string;
}

export interface CatBreed {
  catBreed: string;
}
