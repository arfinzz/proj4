let btn=document.querySelector("button.btn.btn-primary");
console.log(btn);

btn.addEventListener('click',fun);

function fun(e){
   
    let check=document.querySelector('#exampleCheck1').checked;
    if(check)
    {

        let obj={


            email : document.querySelector('#exampleInputEmail1').value,
       pass : document.querySelector('#exampleInputPassword1').value,
        }

        let objs=JSON.stringify(obj);
        let mail=document.querySelector('#exampleInputEmail1').value;
        


        localStorage.setItem(mail,objs);
       
    }
    else
    {
        e.preventDefault();
        alert('Kindly check the Box');
    }
    

    
}