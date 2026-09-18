const { adicionarChamado, listarChamados } = require("../src/data");

describe("MiniDesk - Chamados", () => {
  beforeEach(() => {
    // Resetar dados antes de cada teste
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
    expect(lista.length).toBe(2);
  });
});
test("Deve alterar o status de um chamado existente", () => {
  const chamado = adicionarChamado("Erro no login", "Usuário não consegue entrar", "alta");
  const atualizado = alterarStatus(chamado.id, "em andamento");
  expect(atualizado.status).toBe("em andamento");
});

test("Deve retornar null ao tentar alterar status de chamado inexistente", () => {
  const resultado = alterarStatus(999, "concluído");
  expect(resultado).toBeNull();
});
