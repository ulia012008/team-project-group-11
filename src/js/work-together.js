export function showSuccessModalWork() {
  const modal = document.getElementById('success-modal-work');
  modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open-work');
}

export function closeModalWork() {
  const modal = document.getElementById('success-modal-work');
  modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open-work');
}

export function initModalHandlersWork() {
  const modal = document.getElementById('success-modal-work');
  const closeBtn = document.getElementById('close-modal-btn-work');

  closeBtn?.addEventListener('click', closeModalWork);

  modal?.addEventListener('click', e => {
    if (e.target === modal) closeModalWork();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalWork();
  });
}
