// add listener 'onclick' on all ellements with s-btn class (Пізніше переробити на делегування)

const buttons = document.querySelectorAll(".s-btn");
const closeBtn = document.querySelector(".close-form")

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        console.log(document.querySelector(".wrapper"));
        document.querySelector(".wrapper").classList.add('hidden-d');
        document.querySelector(".wrapper-form").classList.remove('hidden-d');
    };
}

closeBtn.addEventListener('click', function () {
    document.querySelector(".wrapper-form").classList.add('hidden-d');
    document.querySelector(".wrapper").classList.remove('hidden-d');
})


document.getElementById('submit-btn').addEventListener('click', function () {
    console.log('hello!')
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо стандартну подію відправки форми

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_mail.php", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Ваш код, який виконується після успішної відправки
                    alert("Повідомлення відправлено успішно!");
                } else {
                    // Ваш код, який виконується в разі помилки
                    alert("Виникла помилка під час відправки повідомлення.");
                }
            }
        };
        xhr.send(formData);
    });

    function clearForm() {
        var inputs = form.getElementsByTagName("input");
        var textarea = form.getElementsByTagName("textarea")[0];

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = ""; // Очищаємо значення полів вводу
        }

        if (textarea) {
            textarea.value = ""; // Очищаємо значення текстового поля
        }
    };

    document.querySelector(".wrapper-form").classList.add('hidden-d');
    document.querySelector(".wrapper").classList.remove('hidden-d');
});