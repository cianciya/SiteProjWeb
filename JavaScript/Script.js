document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os elementos com a classe '.slide'
    const slidesContainer = document.querySelector('.slides'); // Seleciona o contêiner dos slides
    let index = 0; // Inicializa o índice do slide atual

    function mostrarSlide() {
        index = (index + 1) % slides.length; // Calcula o próximo índice de slide usando o operador de módulo
        const translateValue = -index * 100; // Calcula o valor de translação para o próximo slide
        slidesContainer.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave para a mudança de slide
        slidesContainer.style.transform = `translateX(${translateValue}%)`; // Aplica a translação para mudar de slide
        setTimeout(() => {
            slidesContainer.style.transition = ''; // Remove a transição após a mudança de slide para evitar repetição automática
        }, 500); // Tempo de espera igual à duração da transição (500 milissegundos)
        setTimeout(mostrarSlide, 5000); // Altera automaticamente os slides a cada 5 segundos (5000 milissegundos)
    } 
    mostrarSlide(); // Inicia a função para mostrar os slides automaticamente
});

/*----------------------------------------------------------------------------------------------------------------*/

// Função para atualizar dinamicamente o rodapé com a data e hora atuais
function atualizarDataHora() {
    const dataHoraAtual = new Date(); // Obtém a data e hora atuais
    const data = dataHoraAtual.toLocaleDateString('pt-BR'); // Formata a data no formato brasileiro
    const hora = dataHoraAtual.toLocaleTimeString('pt-BR'); // Formata a hora no formato brasileiro
    const rodape = document.querySelector('footer p'); // Seleciona o elemento de parágrafo dentro do rodapé
    rodape.textContent = `© ${data} ${hora} - Escritório de Arquitetura. Todos os direitos reservados.`; // Atualiza o conteúdo do rodapé com a data e hora
}

// Chama a função para atualizar a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

// Chama a função uma vez para exibir a data e hora inicial
atualizarDataHora();

/*----------------------------------------------------------------------------------------------------------------*/

// Função para rolar suavemente para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0, // Define o topo da página como destino
        behavior: 'smooth' // Adiciona um comportamento de rolagem suave
    });
}

/*----------------------------------------------------------------------------------------------------------------*/

// Adiciona um evento de clique ao botão de rolagem suave para o topo
const botaoTopo = document.querySelector('.botao-topo'); // Seleciona o botão de rolagem suave para o topo
botaoTopo.addEventListener('click', scrollToTop); // Adiciona um ouvinte de evento de clique para rolar suavemente para o topo

/*----------------------------------------------------------------------------------------------------------------*/

// Adiciona um evento de envio para o formulário de contato
document.getElementById("formulario-contato").addEventListener("submit", (event)=>{
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    const formData = new FormData(event.target); // Obtém os dados do formulário
    const email = formData.get("email"); // Obtém o valor do campo de email do formulário
    alert(`Email enviado com sucesso para: ${email}`); // Exibe um alerta com o email inserido
});
