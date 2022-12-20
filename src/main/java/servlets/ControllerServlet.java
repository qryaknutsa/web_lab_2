package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("x") != null || request.getParameter("y") != null || request.getParameter("r") != null) {
            request.getRequestDispatcher("/AreaCheckServlet").forward(request, response);
        }
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
