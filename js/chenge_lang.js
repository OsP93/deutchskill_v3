/*
window.onload = function () {
    // add to url selected lang.
    const select = document.querySelectorAll('select')[0];
    const mobileSelect = document.querySelectorAll('select')[1];
    const allLang = ['ru', 'ua', 'de']


    select.addEventListener('change', changeURLAdress);
    mobileSelect.addEventListener('change', changeURLAdressPhone);
    //select.forEach((changeLng) => changeLng.addEventListener('change', changeURLAdress));
    function changeURLAdress() {
        let lang = select.value;
        location.href = window.location.pathname + '#' + lang;
        console.log(lang);
        changeLanguage();
        //location.reload();
    };
    changeURLAdress();//test

    function changeURLAdressPhone() {
        let langPhone = mobileSelect.value;
        location.href = window.location.pathname + '#' + langPhone;
        console.log(langPhone);
        changeLanguagePhone();
        //location.reload();
    };
    changeURLAdressPhone();//test


    // change language
    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.substring(1);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#ru';
            //location.reload();
        }

        select.value = hash;
        //document.querySelector('.header-description').innerHTML = langArr['head'][hash];
        for (let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                elem.innerHTML = langArr[key][hash];
            }
        }
    };

    function changeLanguagePhone() {
        let hash = window.location.hash;
        hash = hash.substring(1);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#ru';
        }

        mobileSelect.value = hash;
        for (let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                elem.innerHTML = langArr[key][hash];
            }
        }
   
    };

    changeLanguage();
    changeURLAdressPhone();
    location.reload();//test
};
*/

// add to url selected lang.
    const select = document.querySelectorAll('select')[0];
    const mobileSelect = document.querySelectorAll('select')[1];
    const allLang = ['ru', 'ua', 'de']


    select.addEventListener('change', changeURLAdress);
    mobileSelect.addEventListener('change', changeURLAdressPhone);
    //select.forEach((changeLng) => changeLng.addEventListener('change', changeURLAdress));
    function changeURLAdress() {
        let lang = select.value;
        location.href = window.location.pathname + '#' + lang;
        console.log(lang);
        changeLanguage();
        //location.reload();
    };
    changeURLAdress();//test

    function changeURLAdressPhone() {
        let langPhone = mobileSelect.value;
        location.href = window.location.pathname + '#' + langPhone;
        console.log(langPhone);
        changeLanguagePhone();
        //location.reload();
    };
    changeURLAdressPhone();//test


    // change language
    function changeLanguage() {
        let hash = window.location.hash;
        hash = hash.substring(1);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#ru';
            //location.reload();
        }

        select.value = hash;
        //document.querySelector('.header-description').innerHTML = langArr['head'][hash];
        for (let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                elem.innerHTML = langArr[key][hash];
            }
        }
    };

    function changeLanguagePhone() {
        let hash = window.location.hash;
        hash = hash.substring(1);
        if (!allLang.includes(hash)) {
            location.href = window.location.pathname + '#ru';
        }

        mobileSelect.value = hash;
        for (let key in langArr) {
            let elem = document.querySelector('.lng-' + key);
            if (elem) {
                elem.innerHTML = langArr[key][hash];
            }
        }
   
    };

    changeLanguage();
    changeURLAdressPhone();
