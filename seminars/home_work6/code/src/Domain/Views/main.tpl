<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ cssPath }}"> <!-- Подключение стилей -->
    <link href="code/src/Views/style.css" rel="stylesheet">

    <title>{{ title }}</title>
</head>
<body>
    <header>
        <h1>Шапка сайта</h1>
        <nav>
            <a href="/">Главная</a>
            <a href="/user">Пользователи</a>
        </nav>
    </header>

    <main>
        {% include content_template_name %}
    </main>

</body>
</html>
