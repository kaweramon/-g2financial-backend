package g2financial.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.CieloPayment;

@Repository
public interface CieloPaymentRepository extends CrudRepository<CieloPayment, Integer> {

}
