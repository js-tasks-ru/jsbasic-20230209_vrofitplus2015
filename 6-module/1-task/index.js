export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
  }

    render() {
      this.elem = document.createElement('TABLE');
      this.elem.innerHTML = `
      <thead>   
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
      </thead>`;

      this.elem.insertAdjacentHTML('beforeend', this.rows.map(item => `
      
      <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button>X</button></td>
      </tr>`));
      

      this.elem.addEventListener('click', this.onClick)
      
      return this.elem

  }

  onClick(event) {
      if(event.target.closest('button')) {
          event.target.closest('button').closest('tr').remove();
          console.log(event.target.closest('button').closest('tr'))
          
      }
  }
}
