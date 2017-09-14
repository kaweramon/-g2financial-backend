package g2financial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration;

//@SpringBootApplication(exclude = ErrorMvcAutoConfiguration.class)
@SpringBootApplication
public class AppG2Financial {
    public static void main( String[] args ) {
    	SpringApplication.run(AppG2Financial.class, args);
    }
}
