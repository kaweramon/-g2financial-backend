package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.BilletShippingDto;
import g2financial.service.BilletShippingService;

@Controller
@RequestMapping(path = "/billet-shipping")
public class BilletShippingController {

	@Autowired
	private BilletShippingService service;
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody BilletShippingDto create(@RequestBody BilletShippingDto billetShippingDto) {
		return BilletShippingDto.fromObject(service.create(billetShippingDto.toOject()));
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/{counter}")
	public @ResponseBody BilletShippingDto get(@RequestParam("counter") Integer counter) {
		return BilletShippingDto.fromObject(service.getByCounter(counter));
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/last")
	@ResponseBody
	public Integer getLastCount(){
		return service.getLast().getCounter();
	}
	
}
