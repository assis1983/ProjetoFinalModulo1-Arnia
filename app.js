const nome = document.querySelector('#inputNameCadastro')
const email = document.querySelector('#inputEmailCadastro')
const botao_Atualizar = document.querySelector('#btnatualizar')
const nomePaciente = document.querySelector('#inputNome')
const cpfPaciente = document.querySelector('#inputCpf')
const emailPaciente = document.querySelector('#inputEmail')
const civilPaciente = document.querySelector('#select')
const naturalidadePaciente = document.querySelector('#inputNatural')
const sexoPaciente = document.querySelector('#selectsexo')
const profissaoPaciente = document.querySelector('#inputProfissao')
const maePaciente = document.querySelector('#inputNomeMae')
const nascimentoPaciente = document.querySelector('#inputNascimento')
const nacionalidadePaciente = document.querySelector('#selectNacionalidade')
const escolaridadePaciente = document.querySelector('#inputEscolaridade')
const paiPaciente = document.querySelector('#inputNomePai')
const form = document.querySelector('#modalconteudo')
const paciente_Element = document.getElementById('tabela')
const filter = document.querySelector('#grupopesquisar')
const filtro = document.querySelector('#inputpesquisar')
const enviar_filtro = document.querySelector('#btnfiltrar') 

async function postDados(info) {
  return fetch('https://dbjson-service-pacientes.onrender.com/pacientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
   },
    body: JSON.stringify(info),
 })
}

