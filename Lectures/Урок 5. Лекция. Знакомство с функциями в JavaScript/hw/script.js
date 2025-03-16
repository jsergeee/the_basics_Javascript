// alert('Hello, ScriptJS')

 // Получаем модальное окно
    var modal = document.getElementById("myModal");

    // Получаем элемент <span>, который закрывает модальное окно
    var span = document.getElementsByClassName("close")[0];

    // Функция для открытия модального окна с сообщением
    function showModal(message) {
        document.getElementById("modalMessage").innerText = message; // Устанавливаем текст сообщения
        modal.style.display = "block"; // Показываем модальное окно
    }

    // Когда пользователь нажимает на <span> (x), закрывается модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Когда пользователь нажимает в любом месте вне модального окна, оно закрывается
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Открываем модальное окно при загрузке страницы
    window.onload = function() {
        showModal("Это ваше сообщение при загрузке страницы!");
    }