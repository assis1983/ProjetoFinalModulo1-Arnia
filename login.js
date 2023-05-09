const loginForm = document.getElementById('formulario');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('inputEmail').value;
    const logsenha = document.getElementById('inputSenha').value;
    const resposta = await fetch ('https://dbjson-service-pacientes.onrender.com/cadastro')
    const cadastro = await resposta.json()
    cadastro.filter(element => {
      if (element.emailCadastro === email) {
         if (element.senha === logsenha)
          window.location.href ="cliente.html"
      } else {
        alert('Login ou Senha Inválidos')
      }
    })
  })


 





    

     



