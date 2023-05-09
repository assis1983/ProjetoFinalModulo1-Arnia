const loginForm = document.getElementById('formulario');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('inputemail').value;
    const senha = document.getElementById('inputsenha').value;
    const resposta = await fetch ('https://dbjson-service-pacientes.onrender.com/cadastro')
    const cadastro = await resposta.json()
    cadastro.filter(element => {
      if (element.emailCadastro === email) {
         if (element.senha === senha)
          window.location.href ="cliente.html"
      } else {
        alert('Login ou Senha Inválidos')
      }
    })
  })


 





    

     



