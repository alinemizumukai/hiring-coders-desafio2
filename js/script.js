const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content')
    let confirmado = `<p>Recebemos seus dados, verifique seu e-mail.</p>`

    setTimeout(() => {
        content.innerHTML = confirmado
    },1000)
})
