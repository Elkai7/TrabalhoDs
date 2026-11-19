// Alternância entre a Página Institucional e a Página da Campanha Coletiva
function mostrarPagina(pagina) {
    const pagInstitucional = document.getElementById('pagina-institucional');
    const pagCampanha = document.getElementById('pagina-campanha');
    const btnInstitucional = document.getElementById('btn-institucional');
    const btnCampanha = document.getElementById('btn-campanha');

    if (pagina === 'institucional') {
        pagInstitucional.className = 'pagina-ativa';
        pagCampanha.className = 'pagina-oculta';
        btnInstitucional.classList.add('active');
        btnCampanha.classList.remove('active');
    } else {
        pagInstitucional.className = 'pagina-oculta';
        pagCampanha.className = 'pagina-ativa';
        btnCampanha.classList.add('active');
        btnInstitucional.classList.remove('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simulador de Eficiência Energética dos Data Centers da Innovatec
function calcularImpactoEnergetico() {
    const servidores = parseInt(document.getElementById('servidoresRange').value);
    document.getElementById('qtdServidores').textContent = servidores;

    // Estimativas baseadas em operação 100% solar/eólica e resfriamento fechado
    const co2PorServidor = 0.85; // toneladas/ano evitadas
    const aguaPorServidor = 3600; // litros/ano economizados
    const energiaPorServidor = 4.2; // MWh/ano de fonte limpa

    const totalCO2 = (servidores * co2PorServidor).toFixed(1);
    const totalAgua = (servidores * aguaPorServidor).toLocaleString('pt-BR');
    const totalEnergia = (servidores * energiaPorServidor).toFixed(1);

    document.getElementById('co2Evitado').textContent = `${totalCO2} toneladas`;
    document.getElementById('aguaEconomizada').textContent = `${totalAgua} litros`;
    document.getElementById('energiaLimpa').textContent = `${totalEnergia} MWh`;
}

// Registro de Adesão na Campanha de Conscientização Coletiva
let totalPessoas = 1428;
let totalMudas = 3890;

function registrarCompromisso(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeParticipante').value.trim();
    const bairro = document.getElementById('bairroParticipante').value.trim();
    const checkboxes = document.querySelectorAll('.acao-check:checked');
    const msgFeedback = document.getElementById('mensagem-sucesso');

    if (checkboxes.length === 0) {
        msgFeedback.style.color = '#DC2626';
        msgFeedback.textContent = 'Por favor, marque pelo menos uma ação coletiva acima antes de assinar.';
        return;
    }

    // Atualiza contadores da comunidade
    totalPessoas += 1;
    totalMudas += checkboxes.length; // Cada ação marcada garante 1 muda nativa

    document.getElementById('contador-pessoas').textContent = totalPessoas.toLocaleString('pt-BR');
    document.getElementById('contador-mudas').textContent = totalMudas.toLocaleString('pt-BR');

    msgFeedback.style.color = '#064E3B';
    msgFeedback.textContent = `Obrigado, ${nome} (${bairro})! Sua adesão foi registrada e garantiu +${checkboxes.length} muda(s) nativa(s) no projeto coletivo.`;

    // Limpa formulário
    document.getElementById('form-campanha').reset();
}

