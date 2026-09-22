const express = require("express");
const router = express.Router();
const { adicionarChamado, listarChamados, alterarStatus, excluirChamado } = require("./data");

// Cadastro
router.post("/chamados", (req, res) => {
  const { titulo, descricao, prioridade } = req.body;
  if (!titulo || !descricao || !prioridade) {
    return res.status(400).json({ error: "Campos obrigatórios: titulo, descricao, prioridade" });
  }
  const chamado = adicionarChamado(titulo, descricao, prioridade);
  res.status(201).json(chamado);
});

// Listagem
router.get("/chamados", (req, res) => {
  res.json(listarChamados());
});

// Alteração de status
router.patch("/chamados/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: "Campo obrigatório: status" });

  const chamado = alterarStatus(parseInt(id), status);
  if (!chamado) return res.status(400).json({ error: "Status inválido ou chamado não encontrado" });

  res.json(chamado);
});

// Exclusão
router.delete("/chamados/:id", (req, res) => {
  const { id } = req.params;
  const chamado = excluirChamado(parseInt(id));
  if (!chamado) return res.status(404).json({ error: "Chamado não encontrado" });
  res.json({ message: "Chamado excluído com sucesso", chamado });
});

module.exports = router;
