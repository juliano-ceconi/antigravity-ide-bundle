# Tutorial de Instalação no Windows: Google Antigravity IDE

Este tutorial guia você na instalação passo a passo do aplicativo **Google Antigravity IDE** no Windows 10 ou 11 e na configuração inicial da sua inteligência de forma simples e direta.

---

## Requisitos Prévios

Antes de instalar o Antigravity IDE, certifique-se de ter instalado em sua máquina:
1.  **Git**: Essencial para o agente interagir com o histórico e submeter commits.
2.  **Node.js (LTS)**: Opcional, mas altamente recomendado se você estiver trabalhando com projetos JavaScript/TypeScript.

---

## Passo 1: Download e Instalação do Aplicativo

O Google Antigravity IDE é distribuído como um aplicativo instalador nativo para Windows ou como uma extensão rica para as IDEs compatíveis (como VS Code).

1.  Acesse o portal de downloads oficial ou o repositório de lançamentos e baixe o instalador `.exe` (ou instale diretamente da loja de extensões da sua IDE procurando por **Google Antigravity IDE**).
2.  Execute o instalador e siga o assistente de instalação clicando em **Próximo** até concluir.
3.  Abra o aplicativo. Você será apresentado a uma tela de configuração inicial limpa e intuitiva.

---

## Passo 2: Gerando sua API Key do Gemini

O Antigravity IDE utiliza os modelos de IA do Google (como a família **Gemini 3.5**) para executar as operações lógicas. Para que ele funcione, você precisa fornecer uma chave de API:

1.  Acesse o [Google AI Studio](https://aistudio.google.com/).
2.  Faça login com a sua conta Google.
3.  Clique no botão **Create API Key** (Criar Chave de API).
4.  Copie a chave gerada (ela começa com `AIzaSy...`). *Lembre-se de mantê-la segura e nunca compartilhá-la publicamente.*

---

## Passo 3: Configuração no Aplicativo

Com o aplicativo aberto e a chave em mãos:

1.  Clique no ícone de engrenagem (**Configurações/Settings**) no menu lateral do Antigravity IDE.
2.  No campo **Gemini API Key**, cole a chave que você gerou no passo anterior.
3.  No seletor de modelos, escolha o modelo recomendado (ex: **Gemini 3.5 Flash** para tarefas rápidas de baixo custo ou **Gemini 3.5 Pro** para refatorações complexas).
4.  Clique em **Salvar**. O aplicativo validará a conexão exibindo um indicador verde indicando **Conectado**.

---

## Passo 4: Abrindo o seu Primeiro Workspace

O Antigravity IDE trabalha no conceito de workspaces (diretórios locais de projetos):

1.  No aplicativo, clique em **File ➔ Open Folder** (Arquivo ➔ Abrir Pasta).
2.  Selecione a pasta do seu projeto de desenvolvimento (ex: `C:\projetos\meu-site`).
3.  O agente fará um scanner rápido no projeto para reconhecer a estrutura de pastas e ler as configurações locais.
4.  **Pronto!** O chat de pair programming lateral estará ativo e aguardando suas instruções de desenvolvimento.
