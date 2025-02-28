var $days = document.querySelector('.open-modal');
var $dialog = document.querySelector('dialog');
if (!$days)
    throw new Error('$days query failed');
$days.addEventListener('click', function (event) {
    $dialog.showModal();
});
