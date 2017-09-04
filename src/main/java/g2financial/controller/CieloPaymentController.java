package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.CieloPaymentDto;
import g2financial.service.CieloPaymentService;

@Controller
@RequestMapping(path = "/cielo-payment")
public class CieloPaymentController {

	@Autowired
	private CieloPaymentService service;
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody CieloPaymentDto create(@RequestBody CieloPaymentDto cieloPaymentDto, @RequestParam Boolean isForSale) {
		cieloPaymentDto.setForSale(isForSale);
		return CieloPaymentDto.fromObject(service.create(cieloPaymentDto.toObject())); 
	}
	
}
