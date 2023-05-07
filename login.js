const loginForm = document.getElementById('formulario');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('inputemail').value;
    const senha = document.getElementById('inputsenha').value;
    const resposta = await fetch ('https://dbjson-service-pacientes.onrender.com/cadastro')
    const cadastro = await resposta.json()
    cadastro.forEach(element => {
      if (element.emailCadastro === email && element.senha === senha) {
         window.location.href = 'cliente.html'
      }
    })
})
 


 





    

     



