function ucFirst(str) {
  if(!str) {
          return str
        } else {
            str = str[0].toUpperCase() + str.slice(1);
            return str
        }
}


ucFirst('вася')