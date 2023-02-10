const result  = document.getElementById("result")
const filter  = document.getElementById("filter")
const btn =document. getElementById('btn');
const listitem =[]
getdata();

filter.addEventListener('input',(e)=>filterData(e.target.value))
 async function getdata(){
    const res  = await fetch('https://randomuser.me/api/?results=100');// بریا  گرفتن  داده  از  سایت  یا  ای  پی ای  مورد نظر  ار  این کد استفاده  میشود  که به   سیستم اعلام  میکند که واستا  تا سایت  اطلاعات   را لود  کند  وبه  ما نمایش  دهد 
  const{results} = await res.json();//   گذاری  میکنیم  بعد از  این که  به  سایت  وصل  شدیم  با استفاده از  یک  در خواست   جیسون فایل را  بار
  result.innerHTML='' ;// برای  پاک  کردن  نتیجه  است  
  results.forEach(user=>{
   const li = document.createElement('li');
   listitem.push(li);
   li.innerHTML=`<img src="${user.picture.large}"
   alt="${user.name.first}">
   <div class="userinfo">
  <h4>${user.name.first},${user.name.last}<h4>
   <p>${user.location.city},${user.location.state}</p>
   </div>
   `
   result.appendChild(li);
  })
  // console.log(results);
  // console.log(result);
  
  } 


function filterData(search){
    // console.log(search);
    listitem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(search.toLowerCase())){
           item.classList.remove('hide') 
        }
        else{ item.classList.add('hide') }
    })
}

btn.addEventListener('click',()=>{
  filter.value=''
})

