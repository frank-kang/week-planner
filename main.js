var $days = document.querySelector('.open-modal');
var $dialog = document.querySelector('dialog');
var $classCancelModal = document.querySelector('.cancel-modal');
var $classModalForm = document.querySelector('#modal-form');
var $classConfirm = document.querySelector('.confirm');
if (!$days)
    throw new Error('$days query failed');
if (!$classConfirm)
    throw new Error('$classConfirm query failed');
$days.addEventListener('click', function () {
    $dialog.showModal();
});
$classCancelModal.addEventListener('click', function () {
    $dialog.close();
});
$classModalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var $formElements = $classModalForm.elements;
    var formObject = {
        day: $formElements.day.value,
        notes: $formElements.notes.value,
        time: $formElements.time.value,
    };
    data.entries.push(formObject);
    console.log(data);
    writeData();
    // renderElement(data);
    $dialog.close();
    // console.log('formObject', formObject);
});
function renderElement(entry) {
    var edit = document.createElement('button');
    var deleteButton = document.createElement('button');
    var $classTr = document.createElement('tr');
    var $classTd = document.createElement('td');
    var $classTd2 = document.createElement('td');
    var $classTd3 = document.createElement('td');
    $classTd.textContent = entry.time;
    $classTd2.textContent = entry.notes;
    $classTr.appendChild($classTd);
    $classTr.appendChild($classTd2);
    $classTr.appendChild($classTd3);
    $classTd3.appendChild(edit);
    $classTd3.appendChild(deleteButton);
    return $classTr;
}
document.addEventListener('DOMContentLoaded', function () {
    for (var _i = 0, _a = data.entries; _i < _a.length; _i++) {
        var i = _a[_i];
        var entry = i;
        var $td = renderElement(entry);
        var $tagTbody = document.querySelector('tbody');
        $tagTbody.appendChild($td);
    }
});
