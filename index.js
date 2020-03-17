(function(){
    var btns = Array.from(document.querySelectorAll('#btn'));
    var display = document.querySelector('#display');
    btns.forEach((btn) => {
        btn.addEventListener('click',function(){
            var regX = btn.dataset.region;
            var API = `https://restcountries-v1.p.rapidapi.com/all`;
            fetch(API,{
                method: "GET",
          withCredentials: true,
          headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key": "c3cb763422msh7a8508c1df6135bp182a5fjsnbd6adf946048"
          }
            }).then(res => res.json()).then(data =>{
                data.forEach((x) => {

                    let h1 = document.createElement('h1');
                if(x.region == regX){
                    console.log(regX)
                        h1.innerHTML = x.name;
                        display.appendChild(h1);
                    }
                })
                
        });
        })
    })
})()