var $days = document.querySelector('.open-modal');
var $dialog = document.querySelector('dialog');
var $classCancelModal = document.querySelector('.cancel-modal');
var $data = ;
if (!$days)
    throw new Error('$days query failed');
$days.addEventListener('click', function (event) {
    $dialog.showModal();
});
$classCancelModal.addEventListener('click', function () {
    $dialog.close();
});
