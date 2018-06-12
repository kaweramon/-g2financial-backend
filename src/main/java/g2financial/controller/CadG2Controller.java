package g2financial.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import g2financial.domain.CadG2;
import g2financial.repository.CadG2Repository;

@RestController
@RequestMapping(path = "/cad-g2")
public class CadG2Controller {

	@Autowired
	private CadG2Repository repository;
	
	@GetMapping("/{id}")
	@ResponseBody
	public CadG2 findById(@PathVariable Integer id) {
		return repository.findById(id);
	}
}
