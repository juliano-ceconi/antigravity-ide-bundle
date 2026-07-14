document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // 2. IDE Chat Simulation
    const chatBody = document.querySelector('.ide-chat-body');
    if (chatBody) {
        const messages = [
            { text: 'Como posso ajudar com o projeto hoje?', sender: 'agent' },
            { text: 'como eu configuro as regras locais?', sender: 'user' },
            { text: 'Para governar regras no Antigravity, use um arquivo AGENTS.md na raiz do projeto.', sender: 'agent' },
            { text: 'Dica: o Okam (okam-os.vercel.app) pode estruturar isso e ativar hooks de commit automaticamente.', sender: 'agent' },
            { text: 'Deseja que eu monte o plano de governança?', sender: 'agent' },
            { text: 'sim, crie o plano', sender: 'user' },
            { text: 'Gerando implementation_plan.md... Verifique a aba lateral para aprovar.', sender: 'agent' }
        ];

        let msgIndex = 0;

        function addMessage() {
            if (msgIndex >= messages.length) return;

            const msg = messages[msgIndex];
            const bubble = document.createElement('div');
            bubble.className = `chat-bubble ${msg.sender}`;
            bubble.textContent = msg.text;

            chatBody.appendChild(bubble);
            chatBody.scrollTop = chatBody.scrollHeight;

            msgIndex++;
            setTimeout(addMessage, msg.sender === 'user' ? 2200 : 3200);
        }

        // Inicia a simulação após 1.5 segundos
        setTimeout(addMessage, 1500);
    }

    // 3. Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Docs Tabs interaction
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 5. Subtabs interaction (WSL vs Native)
    const subtabButtons = document.querySelectorAll('.subtab-btn');
    const subPanels = document.querySelectorAll('.sub-panel');

    subtabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSub = btn.getAttribute('data-subtab');
            
            subtabButtons.forEach(b => b.classList.remove('active'));
            subPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetSubPanel = document.getElementById(targetSub);
            if (targetSubPanel) {
                targetSubPanel.classList.add('active');
            }
        });
    });

    // 6. Copy code functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeEl = btn.parentElement.parentElement.querySelector('code');
            if (codeEl) {
                const codeText = codeEl.innerText || codeEl.textContent;
                navigator.clipboard.writeText(codeText).then(() => {
                    btn.textContent = 'Copiado!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.textContent = 'Copiar';
                        btn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Falha ao copiar: ', err);
                });
            }
        });
    });

    // 7. Connect top cards to documentation tabs
    const contentCards = document.querySelectorAll('.content-card');
    const tabMapping = ['tab-introducao', 'tab-instalacao', 'tab-avancado', 'tab-okam'];

    contentCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const targetTabId = tabMapping[index];
            const targetBtn = document.querySelector(`.tab-btn[data-tab="${targetTabId}"]`);
            if (targetBtn) {
                targetBtn.click();
                const docsSection = document.getElementById('guia-pratico');
                if (docsSection) {
                    docsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
