package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.dto.TypeInterestChargeDto;
import g2financial.service.TypeInterestChargeService;

@Controller
@RequestMapping(path = "/type-interest")
public class TypeInterestChargeController {

	@Autowired
	private TypeInterestChargeService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody TypeInterestChargeDto getByType(@RequestParam("type") String type){
		return TypeInterestChargeDto.fromObject(service.findByType(type));
	}
}
