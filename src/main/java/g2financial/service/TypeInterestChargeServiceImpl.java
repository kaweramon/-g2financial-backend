package g2financial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2financial.domain.TypeInterestCharge;
import g2financial.repository.TypeInterestChargeRepository;

@Service
public class TypeInterestChargeServiceImpl implements TypeInterestChargeService {

	@Autowired
	private TypeInterestChargeRepository repository;
	
	public TypeInterestCharge findByType(String type) {
		return repository.findOneByType(type);
	}

}
