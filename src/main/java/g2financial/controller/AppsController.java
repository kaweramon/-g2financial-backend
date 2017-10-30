package g2financial.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2financial.domain.Apps;
import g2financial.generic.EventException;
import g2financial.service.AppsService;

@Controller
@RequestMapping("apps")
public class AppsController {

	@Autowired
	private AppsService service; 
		
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Apps> list() {
		return new ArrayList<Apps>(service.list());
	}
	
	@RequestMapping("/{id}")
	public @ResponseBody Apps getById(@PathVariable Long id){
		return service.getById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody Long save(@RequestBody Apps disp) {
		return service.save(disp);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Long update(@RequestParam("id") Long id, @RequestBody Apps apps) throws EventException {
		return service.update(id, apps);
	}
	
	@RequestMapping(path="/delete/{id}",method=RequestMethod.GET)
	public @ResponseBody Long delete(@PathVariable Long id){
		try {
			service.delete(id);
			
		} catch (Exception e) {
			return 0l;
		}
		return id;
	}
	
}
