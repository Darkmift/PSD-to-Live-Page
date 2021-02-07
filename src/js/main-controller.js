function toggleMenu() {
    document.querySelector('body').classList.toggle('menu-open');
}

function openModal(ev, className) {
    ev.preventDefault();
    toggleModal();

    const elModalContainer = document.querySelector('.modal-content');
    console.log('elModalContainer:', elModalContainer);
    const elContent = document.querySelector(`.${className}`);

    elModalContainer.innerHTML = /*html*/ `
    <article class="flex columns modal-article">
        ${elContent.innerHTML}
        <button class="close-modal-btn" onclick="toggleModal()">CLOSE</button>
    </article>`;

    elModalContainer.querySelector('article a').remove();
}

function toggleModal() {
    const elModal = document.querySelector('.modal');
    elModal.classList.toggle('modal-open');
}

// openModal({ preventDefault: () => {} }, 'a1');