const putPost = async (id, post) => {
  await fetch(`https://dbjson-service-pacientes.onrender.com/pacientes/${id}`, {
    method: "PUT",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
}

const deleteUser = async (id) => {
  await fetch(`https://dbjson-service-pacientes.onrender.com/pacientes/${id}`, {
    method: "DELETE"
  })
}

function recarregarAPagina(){
  window.location.reload();
}

async function visualizarDados() {
  return fetch('https://dbjson-service-pacientes.onrender.com/pacientes') 
}

const cadastrar_User = async () => {
  const nome_cadastrar = nome.value
  const email_cadastrar = email.value
  console.log(nome_cadastrar)

  const post_Cadastro = {
    "namecadastro": nome_cadastrar,
    "emailcadastro": email_cadastrar
  }
  await postDados(post_Cadastro)
}


window.addEventListener('DOMContentLoaded', async (e) => {
  const response = await visualizarDados()
  const coleta_Dados = await response.json()
  coleta_Dados.map((element) => { 
    if(paciente_Element!= null) {
    paciente_Element.innerHTML+= `
    <th scope="col" class="border border-3 text-center"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.id}</a></th>
    <th scope="col" class="border border-3"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.name}</a></th>
    <th scope="col" class="border border-3"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.cpf}</a></th>
    <th scope="col" class="d-flex justify-content-between border border-2">
      <a href="prontuario.html?user=${element.id}" style="text-decoration: none;" data-toggle="tooltip" data-placement="right" title="Visualizar Prontuário"><i class="fa-regular fa-pen-to-square" style="color: #014e31;"></i></a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#modalEditar" style="text-decoration: none;"data-toggle="tooltip" data-placement="right" title="Editar Dados do Paciente" onclick="editDados(${element.id})"><i class="fa-solid fa-pencil" style="color: #405aef;"></i></a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropexcluido" style="text-decoration: none;" data-toggle="tooltip" data-placement="right" title="Excluir Paciente" onclick="deleteUser(${element.id})"><i class="fa-sharp fa-solid fa-trash" style="color: #f62a07;"></i></a>
    </th>`
    }
  })

})

form?.addEventListener('submit',  async (e) => {
  e.preventDefault();
  const adicionaNome = nomePaciente.value
  const adicionaCpf = cpfPaciente.value
  const adicionaEmail = emailPaciente.value
  const adicionaCivil= civilPaciente.value
  const adicionaNaturalidade = naturalidadePaciente.value
  const adicionaSexo = sexoPaciente.value
  const adicionaProfissao = profissaoPaciente.value
  const adicionaMae = maePaciente.value
  const adicionaNascimento = nascimentoPaciente.value
  const adicionaNacionalidade = nacionalidadePaciente.value
  const adicionaEscolaridade = escolaridadePaciente.value
  const adicionaPai = paiPaciente.value

  const dados = {
    "name": adicionaNome,
    "cpf": adicionaCpf,
    "email": adicionaEmail,
    "civil": adicionaCivil,
    "naturalidade": adicionaNaturalidade,
    "sexo": adicionaSexo,
    "profissao": adicionaProfissao,
    "mae": adicionaMae,
    "dataNacimento": adicionaNascimento,
    "nacionalidade": adicionaNacionalidade,
    "escolaridade": adicionaEscolaridade,
    "pai": adicionaPai
  }

  await postDados(dados)
  
})
form?.reset()

async function editDados(id) {
  const response = await fetch(`https://dbjson-service-pacientes.onrender.com/pacientes/${id}`)
  const dados = await response.json()
  document.querySelector('#atualizarNome').value = dados.name
  document.querySelector('#atualizarCpf').value = dados.cpf
  document.querySelector('#atualizarEmail').value = dados.email
  document.querySelector('#atualizarestadoselect').value = dados.civil
  document.querySelector('#inpuatualizarNatural').value = dados.naturalidade
  document.querySelector('#selectatualizasexo').value = dados.sexo
  document.querySelector('#inputatualizaProfissao').value = dados.profissao
  document.querySelector('#inputatualizaNomeMae').value = dados.mae
  document.querySelector('#inputatualizaNascimento').value = dados.datanascimento
  document.querySelector('#selectatualizanacionalidade').value = dados.nacionalidade
  document.querySelector('#inputatualizaEscolaridade').value = dados.escolaridade
  document.querySelector('#inputatualizaNomePai').value = dados.pai

  idUsuarioAtual = id
}

botao_Atualizar?.addEventListener('click', async (e) => {
  e.preventDefault();
  const atualizar = {
    "name": document.querySelector('#atualizarNome').value,
    "cpf": document.querySelector('#atualizarCpf').value,
    "email": document.querySelector('#atualizarEmail').value,  
    "civil": document.querySelector('#atualizarestadoselect').value,
    "naturalidade": document.querySelector('#inpuatualizarNatural').value,
    "sexo": document.querySelector('#selectatualizasexo').value, 
    "profissao": document.querySelector('#inputatualizaProfissao').value, 
    "mae": document.querySelector('#inputatualizaNomeMae').value,  
    "dataNacimento": document.querySelector('#inputatualizaNascimento').value, 
    "nacionalidade": document.querySelector('#selectatualizanacionalidade').value,  
    "escolaridade": document.querySelector('#inputatualizaEscolaridade').value,  
    "pai": document.querySelector('#inputatualizaNomePai').value
    
  }
  await putPost(idUsuarioAtual, atualizar)
  idUsuarioAtual = null
})

async function visualizarInfo (id) { 
  const apiResposta = await fetch(`https://dbjson-service-pacientes.onrender.com/pacientes/${id}`)
  const posts = await apiResposta.json()
  document.querySelector('#inputNomevisual').value = posts.name
  document.querySelector('#visualCpf').value = posts.cpf
  document.querySelector('#visualemail').value = posts.email
  document.querySelector('#visualcivil').value = posts.civil
  document.querySelector('#visualnaturalidade').value = posts.naturalidade
  document.querySelector('#visualsexo').value = posts.sexo
  document.querySelector('#visualprofissao').value = posts.profissao
  document.querySelector('#visualmae').value = posts.mae
  document.querySelector('#visualdata').value = posts.dataNacimento
  document.querySelector('#visualnacionalidade').value = posts.nacionalidade
  document.querySelector('#visualescolaridade').value = posts.escolaridade
  document.querySelector('#visualpai').value = posts.pai
  
  
}

enviar_filtro.addEventListener('click', async (event) => {
event.preventDefault()
const dados_filtro = filtro.value
console.log(dados_filtro)
const response = await fetch(`https://dbjson-service-pacientes.onrender.com/pacientes?q=${dados_filtro}`)
console.log(response)
const dadosFiltrados = await response.json()
console.log(dadosFiltrados)
document.getElementById('tabela').innerHTML = ''
dadosFiltrados.map((element) => {
  paciente_Element.innerHTML+= `
  <th scope="col" class="border border-3 text-center"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.id}</a></th>
  <th scope="col" class="border border-3"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.name}</a></th>
  <th scope="col" class="border border-3"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.cpf}</a></th>
  <th scope="col" class="border border-3"><a href="#" data-bs-toggle="modal" data-bs-target="#visualizarDados" class="text-muted data-toggle="tooltip" data-placement="right" title="Visualizar Dados" style="text-decoration: none;" onclick="visualizarInfo(${element.id})">${element.email}</a></th>
  <th scope="col" class="d-flex justify-content-between border border-2">
    <a href="prontuario.html?user=${element.id}" style="text-decoration: none;" data-toggle="tooltip" data-placement="right" title="Visualizar Prontuário"><i class="fa-regular fa-pen-to-square mx-1" style="color: #014e31;"></i></a>
    <a href="#" data-bs-toggle="modal" data-bs-target="#modalEditar" style="text-decoration: none;"data-toggle="tooltip" data-placement="right" title="Editar Dados do Paciente" onclick="editDados(${element.id})"><i class="fa-solid fa-pencil mx-1" style="color: #405aef;"></i></a>
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropexcluido" style="text-decoration: none;" data-toggle="tooltip" data-placement="right" title="Excluir Paciente" onclick="deleteUser(${element.id})"><i class="fa-sharp fa-solid fa-trash mx-1" style="color: #f62a07;"></i></a>
  </th>`  
})
  
})

$(document).ready(function() {
	$('#topo').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

