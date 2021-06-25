const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let name = ""
  for (i = 0; i < bakeryA.length; i++) {
   for (j = 0; j < bakeryB.length; j++) {
    for (k = 0; k < recipes.length; k++) {
      if ((bakeryA[i] === recipes[k].ingredients[0] || bakeryA[i] === recipes[k].ingredients[1]) && (bakeryB[j] === recipes[k].ingredients[0] || bakeryB[j] === recipes[k].ingredients[1])) {
        name = recipes[k].name
      }
     }
    }
   }
   return name
  }

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
