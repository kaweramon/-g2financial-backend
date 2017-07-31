package g2financial.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.BillToPayAmountsPaid;
import g2financial.generic.EventException;
import g2financial.repository.BillToPayAmountsPaidRepository;

@Service
public class BillToPayAmountsPaidServiceImpl implements BillToPayAmountsPaidService {

	@Autowired
	private BillToPayAmountsPaidRepository repository;
	
	public List<BillToPayAmountsPaid> list() {
		return (List<BillToPayAmountsPaid>) repository.findAll();
	}

	public BillToPayAmountsPaid create(BillToPayAmountsPaid billToPayAmountsPaid) {
		return repository.save(billToPayAmountsPaid);
	}

	public BillToPayAmountsPaid update(Integer billToPayAmountsPaidId, BillToPayAmountsPaid billToPayAmountsPaid)
			throws EventException {

		BillToPayAmountsPaid billToPayAmountsPaidBD = repository.findOne(billToPayAmountsPaidId);
		
		if (billToPayAmountsPaidBD == null) {
			throw new EventException("Conta a receber valor pago não encontrada!", HttpStatus.NOT_FOUND);
		}
		
		billToPayAmountsPaidBD.setAmount(billToPayAmountsPaid.getAmount());
		billToPayAmountsPaidBD.setOperator(billToPayAmountsPaid.getOperator());
		billToPayAmountsPaidBD.setObservation(billToPayAmountsPaid.getObservation());
		
		return repository.save(billToPayAmountsPaidBD);
	}

	public List<BillToPayAmountsPaid> saveAll(List<BillToPayAmountsPaid> listBillToPayAmountsPaid) {
		return (List<BillToPayAmountsPaid>) repository.save(listBillToPayAmountsPaid);
	}

	
}
