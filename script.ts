abstract class Combo {
  protected description: string;
  getDescription(): string {
    return this.description;
  }
  abstract Costo() :number;
}

class ComboHutCheese extends Combo {
  constructor() {
    super();
    this.description = 'Combo Hut Cheese';
  }
  Costo(): number {
    return 42.00;
  }
}
class PackFamiliar extends Combo  {
  constructor() {
    super();
    this.description = 'Pack Familiar';
  }
  Costo(): number {
    return 28.00;
  }
}
class HutComboMediano extends Combo {
  constructor() {
    super();
    this.description = 'Hut Combo Mediano';
  }
  Costo(): number{
    return 34.00;
  }
}
class HutPackFamiliar extends Combo {
  constructor() {
    super();
    this.description = 'Hut Pack Familiar';
  }
  Costo(): number{
    return 55.00;
  }
}

abstract class addDecorador extends Combo {
  abstract getDescription(): string; 
}

class SalsaMediterranea extends addDecorador {
  combo: Combo;
  
  constructor(combo: Combo) {
    super();
    this.combo = combo;
  }
  getDescription(): string {
    return this.combo.getDescription() + ", Salsa Mediterranea ";
  }
  Costo() :number {
    return 3.00 + this.combo.Costo();
  }
}
class CocaCola extends addDecorador {
  combo: Combo;

  constructor(combo: Combo) {
    super();
    this.combo = combo;
  }
  getDescription(): string {
    return this.combo.getDescription() + ", Coca Cola 1.5Lt ";
  }
  Costo(): number {
    return 10 + this.combo.Costo();
  }
}
class IncaKola extends addDecorador {
  combo: Combo;

  constructor(combo: Combo) {
    super();
    this.combo = combo;
  }
  getDescription(): string {
    return this.combo.getDescription() + ", Inca Kola 1.5Lt ";
  }
  Costo(): number {
    return 10 + this.combo.Costo();
  }
}
class VolcanDeChocalate extends addDecorador {
  combo: Combo;

  constructor(combo: Combo) {
    super();
    this.combo = combo;
  }
  getDescription(): string {
    return this.combo.getDescription() + ", Volcan de Chocolate ";
  } 
  Costo(): number {
    return 6 + this.combo.Costo();
  }
}
let products: Array<Combo> = [];
let ventas: Array<Combo[]> = [];

let combos: Combo;



