package g2financial.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.BilletShipping;
import g2financial.generic.EventException;
import g2financial.repository.BilletShippingRepository;

@Service
public class BilletShippingServiceImpl implements BilletShippingService {

	@Autowired
	private BilletShippingRepository repository;

	public BilletShipping create(BilletShipping billetShipping) {
		billetShipping.setMaturityDate(new Date());
		return repository.save(billetShipping);
	}

	public BilletShipping getLast() {
		return repository.findFirstByOrderByIdDesc();
	}

	public BilletShipping getById(Integer billetId) throws EventException {

		BilletShipping billetShipping = repository.findOne(billetId);
		
		if (billetShipping == null) {
			throw new EventException("Boleto não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return billetShipping;
	}
	
	
}
