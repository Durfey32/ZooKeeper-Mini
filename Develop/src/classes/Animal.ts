class Animal {
    species: string;
    hungry: boolean;
    weight: number;
    amount: number;
    
    constructor(
      species: string,
      hungry: boolean,
      weight: number,
      amount: number,
    ) {
      this.species = species;
      this.hungry = hungry;
      this.weight = weight;
      this.amount = amount;
    }
  
    makeRollCall(): number {
      return this.amount;
    }
  }
  export default Animal;
  