let btn = document.querySelector("button.btn.btn-primary");

console.log(btn);

btn.addEventListener('click', fun);



function fun(e) {

    let check = document.querySelector('#exampleCheck1').checked;
    if (check) {
        e.preventDefault();
        let mail = document.querySelector('#exampleInputEmail1').value;
        let pass = document.querySelector('#exampleInputPassword1').value;
        let obj = {


            email: mail,
            password: pass,
        }

        let objs = JSON.stringify(obj);

        let lst = document.createElement('li');
        let btn = document.createElement('button');
        btn.className = 'del-btn';
        let txt = document.createTextNode('Email : ' + mail + ' Password : ' + pass);
        let del = document.createTextNode('Delete');
        lst.appendChild(txt);
        btn.appendChild(del);
        lst.appendChild(btn);

        let listmain = document.querySelector('.userlist');

        listmain.appendChild(lst);



        localStorage.setItem(mail, objs);

        let delbtn = document.querySelectorAll('.del-btn');
        for (let i = 0; i < delbtn.length; i++) {
            delbtn[i].addEventListener('click',delfun);
        }

    }
    else {
        e.preventDefault();
        alert('Kindly check the Box');
    }



}



function delfun(e) {
    let lstt=e.target.parentNode;
   let emailobj=lstt.innerText;
   let emailtodel="";

   for(let i=8;i<emailobj.length;i++)
   {
    if(emailobj[i]==' ')
    break;
    emailtodel+=emailobj[i];

   }
   localStorage.removeItem(emailtodel);

    

    lstt.remove();
}