document.addEventListener('DOMContentLoaded', function () {
  var entradaTarefa = document.getElementById('botar');
  var botaoAdicionarTarefa = document.getElementById('addtarefa');
  var botaoVisualizarTarefas = document.getElementById('mostrarTarefas');
  var containerTarefas = document.getElementById('lista');
  var listaTarefas = document.getElementById('itemlista');
  var tarefasVisiveis = false;

  botaoVisualizarTarefas.addEventListener('click', function () {
    if (tarefasVisiveis == false) {
      containerTarefas.style.display = 'block';
      botaoVisualizarTarefas.textContent = 'Ocultar Tarefas';
      tarefasVisiveis = true;
    } else {
      containerTarefas.style.display = 'none';
      botaoVisualizarTarefas.textContent = 'Visualizar Tarefas';
      tarefasVisiveis = false;
    }

  });

  botaoAdicionarTarefa.addEventListener('click', function () {
    var textoTarefa = entradaTarefa.value.trim();

    if (textoTarefa !== '') {
      var itemTarefa = document.createElement('li');
      itemTarefa.textContent = textoTarefa;
      itemTarefa.classList.add('itemlista');

      var botaoEditar = document.createElement('button');
      botaoEditar.textContent = 'Editar';
      botaoEditar.classList.add('botaoeditar');
      itemTarefa.appendChild(botaoEditar);

      var botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir';
      botaoExcluir.classList.add('botaodeletar');
      itemTarefa.appendChild(botaoExcluir);

      listaTarefas.appendChild(itemTarefa);
      entradaTarefa.value = '';
    }
  });

  listaTarefas.addEventListener('click', function (event) {
    var click1 = event.target;
    if (click1.classList.contains('botaoeditar')) {
      var novoTexto = prompt('Digite sua nova tarefa:');
      if (novoTexto !== null && novoTexto.trim() !== '') {
        click1.parentNode.firstChild.textContent = novoTexto;
      }
    } else if (click1.classList.contains('botaodeletar')) {
        click1.parentNode.remove();
    }
  });
});