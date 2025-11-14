document.getElementById('finalizar-quiz').addEventListener('click', function() {
    // 1. Defina as respostas corretas (ajuste estas letras para as suas respostas!)
    const respostasCorretas = {
        pergunta1: 'A', // Resposta correta para a pergunta 1
        pergunta2: 'A', // Resposta correta para a pergunta 2
        pergunta3: 'A',
        pergunta4: 'A',
        // Adicione aqui as chaves para todas as suas perguntas
    };

    let acertos = 0;
    let totalPerguntas = 0;

    // 2. Itera sobre todas as perguntas definidas no objeto de respostas corretas
    for (const idPergunta in respostasCorretas) {
        totalPerguntas++;
        // Pega todos os botões de rádio com o nome da pergunta
        const opcoes = document.getElementsByName(idPergunta);
        let respostaSelecionada = null;

        // Verifica qual opção foi selecionada
        opcoes.forEach(opcao => {
            if (opcao.checked) {
                respostaSelecionada = opcao.value;
            }
        });

        // 3. Compara a resposta do usuário com a resposta correta
        if (respostaSelecionada === respostasCorretas[idPergunta]) {
            acertos++;
        }
    }

    const mensagemElement = document.getElementById('mensagem-resultado');
    mensagemElement.style.display = 'block';

    // 4. Lógica de Sucesso: se acertar todas, redireciona para a carta!
    if (acertos === totalPerguntas) {
        mensagemElement.style.color = 'green';
        mensagemElement.textContent = 'Parabéns! Você provou sua conexão! Redirecionando para a cartinha de amor...';
        
        // Redireciona para a página da cartinha (Você precisará criar o carta.html)
        setTimeout(() => {
            window.location.href = 'carta.html';
        }, 3000); // Redireciona após 3 segundos
        
    } else {
        // Lógica de Falha
        mensagemElement.style.color = 'red';
        mensagemElement.textContent = `Ops! Você acertou apenas ${acertos} de ${totalPerguntas} perguntas. Tente novamente!`;
    }
});