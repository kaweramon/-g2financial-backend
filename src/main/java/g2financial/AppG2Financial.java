package g2financial;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppG2Financial {
    public static void main( String[] args ) {
    	SpringApplication.run(AppG2Financial.class, args);
    }
    
    /*@PostConstruct
	void started() {
		TimeZone.setDefault(TimeZone.getTimeZone("Brazil/East"));
	}*/
    
}
