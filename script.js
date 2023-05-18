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

        //EDIT BUTTON

        let editbtn = document.createElement('button');
        editbtn.className = 'edit-btn';
        let edit = document.createTextNode('Edit');
        editbtn.appendChild(edit);
        lst.appendChild(editbtn);

        

        let listmain = document.querySelector('.userlist');

        listmain.appendChild(lst);



        localStorage.setItem(mail, objs);

        let delbtn = document.querySelectorAll('.del-btn');
        for (let i = 0; i < delbtn.length; i++) {
            delbtn[i].addEventListener('click',delfun);
        }

        let editbutton = document.querySelectorAll('.edit-btn');
        for (let i = 0; i < editbutton.length; i++) {
            editbutton[i].addEventListener('click',editfun);
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

function editfun(e) {
    let lstt=e.target.parentNode;
   let emailobj=lstt.innerText;
   let emailtodel="";
   let passwordtodel="";
   let x=0;

   for(let i=8;i<emailobj.length;i++)
   {
    if(emailobj[i]==' ')
    {
        x=i;
        break;
    }
    
    emailtodel+=emailobj[i];

   }
   let objtoedit=localStorage.getItem(emailtodel);
   let dobj=JSON.parse(objtoedit);

   

   document.querySelector('#exampleInputEmail1').value=dobj['email'];
   document.querySelector('#exampleInputPassword1').value=dobj['password'];

   localStorage.removeItem(emailtodel);

    

    lstt.remove();
}