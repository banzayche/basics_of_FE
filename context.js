// CONTEXT QUESTIONS

// ### Differences between Function Expression and Arrow Function ###
let obj = {
  name: 'al',
  getNameAr: () => {
    console.log(this.name);
  },
  getName: function() {
    console.log(this.name);    
  }
}

// obj.getNameAr();
// obj.getName();


// ### Lost of context ###
// let a = {
//   name: 'Joe',
//   getName: function() {
//     console.log(this.name);
//   }
// }

// let b = a.getName;

// b()