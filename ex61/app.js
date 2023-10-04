// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list= document.querySelector('#list')
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const producnew=document.createElement("li");
  producnew.innerText=createProduct()
  list.appendChild(producnew)
 form.elements.product.value=''
 form.elements.qty.value=''
})

function createProduct(){
  const product=form.elements.product.value;
  const qty= form.elements.qty.value;
  const addedProduct=`${qty}  ${product}`
  return addedProduct;
}
