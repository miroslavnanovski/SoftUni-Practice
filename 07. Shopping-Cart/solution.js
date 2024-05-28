function solve() {
   
   const addButons = Array.from(document.querySelectorAll('.add-product'))
   const productNames = Array.from(document.querySelectorAll('.product-title'));
   const pricesArr = Array.from(document.querySelectorAll('.product-line-price'))
   const textArea = document.querySelector('textarea')
   const checkoutButton = document.querySelector('.checkout');
   const allButtons = Array.from(document.querySelectorAll('button'));

   let totalPrice = 0
   let list = [];

   
   for (let i = 0; i < addButons.length; i++) {
         addButons[i].addEventListener('click', function(event){
            let productName = productNames[i].textContent;
            let price = Number(pricesArr[i].textContent)
            totalPrice +=price;
            if(!list.includes(productName)){
               list.push(productName);
            }
            textArea.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
         })
   }

   checkoutButton.addEventListener('click', (event) => {
      list = list.join(', ')
      textArea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
      for(let buttons of allButtons){
         buttons.disabled = true;
      }

   })

}