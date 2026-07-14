# Guia de Introdução: Google Antigravity IDE

O **Google Antigravity IDE** é um assistente de inteligência artificial agentic (com capacidade de agência e ação autônoma) projetado pela equipe do **Google DeepMind**. Ele atua integrado ao seu ambiente de desenvolvimento como um parceiro de pair programming extremamente ativo e autônomo.

Diferente de assistentes de chat tradicionais que apenas geram blocos de código para você copiar e colar, o Antigravity IDE atua diretamente sobre o seu repositório local. Ele entende a "alma" do seu projeto, planeja soluções, cria arquivos, aplica edições cirúrgicas e valida o próprio trabalho antes de dá-lo como concluído.

---

## Os Três Pilares da Autonomia Agentic

1.  **Leitura e Escrita Local**: O agente possui ferramentas para analisar estruturas de arquivos, buscar padrões de texto (com ripgrep) e escrever/modificar arquivos cirurgicamente sem reescrever trechos desnecessários.
2.  **Terminal Integrado**: Ele consegue executar tarefas de compilação, testes, comandos Git e scripts diretamente no seu sistema operacional (geralmente sob aprovação explícita no Windows).
3.  **Planejamento de Ciclo Fechado**: Diante de uma tarefa complexa, o agente primeiro pesquisa o contexto, escreve um plano de implementação detalhado (`implementation_plan.md`), aguarda sua aprovação e executa um loop de tarefas (`task.md`) com verificação local antes de entregar o resultado (`walkthrough.md`).

---

## O Fluxo de Trabalho do Agente

O Antigravity IDE opera em fases claras para evitar modificações desnecessárias e reduzir o churn de código:

```
[Pesquisa e Contexto] ➔ [Plano de Implementação] ➔ [Aprovação do Usuário] ➔ [Execução da Task] ➔ [Verificação Local] ➔ [Entrega & Handoff]
```

*   **Pesquisa**: O agente lê os arquivos afetados e deduz as regras locais do repositório.
*   **Plano**: Ele cria um roteiro claro das mudanças e traz perguntas caso haja alguma ambiguidade.
*   **Aprovação**: Você valida se a direção técnica está correta antes de qualquer escrita.
*   **Execução**: O agente realiza as alterações de forma focada e cirúrgica.
*   **Verificação**: Executa comandos de testes e builds para comprovar que nada foi quebrado.
*   **Handoff**: Documenta o que foi feito no `walkthrough.md`.

---

## Governança e Regras Locais

O agente se molda ao seu estilo de programação a partir de arquivos de configuração locais:
-   **`AGENTS.md`**: Localizado na raiz do seu projeto ou globalmente, é a "constituição" que o agente é obrigado a ler no início de cada sessão. Ele dita os padrões de codificação, restrições e regras do projeto.
-   **Skills e Workflows**: O agente pode carregar capacidades modulares (ex: rotinas de testes, auditorias de segurança, etc.) baseadas na estrutura do repositório.
