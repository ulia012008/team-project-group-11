export function showSuccessModalWork() {
  const modal = document.getElementById('success-modal-work');
  modal.classList.remove('is-hidden-work');
  document.body.classList.add('modal-open-work');
}

export function closeModalWork() {
  const modal = document.getElementById('success-modal-work');
  modal.classList.add('is-hidden-work');
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
export function initEmailValidationWork() {
  const emailInput = document.getElementById('email-input-work');
  const errorMsg = document.getElementById('email-error-work');

  if (!emailInput || !errorMsg) return;

  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      emailInput.classList.remove('invalid');
      errorMsg.style.display = 'none';
    } else {
      emailInput.classList.add('invalid');
      errorMsg.style.display = 'block';
    }
  });
}
