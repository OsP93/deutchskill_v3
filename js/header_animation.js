window.onload = function () {
    let dialog1 = document.getElementById('dialog1');
    let dialog2 = document.getElementById('dialog2');
    let dialog3 = document.getElementById('dialog3');

    dialog1.classList.remove('hidden');
    dialog1.classList.add('fadeInRight');

    //dialog2.classList.add('fadeInLeft');
    //dialog3.classList.add('fadeInRight');
    setTimeout(function () {
        dialog2.classList.remove('hidden');
        dialog2.classList.add('fadeInLeft');
    }, 1500);

    setTimeout(function () {
        dialog3.classList.remove('hidden');
        dialog3.classList.add('fadeInRight');
    }, 2500);
};