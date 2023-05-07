async function getUser(){
    const apiResponse = await fetch('https://dbjson-service-pacientes.onrender.com/cadastro')
    const usuarios = await apiResponse.json()
    console.log(usuarios)
}
getUser()


async function postDados(info) {
    return fetch('https://dbjson-service-pacientes.onrender.com/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
     },
      body: JSON.stringify(info),
   })
  }

function manipularFormulario() {
    const formulario = document.getElementById('containersenhas')
    const formulariocadastro = document.getElementById('formulariocadastrar')
    formulario.style.display = "block";
    formulariocadastro.style.display = "none";

}

const formCadastrar = document.getElementById('formulariocadastrar')
    formCadastrar.addEventListener('submit', async (event) => {    
    event.preventDefault()
    const nome = document.getElementById('inputnamecadastro').value
    const email = document.getElementById('inputemailcadastro').value
    if(!nome || !email){
        alert('Por favor Informe Nome e Email!')
        
    }
})


const formSenha = document.getElementById('formulariosenha')
    formSenha?.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const nome = document.getElementById('inputemailcadastro').value
    const email = document.getElementById('inputemailcadastro').value
    const senha = document.getElementById('inputsenha').value
    const confirmaSenha = document.getElementById('inputconfirmsenha').value

    if(senha !== confirmaSenha){
        alert('Senhas não conferem!')
        return
    }else if(senha == '' || confirmaSenha == ''){
        alert('Senha Inválida!')
        return
    }
    else if(senha.length < 8 || confirmaSenha.length < 8){
        alert('Senha precisa conter 8 digitos!')
        return
    }
    
    const cadastrarUser = {
        "nameCadastro": nome,
        "emailCadastro": email,
        "senha": senha,
        "confirmsenha": confirmaSenha
    }
    postDados(cadastrarUser)
    document.getElementById('formulariosenha').reset()
    window.location.href="index.html"
})



 

