package g2financial.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.TypeInterestCharge;

@Repository
public interface TypeInterestChargeRepository extends CrudRepository<TypeInterestCharge, Integer> {

	public TypeInterestCharge findOneByType(String type);
}
