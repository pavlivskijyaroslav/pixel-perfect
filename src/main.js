document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    modal: document.querySelector('.modal'),
    closeBtn: document.querySelector('[data-close]'),
    openBtns: document.querySelectorAll('[data-open]'),
    output: document.getElementById('output'),
  };

  const oenFunc = open.bind(refs);

  refs.closeBtn.addEventListener('click', toggleModal.bind(refs));

  refs.openBtns.forEach(btn => {
    oenFunc(btn);
  });
});

function toggleModal() {
  this.modal.classList.toggle('open');
}

function open(btn) {
  btn.addEventListener('click', () => {
    if (btn.dataset.value) {
      this.output.innerText = btn.dataset.value;
    }
    this.modal.classList.toggle('open');
  });
}
