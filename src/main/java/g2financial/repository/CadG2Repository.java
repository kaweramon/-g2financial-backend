package g2financial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.CadG2;

@Repository
public interface CadG2Repository extends JpaRepository<CadG2, Integer> {

	public CadG2 findById(Integer id);
}
