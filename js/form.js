// obtém o formulário HTML
const form = document.querySelector('form');

// adiciona um ouvinte de evento para a submissão do formulário
form.addEventListener('submit', (event) => {
  // previne o comportamento padrão da submissão do formulário
  event.preventDefault();

  // obtém os valores dos campos do formulário
  const nome = document.querySelector('#nome').value;
  const cidade = document.querySelector('#cidade').value;
  const classe = document.querySelector('#classe').value;
  const raca = document.querySelector('#raca').value;
  const espada = document.querySelector('#espada').checked;
  const martelo = document.querySelector('#martelo').checked;
  const armadura = document.querySelector('#armadura').checked;
  const magia = document.querySelector('#magia').checked;
  const tutorialSim = document.querySelector('#optsim').checked;
  const tutorialNao = document.querySelector('#optnao').checked;
  //const subject = document.querySelector('#subject').checked;

  // valida os campos input(text) do formulário
  if (nome.trim() === '') {
    let verify_nome = document.querySelector('#verify_name')
    verify_nome.style.display = 'block'
    return;
  }

  if (cidade.trim() === '') {
    let verify_cidade = document.querySelector('#verify_city')
    verify_cidade.style.display = 'block'
    return;
  }


  // cria objetos com as informações do formulário
  const formData = {
    nome,
    cidade,
  };

  const classeData = {
    classe,
  };

  const racaData = {
    raca,
  };
  
  const equipamentoData = {
    espada,
    martelo,
    armadura,
    magia,
  };

  const tutorialData = {
    tutorialSim,
    tutorialNao,
  };


  // adiciona os objetos aos arrays de objetos
  const formArray = [];
  formArray.push(formData);

  const classeArray = [];
  classeArray.push(classeData);

  const racaArray = [];
  racaArray.push(racaData);
  
  const equipamentoArray = []
  equipamentoArray.push(equipamentoData);

  const tutorialArray = []
  tutorialArray.push(tutorialData);

  // converte os arrays de objetos para JSON
  const jsonData = JSON.stringify({
    form: formArray,
    classe: classeArray,
    raca: racaArray,
    equipamento: equipamentoArray,
    tutorial: tutorialArray
  }, null, 4);

  // cria um link de download para o arquivo JSON
  const link = document.createElement('a');
  link.download = 'formulario.json';
  link.href = `data:application/json;charset=utf-8,${encodeURIComponent(jsonData)}`;

  // adiciona o link à página e simula um clique para iniciar o download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
