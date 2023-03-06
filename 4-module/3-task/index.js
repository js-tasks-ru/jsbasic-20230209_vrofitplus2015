function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
   
  let rows = table.rows[i];

 

       if(rows.cells[3].dataset.available == 'true') {
           rows.cells[3].parentNode.classList.add('available')

        } else if(rows.cells[3].dataset.available == 'false') {
          rows.cells[3].parentNode.classList.add('unavailable')

        } else if(!(rows.cells[3].dataset.available == 'null')) {
          rows.cells[3].parentNode.hidden = true;
        }

        if(rows.cells[2].innerHTML == 'm') {
          rows.cells[2].parentNode.classList.add('male')
        } else if(rows.cells[2].innerHTML == 'f') {
          rows.cells[2].parentNode.classList.add('female')
        }


        if(rows.cells[1].innerHTML < 18) {
          rows.style = "text-decoration: line-through";
        }
       
  }
}
