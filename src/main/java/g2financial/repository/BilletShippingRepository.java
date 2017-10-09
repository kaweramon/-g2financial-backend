package g2financial.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BilletShipping;

@Repository
public interface BilletShippingRepository extends CrudRepository<BilletShipping, Integer> {

	public BilletShipping findFirstByOrderByIdDesc();
	
	public List<BilletShipping> findByCounter(Integer counter);
	
}
