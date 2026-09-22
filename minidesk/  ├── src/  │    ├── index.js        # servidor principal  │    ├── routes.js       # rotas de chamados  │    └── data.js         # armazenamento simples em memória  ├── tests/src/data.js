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

function alterarStatus(id, novoStatus) {
  const statusPermitidos = ["pendente", "em andamento", "concluído"];
  if (!statusPermitidos.includes(novoStatus)) return null;

  const chamado = chamados.find(c => c.id === id);
  if (!chamado) return null;
  chamado.status = novoStatus;
  return chamado;
}

function excluirChamado(id) {
  const index = chamados.findIndex(c => c.id === id);
  if (index === -1) return null;
  return chamados.splice(index, 1)[0];
}

module.exports = { adicionarChamado, listarChamados, alterarStatus, excluirChamado };
