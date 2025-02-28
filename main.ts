interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  notes: HTMLTextAreaElement;
}

interface FormObject {
  time?: string;
  day?: string;
  notes?: string;
}

const $days = document.querySelector('.open-modal');
const $dialog = document.querySelector('dialog');
const $classCancelModal = document.querySelector('.cancel-modal');
const $classModalForm = document.querySelector(
  '#modal-form',
) as HTMLFormElement;

const $classConfirm = document.querySelector('.confirm');

if (!$days) throw new Error('$days query failed');
if (!$classConfirm) throw new Error('$classConfirm query failed');

$days.addEventListener('click', (event: Event): void => {
  $dialog.showModal();
});

$classCancelModal.addEventListener('click', () => {
  $dialog.close();
});

$classModalForm.addEventListener('submit', (event: Event): object => {
  event.preventDefault();
  const $formElements = $classModalForm.elements as FormElements;
  const formObject: FormObject = {};
  formObject.day = $formElements.day.value;
  formObject.notes = $formElements.notes.value;
  formObject.time = $formElements.time.value;
  $dialog.close();
  return formObject;
  // console.log('formObject', formObject);
});

function renderElements(formObject: Object): HTMLTableElement {
  const edit = document.createElement('button');
  const deleteButton = document.createElement('button');

  const $classTr = document.createElement('tr');
  const $classTd = document.createElement('td');
  const $classTd2 = document.createElement('td');
  const $classTd3 = document.createElement('td');

  $classTr.appendChild('$classTd');
  $classTr.appendChild('$classTd2');
  $classTr.appendChild('$classTd3');
  $classTd3.appendChild('edit');
  $classTd3.appendChild('deleteButton');
}
