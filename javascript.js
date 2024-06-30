document.addEventListener('DOMContentLoaded', () => {
    // Funzione per gestire l'apertura e la chiusura dei dropdown
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('show');
    }

    // Aggiungi event listener ai pulsanti dei dropdown
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', (event) => {
            const dropdownId = button.dataset.dropdown;
            toggleDropdown(dropdownId);

            // Chiudi tutti gli altri dropdown aperti
            document.querySelectorAll('.dropdown-content').forEach(content => {
                const currentDropdownId = content.getAttribute('id');
                if (currentDropdownId !== dropdownId) {
                    content.classList.remove('show');
                }
            });

            // Prevenire la propagazione del click per evitare la chiusura immediata
            event.stopPropagation();
        });
    });

    // Chiudi il dropdown se clicchi fuori
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content') && !e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});

// Esempio di JavaScript per gestire la navigazione delle pagine

document.addEventListener('DOMContentLoaded', () => {
    const forumLink = document.querySelector('#forum-link');
    const forumPage = document.querySelector('#forum-page');

    forumLink.addEventListener('click', () => {
        forumPage.classList.add('active');
        // Aggiungi altre azioni se necessario (ad esempio, nascondi altre pagine)
    });
});

