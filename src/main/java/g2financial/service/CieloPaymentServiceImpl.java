package g2financial.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2financial.domain.CieloPayment;
import g2financial.repository.CieloPaymentRepository;

@Service
public class CieloPaymentServiceImpl implements CieloPaymentService {

	@Autowired
	public CieloPaymentRepository repository;
	
	public CieloPayment create(CieloPayment cieloPayment) {
		cieloPayment.setReceivedDate(new Date());
		return repository.save(cieloPayment);
	}

	public Integer getCountOrderId() {
		CieloPayment lastCieloPayment = repository.findByFirstDesc();
		if (lastCieloPayment == null) {
			return 0;
		} else {
			return lastCieloPayment.getCountOrderId();
		}
	}

}
