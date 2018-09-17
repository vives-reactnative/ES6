class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log('Bark Bark');
  }
  cuddle() {
    console.log('Cuddle');
  }
  static info() {
    console.log('A dog is a thing.')
  }
  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return this.nick.toUpperCase;
  }
}

const snickers = new Dog('Snickers', 'King Charles');
