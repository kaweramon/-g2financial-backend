package g2financial.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.Apps;
import g2financial.generic.EventException;
import g2financial.repository.AppsRepository;

@Service
public class AppsService {
	
	@Autowired
	private AppsRepository repository;

	public List<Apps> list() {
		return  (List<Apps>) repository.findAll();
	}
	
	public Apps getById(Long id){
		return (Apps) repository.findOne(id);
	}
	
	public Long save(Apps apps){
		apps.setData_add(new Date());
		Apps obj = null;
		obj = repository.save(apps);
		if (obj != null){ 
			return obj.getId();
		} else {
			return 0L;
		}
	}
	
	public Long update(Long id, Apps apps) throws EventException {
		Apps appsBD = repository.findOne(id);
		
		if (appsBD == null) {
			throw new EventException("App não encontrado", HttpStatus.NOT_FOUND);
		}
		
		appsBD.setNome(apps.getNome());
		appsBD.setVersao_atual(apps.getVersao_atual());
		appsBD.setVersao_up(apps.getVersao_up());
		appsBD.setLink_download(apps.getLink_download());
		
		repository.save(appsBD);
		
		return appsBD.getId();
	}
	
	public void delete(Long id){
		repository.delete(id);
	}
	
	public List<Apps> finds(List<Long> ids) {
		return  (List<Apps>) repository.findAll(ids);
	}
	
	public List<Apps> finds2(List<Long> ids) {		
		return (List<Apps>) repository.findAll(ids);	
	}
	
}
