package g2financial.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BillToPay;

@Repository
public interface BillToPayRepository extends CrudRepository<BillToPay, Integer> {

	public List<BillToPay> findAllByClientId(Integer clientId);
	
}
