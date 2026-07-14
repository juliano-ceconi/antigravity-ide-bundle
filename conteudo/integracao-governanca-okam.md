# Memória e Organização com Okam (Dica Extra)

Uma característica comum de quase todas as inteligências artificiais é a **falta de memória de longo prazo**. 

Se você fechar a janela do chat do **Anticaos** hoje e abrir novamente amanhã, ele iniciará a conversa do zero. Ele não lembrará, por exemplo, do estilo de texto que você prefere para o seu TCC, das regras de organização do seu trabalho ou das anotações importantes que vocês já alinharam.

Para resolver essa limitação de forma simples, recomendamos o uso complementar do **Okam**.

---

## O que é o Okam?

O **Okam** (visite em [okam-os.vercel.app](https://okam-os.vercel.app/)) é uma ferramenta gratuita desenvolvida especificamente para servir como o "caderno de memórias e manual de regras" para assistentes de inteligência artificial.

Enquanto o Anticaos executa as tarefas pesadas de escrita e organização de arquivos na sua pasta, o Okam guarda as suas preferências para que a IA nunca se esqueça delas.

---

## Como o Okam Facilita a Sua Vida?

Ao plugar o Okam na pasta do seu projeto, você ganha três superpoderes de organização:

### 1. Um Manual de Regras Fixo (`AGENTS.md`)
O Okam ajuda a criar um arquivo chamado `AGENTS.md` na pasta do seu projeto. Esse arquivo funciona como a "constituição" da sua pasta. A IA do Anticaos é obrigada a ler esse manual no início de cada conversa. 
Assim, você pode registrar lá que gosta de *"textos explicativos e diretos"*, *"tabelas organizadas por data"* ou *"resumos sempre em português brasileiro"*, sem precisar reexplicar isso toda vez que abrir o aplicativo.

### 2. Caderno de Aprendizados Duradouro (Wiki Local)
Toda vez que a IA ajudar você a resolver uma tarefa importante ou organizar um arquivo difícil, o Okam ajuda a salvar essa lição em uma pasta de Wiki local (`_Conhecimento/Wiki`). Nas próximas conversas, a IA consulta essa pasta para não cometer erros antigos e continuar o trabalho exatamente de onde parou.

### 3. Cinto de Segurança Para Seus Dados
Se você utiliza a IA para projetos de trabalho ou estudos que contêm informações privadas, o Okam instala travas de segurança automáticas. Elas impedem que senhas, tokens de API ou informações confidenciais sejam salvos ou enviados para a internet por engano.

---

## Como Configurar o Okam Usando o Próprio Assistente

Você não precisa abrir telas pretas de computador ou digitar códigos complexos. O próprio assistente do Anticaos pode fazer essa configuração para você!

1. Abra a pasta do seu projeto no **Anticaos**.
2. Copie e cole o seguinte texto no chat lateral:

```text
Por favor, instale o framework Okam usando o comando "pip install okam" e depois execute "okam setup" para criar o arquivo de regras AGENTS.md e configurar as travas de segurança de dados na minha pasta. Faça tudo de forma automatizada no Windows e me mostre quando concluir.
```

3. O assistente mostrará um card na tela pedindo sua autorização. Clique em **Aprovar** e ele fará toda a configuração nos bastidores em poucos segundos!
