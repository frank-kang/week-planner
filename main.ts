const $days = document.querySelector('.open-modal');
const $dialog = document.querySelector('dialog');

if (!$days) throw new Error('$days query failed');

$days.addEventListener('click', (event: Event): void => {
  $dialog.showModal();
  
});
