let btn=document.querySelector("button.btn.btn-primary");
console.log(btn);

btn.addEventListener('click',fun);

function fun(e){
   
    let check=document.querySelector('#exampleCheck1').checked;
    if(check)
    {
        let email=document.querySelector('#exampleInputEmail1').value;
        let pass=document.querySelector('#exampleInputPassword1').value;

        localStorage.setItem('email',email);
        localStorage.setItem('password',pass);
    }
    else
    {
        e.preventDefault();
        alert('Kindly check the Box');
    }
    

    
}