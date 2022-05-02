//JS way Chapter 9 Code: 

//DOGS: 

// class Dog {
//     constructor(name, species, size) {
//         this.name = name
//         this.species = species
//         this.size = size
//     }
//     bark() {
//         if (this.size > 60) {
//             console.log('Grrr Grrr')
//         } else if (this.size < 60) {
//             console.log('Woof Woof')
//         }
//     }

// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

//Character Inventory:

// class Character {
//     constructor(name, health, strength) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.xp = 0; // XP is always zero for new characters

//         this.inventoryGold = 10;
//         this.inventoryKeys = 1;
//     }
//     // Attack a target
//     attack(target) {
//         if (this.health > 0) {
//             const damage = this.strength;
//             console.log(
//                 `${this.name} attacks ${target.name} and causes ${damage} damage points`
//             );
//             target.health -= damage;
//             if (target.health > 0) {
//                 console.log(`${target.name} has ${target.health} health points left`);
//             } else {

//                 target.health = 0;
//                 const bonusXP = 10;
//                 let bonusGold = target.inventoryGold
//                 let bonusKeys = target.inventoryKeys

//                 console.log(
//                     `${this.name} eliminated ${target.name} and wins: ${bonusXP} experience points, ${bonusGold} gold and ${bonusKeys} keys`
//                 );

//                 this.xp += bonusXP;
//                 this.inventoryGold += bonusGold
//                 this.inventoryKeys += bonusKeys

//             }
//         } else {
//             console.log(`${this.name} can't attack (they've been eliminated)`);

//         }
//     }
//     // Return the character description
//     describe() {
//         return `${this.name} has ${this.health} health points, ${this
//             .strength} as strength and ${this.xp} XP points, ${this.inventoryGold} gold and ${this.inventoryKeys} keys`;
//     }
// }



// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");

// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// // console.log(monster.describe());

// console.log("....A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// class CharacterInventory {
//     constructor(gold, keys, potions,)
// // }

// accountHolders = []

// class bankAccount {
//     constructor(name, balance = 0) {
//         this.name = name
//         this.balance = balance
//     }
//     credit(amount) {
//         this.balance += amount
//         return `Hi ${this.name}. Your account has been credited: ${this.balance}`
//     }
//     describe() {
//         return `Hi ${this.name}. Your account balance is: ${this.balance}`
//     }


// }


// function accountCreator(name) {
//     accountHolders.push(name = new bankAccount(name))
//     creditIt()
// }

// function creditIt() {
//     accountHolders.forEach((ele, ind) => {
//         ele[ind].credit()
//     })
// }

// accountCreator('Sean')
// accountCreator('Brad')
// accountCreator('George')


// console.log(accountHolders)
// console.log()


// const account = {
//     owner: "Alex",
//     balance: 0,
  
//     // Add an amount to the bank balance
//     credit(amount) {
//       this.balance += amount;
//     },
  
//     // Return account description
//     describe() {
//       return `owner: ${this.owner}, balance: ${this.balance}`;
//     }
//   };
  
//   console.log(account.describe());
//   account.credit(250);
//   account.credit(-80);
//   console.log(account.describe());
//   © 2022 GitHub, Inc.
//   Terms
//   Privacy