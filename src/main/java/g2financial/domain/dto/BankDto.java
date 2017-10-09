package g2financial.domain.dto;

import org.springframework.beans.BeanUtils;

import g2financial.domain.Bank;
import lombok.Data;

@Data
public class BankDto {

	private Integer id;
	private String name;
	private Boolean isBillet;
	private Integer bankCode;
	private String transmissionCode;
	private String layoutInf;
	private String bankNameRem;
	private String assignorName;
	private Integer shippingNumber;
	private Integer sequencialNumber;
	private String agency;
	private String account;
	private Integer walletShippingNumber;
	private String complement;
	
	public static BankDto fromObject(Bank bank) {
		BankDto bankDto = new BankDto();
		BeanUtils.copyProperties(bank, bankDto);
		return bankDto;
	}
	
	public Bank toObject() {
		Bank bank = new Bank();
		BeanUtils.copyProperties(this, bank);
		return bank;
	}
	
}
