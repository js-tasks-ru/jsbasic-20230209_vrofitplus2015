function getMinMax(str) {
  let numbers = [];
  str.split(' ').map((item) => {
          if(isFinite(item)) {
              numbers.push(item)
          }
  })

  let result = {
      min: Math.min.apply(null, numbers),
      max: Math.max.apply(null, numbers)
          
  };

  return result
}
