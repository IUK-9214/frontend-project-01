  //for the animation of the element 
const observer= new IntersectionObserver((enteries)=>{
  enteries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});
 

  //functipnn created for the card on which i will apply the transtions 
  function card( img , img_of,heading,txt) {
let html= `      <div class="box hidden">
        <img
          src="${img}"
          alt="${img_of}"
          style="height: 74px; width: 80px"
        />

        <div class="box-content">
          <h1>${heading}</h1>
          <p>
           ${txt}
          </p>
        </div>
      </div>
`
 document.querySelector('.main_2').innerHTML=document.querySelector(".main_2").innerHTML+ html;
    }
    card("card-1.png" ,"pen","UI/UX Design"," Lorem Ipsum is simply dummy text of the printing and typesetting industry")
    card("card-2.png","image of pen","Product Design","Lorem Ipsum is simply dummy text of the printing and typesetting industry")
    card("card-3.png","image of ball","Website Design","Lorem Ipsum is simply dummy text of the printing and typesetting industry")
    card("card-4.png","glob","Branding Design"," Lorem Ipsum is simply dummy text of the printing and typesetting industry")
 
 //here i create a variable which store animation for each element
    const hiddenElement =document.querySelectorAll('.hidden');
 hiddenElement.forEach((el)=>observer.observe(el));
