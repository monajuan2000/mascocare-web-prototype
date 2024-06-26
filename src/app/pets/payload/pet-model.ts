interface Pet {
  petId: string;
  name: string;
  age: number;
  breed: string;
}

export interface Dog extends Pet {}

export interface Cat extends Pet {}

export interface PetType {
  petType: string;
}

export interface DogBreed {
  dogBreed: string;
}

export interface CatBreed {
  catBreed: string;
}
