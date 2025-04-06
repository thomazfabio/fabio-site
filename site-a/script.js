function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function toggleCard(cardId) {
    let card = document.getElementById(cardId);  // O card completo
    let cardBody = card.querySelector('.card-body');  // O corpo do card
    let button = card.querySelector('.toggle-btn');  // O botão de alternância

    // Alterna a visibilidade do corpo do card
    if (cardBody.style.display === "none" || cardBody.style.display === "") {
        cardBody.style.display = "block";
        button.textContent = "-";
    } else {
        cardBody.style.display = "none";
        button.textContent = "+";
    }
}

// Fazendo o card inteiro clicável
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
        // Verifica se o clique foi no botão de alternância
        if (event.target !== card.querySelector('.toggle-btn')) {
            toggleCard(card.id);  // Chama a função para alternar
        }
    });
});
