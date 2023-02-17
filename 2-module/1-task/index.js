let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}


function sumSalary(object) {
   let sum = 0;
  for( let k in object) {
      if(typeof object[k] === "number" && !( isNaN(object[k]) ) &&  isFinite(object[k])) {
          sum+=object[k];
          
      } 
      
  }

  return sum
}


sumSalary(salaries);