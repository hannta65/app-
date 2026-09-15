const express = require("express");
const router = express.Router();
const { adicionarChamado, listarChamados } = require("./data");

// Cadastro de chamado
router.post("/chamados", (req, res) => {
  const { titulo, descricao, prioridade } = req.body;
  if (!titulo || !descricao || !prioridade) {
    return res.status(400).json({ error: "Campos obrigatórios: titulo, descricao, prioridade" });
  }
  const chamado = adicionarChamado(titulo, descricao, prioridade);
  res.status(201).json(chamado);
});

// Listagem de chamados
router.get("/chamados", (req, res) => {
  res.json(listarChamados());
});

module.exports = router;
