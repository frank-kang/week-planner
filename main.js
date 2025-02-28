var $days = document.querySelector('.open-modal');
var $dialog = document.querySelector('dialog');
var $classCancelModal = document.querySelector('.cancel-modal');
var $classModalForm = document.querySelector('#modal-form');
var $classConfirm = document.querySelector('.confirm');
if (!$days)
    throw new Error('$days query failed');
if (!$classConfirm)
    throw new Error('$classConfirm query failed');
$days.addEventListener('click', function (event) {
    $dialog.showModal();
});
$classCancelModal.addEventListener('click', function () {
    $dialog.close();
});
$classModalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var $formElements = $classModalForm.elements;
    var formObject = {};
    formObject.day = $formElements.day.value;
    formObject.notes = $formElements.notes.value;
    formObject.time = $formElements.time.value;
    $dialog.close();
    return formObject;
    // console.log('formObject', formObject);
});
function renderElements(formObject) {
    var edit = document.createElement('button');
    var ;
    delete ;
    document.createElement('button');
    var $classTr = document.createElement('tr');
    var $classTd = document.createElement('td');
    var $classTd2 = document.createElement('td');
    var $classTd3 = document.createElement('td');
    $classTr.appendChild('$classTd');
    $classTr.appendChild('$classTd2');
    $classTr.appendChild('$classTd3');
    $classTd3.appendChild('edit');
    $classTd3.appendChild('delete');
}
