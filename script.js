const toggleButton = document.querySelector('.toggleButton');
const toggleButtonIcon = document.querySelector('.toggleButton i');
const dropdownMenu = document.querySelector('.dropdownMenu');

toggleButton.onclick = function(){
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    toggleButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

document.querySelector('.register').addEventListener('click' , () => {
    document.querySelector('.container').style.display = 'block';
})
document.querySelector('.cancelRegisterPage').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
})


document.querySelector('.dropdownMenu .register').addEventListener('click' , () => {
    document.querySelector('.container').style.display = 'block';
})

document.querySelector('.submitBtn').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.displayRegister').style.display = 'block';
    document.querySelector('.username').innerText = "Welcome " + document.querySelector('.form-group #name').value
})