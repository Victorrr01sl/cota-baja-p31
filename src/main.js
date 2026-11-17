import './styles/main.scss';

const form = document.querySelector('.booking-form');

if (form) {
  const status = form.querySelector('[role="status"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Datos validados. Esta es una demostración y no se ha reservado ninguna plaza.';
  });

  form.addEventListener('input', () => {
    status.textContent = '';
  });

  form.querySelector('[type="submit"]').disabled = false;
}
