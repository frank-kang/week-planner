interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  notes: HTMLTextAreaElement;
}

interface FormObject {
  time: string;
  day: string;
  notes: string;
}

const $days = document.querySelector('.open-modal');
const $dialog = document.querySelector('dialog');
const $classCancelModal = document.querySelector('.cancel-modal');
const $classModalForm = document.querySelector(
  '#modal-form',
) as HTMLFormElement;

if (!$days) throw new Error('$days query failed');

$days.addEventListener('click', (event: Event): void => {
  $dialog.showModal();
});

$classCancelModal.addEventListener('click', () => {
  $dialog.close();
});

$classModalForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $classModalForm.elements as HTMLFormElement;
  const formObject: FormObject = {};
  formObject.day = $formElements.dat;
});
