const form1 = document.getElementById('form1')

form1.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let pacote = document.getElementById('pacote').value;
    let descricao = document.getElementById('descricao').value;
    let dia = document.getElementById('dia').value;
    let preco = document.getElementById('preco').value;
    
    let data = {
        pacote,
        descricao,
        dia,
        preco,
    }
    let convertData1 = JSON.stringify(data);
    localStorage.setItem('lead', convertData1);

    let content1 = document.getElementById('content1')
    let confirmado1 = `<p>Pacote cadastrado!</p>`

    setTimeout(() => {
        content1.innerHTML = confirmado1
    },1000)
})

const form2 = document.getElementById('form2')

form2.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    
    let data = {
        nome,
        cpf,
        email,
        telefone,
    }
    let convertData2 = JSON.stringify(data);
    localStorage.setItem('lead', convertData2);

    let content2 = document.getElementById('content2')
    let confirmado2 = `<p>Cliente cadastrado!</p>`

    setTimeout(() => {
        content2.innerHTML = confirmado2
    },1000)
})