package g2financial.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2financial.domain.BilletShipping;
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

	public BilletShipping getByCounter(Integer counter) {
		return repository.findByCounter(counter);
	}
	
	
}
