package g2financial.service;

import g2financial.domain.Bank;
import g2financial.generic.EventException;

public interface BankService {

	public Bank findById(Integer bankId) throws EventException;
}
