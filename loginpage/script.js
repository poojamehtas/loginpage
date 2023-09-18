const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
signupBtn.onclick = function(){
    title.innerHTML = 'Sign Up';
    namefield.style.display = 'block';
}
signinBtn.onclick = function(){
    title.innerHTML = 'Login';
    namefield.style.display = 'none';
}

