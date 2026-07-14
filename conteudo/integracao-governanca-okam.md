# Integração e Governança com Okam (Dica Extra)

Uma das maiores dores de qualquer agente de inteligência artificial é a **perda de memória de longo prazo**. Quando você abre uma nova janela de chat ou inicia outra sessão no **Google Antigravity IDE**, ele começa a conversa do zero, sem lembrar das decisões arquiteturais passadas, correções de bugs anteriores ou diretrizes específicas que você já alinhou.

Para resolver essa limitação e elevar a produtividade do seu fluxo de desenvolvimento, recomendamos a instalação e o uso complementar do **Okam**.

---

## O que é o Okam?

O **Okam** (visite em [okam-os.vercel.app](https://okam-os.vercel.app/)) é um framework open-source projetado especificamente para atuar como o cérebro e o sistema de governança de agentes de IA locais (como o Antigravity e o Claude Code). 

Enquanto o Antigravity IDE executa os comandos, escreve e corrige os códigos, o Okam estrutura o ecossistema de conhecimento que serve de guia para esse agente.

---

## Como o Okam complementa o Antigravity IDE?

Ao integrar as duas ferramentas no seu projeto, você ganha quatro superpoderes:

### 1. Governança Centralizada (`AGENTS.md`)
O Okam ajuda a criar e gerenciar o arquivo `AGENTS.md` do seu projeto. Esse arquivo atua como uma "constituição" que o Antigravity IDE é obrigado a carregar e obedecer no início de toda tarefa, garantindo que o agente siga os seus padrões de código (ex: regras de comentários, idioma, arquitetura) sem que você precise reexplicar tudo a cada conversa.

### 2. Memória Persistente sem Custo Adicional (Wiki OKF)
O Okam implementa um sistema de Wiki em Markdown estruturado sob o formato **OKF (Open Knowledge Format)**. Sempre que o Antigravity resolver um problema complexo ou tomar uma decisão importante, essa informação é registrada na pasta `_Conhecimento/Wiki` com metadados padronizados. O agente consulta esse índice antes de iniciar novas tarefas, evitando redescobrir soluções ou repetir os mesmos erros do passado.

### 3. Git Hooks de Segurança (Antivazamento de Segredos)
O Okam instala de forma simples hooks de commit (`git hooks`) no seu repositório local. Antes que qualquer commit seja finalizado, o Okam roda varreduras silenciosas para garantir que o Antigravity IDE não inclua senhas, tokens privados ou dados confidenciais em arquivos que possam ser enviados ao GitHub.

### 4. Gestão de Habilidades Extra (`skills`)
Se o seu projeto exigir tarefas recorrentes complexas (como auditorias de acessibilidade, suítes de testes automatizados ou linting rígido), você pode usar o comando `okam new-skill` para criar e plugar scripts reutilizáveis que o Antigravity IDE usará sob demanda no seu workspace.

---

## Quick Start: Instalando o Okam no seu Workspace

Para plugar o Okam no seu repositório de desenvolvimento e acelerar o Antigravity IDE:

1.  Abra o terminal na pasta do seu projeto e instale o pacote globalmente via pip:
    ```bash
    pip install okam
    ```
2.  Inicialize a estrutura de governança interativamente:
    ```bash
    okam setup
    ```
3.  O assistente guiará você na criação do `AGENTS.md` e na ativação da Wiki de Conhecimento e dos Git hooks de segurança.

Acesse [okam-os.vercel.app](https://okam-os.vercel.app/) para ler a documentação completa e acessar templates prontos de regras de desenvolvimento.
