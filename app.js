function validate() {
    debugger
    const pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    const inputField = document.getElementById('email');

    inputField.addEventListener('click', function(event) {
        console.log('works');
        let inputValue = inputField.value;

        if(!pattern.test(inputValue)){
            inputField.classList.add('error');

        }

    })
}