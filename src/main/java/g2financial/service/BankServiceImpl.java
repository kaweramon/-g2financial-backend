package g2financial.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2financial.domain.Bank;
import g2financial.generic.EventException;
import g2financial.repository.BankRepository;

@Service
public class BankServiceImpl implements BankService {

	@Autowired
	private BankRepository repository;
	
	public Bank findById(Integer bankId) throws EventException {
		Bank bank = repository.findOne(bankId);
		
		if (bank == null) {
			throw new EventException("Banco não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return bank;
	}

}
