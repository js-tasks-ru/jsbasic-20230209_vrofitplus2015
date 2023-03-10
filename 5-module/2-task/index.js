function toggleText() {
  const btn  = document.querySelector('.toggle-text-button');

  const text = document.querySelector('#text')
  
  btn.addEventListener('click', function() {
    
    
    if(text.hidden == true) {
      text.hidden = false;
    } else if(text.hidden == false) {
      text.hidden = true;
    }
  })

  
}





