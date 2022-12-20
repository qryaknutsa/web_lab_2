<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Lab2-result</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
</head>
<body>
<table>
    <tr>
        <td>
            <button type="button" id="return" onclick="returning()">Вернуться</button>
        </td>
    </tr>
    <tr>
        <p id="errorMessage"></p>
        <td colspan="2">
            <table>
                <thead>
                <td>X</td>
                <td>Y</td>
                <td>R</td>
                <td>Результат</td>
                <td>Время проверки</td>
                <td>Время выполнения</td>
                </thead>

                <tbody id="result">
                ${data}
                </tbody>

            </table>
        </td>
    </tr>
    </tbody>
</table>
<script type="text/javascript" src="js/client.js"></script>
</body>
</html>
