<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Lab2</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js"></script>
</head>
<body>
<table>
    <thead>
    <tr>
        <th colspan="2" class="table">
            <div class="name">Батомункуева Виктория. P32101. вариант 1102 </div>
        </th>
    </tr>
    </thead>

    <tbody>
    <tr>
        <td colspan="2">
            <canvas id="graph" height="200" width="200"></canvas>
            <script src="js/drawer.js"></script>
        </td>
    </tr>


    <form id="form" method="post" action="${pageContext.request.contextPath}/ControllerServlet">
        <tr>
            <td class="table">
                <div class="what">X</div>
                <input type="checkbox" value="-5" id="x-5" class="x" name="x" onclick="put_x(id)">-5
                <input type="checkbox" value="-4" id="x-4" class="x" name="x" onclick="put_x(id)">-4
                <input type="checkbox" value="-3" id="x-3" class="x" name="x" onclick="put_x(id)">-3
                <input type="checkbox" value="-2" id="x-2" class="x" name="x" onclick="put_x(id)">-2
                <input type="checkbox" value="-1" id="x-1" class="x" name="x" onclick="put_x(id)">-1
                <input type="checkbox" value="0" id="x0" class="x" name="x" onclick="put_x(id)">0
                <input type="checkbox" value="1" id="x1" class="x" name="x" onclick="put_x(id)">1
                <input type="checkbox" value="2" id="x2" class="x" name="x" onclick="put_x(id)">2
                <input type="checkbox" value="3" id="x3" class="x" name="x" onclick="put_x(id)">3
            </td>
        </tr>

        <tr>
            <td class="table">
                <div>Y</div>
                <input type="text" id="y" name="y" placeholder="[-3;5]" oninput="validate(this)" onchange="put_y()">
            </td>
        </tr>

        <tr>
            <td class="table">
                <div>R</div>
                <input type="checkbox" value="1" id="r1" class="r" name="r" onclick="put_r(id)">1
                <input type="checkbox" value="2" id="r2" class="r" name="r" onclick="put_r(id)">2
                <input type="checkbox" value="3" id="r3" class="r" name="r" onclick="put_r(id)">3
                <input type="checkbox" value="4" id="r4" class="r" name="r" onclick="put_r(id)">4
                <input type="checkbox" value="5" id="r5" class="r" name="r" onclick="put_r(id)">5

            </td>
        </tr>
        <tr>
            <td>
                <input type="submit" id="send" value="Ввод">
            </td>
        </tr>
    </form>
    </tbody>
</table>

<div id="for_message">
    <p id="message"></p>
</div>

<script type="text/javascript" src="js/client.js"></script>
</body>
</html>