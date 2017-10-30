package g2financial.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2financial.domain.Apps;

@Repository
public interface AppsRepository extends CrudRepository<Apps, Long>{

}
