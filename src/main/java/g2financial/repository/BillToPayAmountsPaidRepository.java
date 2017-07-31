package g2financial.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.BillToPayAmountsPaid;

@Repository
public interface BillToPayAmountsPaidRepository extends CrudRepository<BillToPayAmountsPaid, Integer> {

}
