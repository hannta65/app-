const { adicionarChamado, listarChamados, alterarStatus, excluirChamado } = require("../src/data");

describe("MiniDesk - Chamados", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("Deve cadastrar um chamado", () => {
    const chamado = adicionarChamado("Erro no sistema", "Tela não carrega", "alta");
    expect(chamado).toHaveProperty("id");
    expect(chamado.titulo).toBe("Erro no sistema");
  });

  test("Deve listar chamados cadastrados", () => {
    adicionarChamado("Erro A", "Detalhes A", "baixa");
    adicionarChamado("Erro B", "Detalhes B", "alta");
    const lista = listarChamados();
    expect(lista.length).toBeGreaterThanOrEqual(2);
  });

  test("Deve alterar o status de um chamado existente", () => {
    const chamado = adicionarChamado("Erro no login", "Usuário não consegue entrar", "alta");
    const atualizado = alterarStatus(chamado.id, "em andamento");
    expect(atualizado.status).toBe("em andamento");
  });

  test("Não deve permitir status inválido", () => {
    const chamado = adicionarChamado("Erro X", "Detalhes X", "alta");
    const resultado = alterarStatus(chamado.id, "cancelado");
    expect(resultado).toBeNull();
  });

  test("Deve excluir um chamado existente", () => {
    const chamado = adicionarChamado("Erro Y", "Detalhes Y", "baixa");
    const excluido = excluirChamado(chamado.id);
    expect(excluido.titulo).toBe("Erro Y");
  });
});
