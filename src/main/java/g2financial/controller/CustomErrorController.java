package g2financial.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CustomErrorController implements ErrorController {
    
	@RequestMapping(value = "/error")
	public String error(HttpServletRequest request, HttpServletResponse response) {
		
		return "redirect:/";
	}
	
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return "/error";
	}
    
}
