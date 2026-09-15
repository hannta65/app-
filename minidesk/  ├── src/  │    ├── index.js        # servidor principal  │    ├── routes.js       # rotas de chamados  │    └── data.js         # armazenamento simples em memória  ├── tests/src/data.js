// Armazenamento simples em memória
let chamados = [];
let idCounter = 1;

function adicionarChamado(titulo, descricao, prioridade) {
  const chamado = { id: idCounter++, titulo, descricao, prioridade, status: "pendente" };
  chamados.push(chamado);
  return chamado;
}

function listarChamados() {
  return chamados;
}

module.exports = { adicionarChamado, listarChamados };
