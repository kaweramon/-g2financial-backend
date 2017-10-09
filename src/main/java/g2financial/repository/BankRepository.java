package g2financial.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.Bank;

@Repository
public interface BankRepository extends CrudRepository<Bank, Integer> {

	public Bank findByName(String name);
	
}
