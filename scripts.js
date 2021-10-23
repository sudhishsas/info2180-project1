window.onload = function(){
    let sub = document.querySelector('button');
    var statusDisplay = document.getElementsByClassName('message');
    let form = document.getElementsByTagName('form');
    
        
        sub.addEventListener('click', e => {
            e.preventDefault();
            console.log('click')
            var email = document.getElementById('email').value;
            console.log(email);
            if(email == "")
            {
                console.log(statusDisplay);
                statusDisplay[0].innerText = 'Please enter a valid email address';
            }else{
                statusDisplay[0].innerText = 'Thank you! Your email address '+ email + ' has been added to our mailing list!';
            };
            
          });
};