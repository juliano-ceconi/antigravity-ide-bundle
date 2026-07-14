# Guia de Uso Básico do Google Antigravity IDE

Trabalhar com o **Google Antigravity IDE** é um processo interativo que combina conversação em linguagem natural com a aprovação de ações técnicas na interface do aplicativo. 

Aqui está o fluxo básico de utilização para que você tire o máximo proveito do seu agente.

---

## Interagindo pelo Chat da IDE

Na barra lateral ou janela do chat do Antigravity IDE, você conversa diretamente com o agente em português:
*   Para iniciar uma tarefa, descreva o seu objetivo:
    > *"Crie uma página de contato para o meu site com formulário de nome, email e mensagem, validando se os campos estão preenchidos."*
*   Você também pode mencionar arquivos específicos arrastando-os para a janela ou digitando `@nome_do_arquivo` para fornecer contexto explícito ao agente.

---

## O Ciclo de Planejamento e Execução Visual

Diante de solicitações complexas que exijam modificações de arquivos, o agente nunca executa as alterações de forma silenciosa. Ele gera artefatos de controle que aparecem como cards interativos na IDE:

1.  **Plano de Implementação (`implementation_plan.md`)**:
    *   O agente gera um rascunho detalhando quais arquivos serão criados, modificados ou excluídos.
    *   Um card visual com os botões **Aprovar (Proceed)** ou **Rejeitar (Reject)** aparecerá na IDE.
    *   **Ação**: Revise os arquivos afetados no card e clique em **Aprovar** se a direção estiver correta. Se precisar ajustar algo, apenas digite no chat: *"Mude o plano para usar CSS vanilla em vez de Tailwind"*.

2.  **Lista de Tarefas (`task.md`)**:
    *   Assim que o plano é aprovado, a IDE exibe um painel de checklist ativo.
    *   O agente vai marcando as etapas como concluídas conforme avança. Você pode acompanhar o progresso em tempo real pela barra de status.

3.  **Relatório de Entrega (`walkthrough.md`)**:
    *   Ao terminar, o agente consolida as mudanças efetuadas, explica as decisões tomadas e lista o que foi verificado.
    *   A IDE exibirá um resumo visual para que você revise a entrega final.

---

## Modais de Permissão e Revisão de Código

Por motivos de segurança e integridade do seu computador, o Antigravity IDE opera sob o princípio do consentimento explícito:

*   **Aprovação de Comandos no Terminal**: Se o agente precisar rodar um teste ou instalar uma dependência, a IDE exibirá uma notificação perguntando se você autoriza a execução daquele comando específico.
*   **Visualização de Diffs (Antes/Depois)**: Antes de aplicar uma alteração a um arquivo existente, a IDE abre uma aba de comparação de código (*diff view*), destacando as linhas removidas em vermelho e as adicionadas em verde. Você pode aceitar a modificação ou pedir ajustes.
*   **Permissões de Diretórios**: Na primeira execução de leitura ou gravação fora do diretório do projeto, a IDE solicitará confirmação para garantir a proteção dos seus dados pessoais.
