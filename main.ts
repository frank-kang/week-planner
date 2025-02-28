const $days = document.querySelector('.open-modal');
const $dialog = document.querySelector('dialog');
const $classCancelModal = document.querySelector('.cancel-modal');
const $data =

if (!$days) throw new Error('$days query failed');

$days.addEventListener('click', (event: Event): void => {
  $dialog.showModal();
});

$classCancelModal.addEventListener('click', () => {
  $dialog.close();
});
