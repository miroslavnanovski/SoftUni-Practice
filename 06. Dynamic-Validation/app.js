
    function validate() {
      
        const pattern = /[a-z]+@[a-z]+.[a-z]+/g;
        const inputField = document.getElementById('email');
       
    
        inputField.addEventListener('change', function(event) {
            
            let inputValue = inputField.value;
    
            if(!pattern.test(inputValue)){
                inputField.classList.add('error');
                
            } else {
                inputField.classList.remove('error')
            }
    
        })
    }
