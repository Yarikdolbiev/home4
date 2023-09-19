function isString(value: (string | number)): value is string {
  return typeof value === 'string';
}

function narrowingType(input: (string | number)) {
  if (isString(input)) {
    console.log(input.toUpperCase()); 
  } else {
    console.log('Не есть  рядком');
  }
}

function filterStrings(arr: (string | number | boolean)[]): string[] {
  return arr.filter((item): item is string => typeof item === 'string');
}



class Animal {
  type: 'animal';
  name: string;
}

class Duck extends Animal {
  name: 'duck'; 
  species: string;
}

function isAnimal(obj: any): obj is Animal {
  return obj.type === 'animal';
}

function isDuck(pet: any): pet is Duck {
  return pet.type === 'duck'; 
}

function processAnimal(animal: Animal) {
  if (isDuck(animal)) { 
    console.log(`Duck: ${animal.name}, Species: ${animal.species}`); 
  } else if (isAnimal(animal)) {
    console.log(`Animal: ${animal.name}`);
  } else {
    console.log('Unknown animal type');
  }
}





function getPropertyByType(
  obj: { [key: string]: any },
  propertyName: string,
  expectedType: string
): string | undefined {
  if (obj.hasOwnProperty(propertyName) && typeof obj[propertyName] === expectedType) {
    return obj[propertyName];
  }
  return undefined;
}






function processVariable(input: string | number): void {
  if (typeof input === 'string') {
    console.log(`Когда строка: ${input.toUpperCase()}`);
  } else if (typeof input === 'number') {
    console.log(`Когда число: ${input * 2}`);
  } else {
    console.log(`${typeof input}`);
  }
}






function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

function callFunction(func: Function | undefined, ...args: any[]): void {
  if (isFunction(func)) {
    func(...args);
  } else {
    console.log('Функция не существует.');
  }
}








class Animals{
  constructor(public type: string) {}
}


class Bird extends Animals {
  constructor(type: string, public species: string) {
    super(type);
  }

  fly() {
    console.log(`Flying ${this.type} ${this.species}`);
  }
}

class Cat extends Animals {
  constructor(type: string, public view: string) {
    super(type);
  }

  go() {
    console.log(`Walking a ${this.type} ${this.type}`);
  }
}

function processAnimals(animals: Animals): void {
  if (animals instanceof Bird) {
    animals.fly();
  } else if (animals instanceof Cat) {
    animals.go();
  } else {
    console.log('Unknown animals type');
  }
}
  
  
  
  
  
  
  
  