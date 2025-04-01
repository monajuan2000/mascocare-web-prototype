interface Person {
  personId: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
}

interface Contact {
  contactId: string;
  address: string;
  email: string;
  celPhone: string;
}

interface Pet {
  petId: string;
  name: string;
  age: number;
  gender: 'MALE' | 'FEMALE';
  weight: number;
}

export interface Owner extends Person {
  paymentInfo: string;
  insuranceInfo: string;
  contacts: Contact[];
  pets: Pet[];
}
