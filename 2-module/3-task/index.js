let calculator = {
  read: function(a, b) {
    this.a = a;
    this.b = b;
  },

  sum: function() {
     let sum = this.a + this.b;
     return sum
  },

  mul: function() {
    let sum = this.a * this.b;
    return sum
 },


};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
