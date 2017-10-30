package g2financial.domain.dto;

import org.springframework.beans.BeanUtils;

import g2financial.domain.TypeInterestCharge;
import lombok.Data;

@Data
public class TypeInterestChargeDto {

	private Integer id;
	private String type;
	private Double percentInterest;
	private Double percentLiveDays;
	private Double percentCharges;
	private Double interestValue;
	private Double liveDaysValue;
	
	public static TypeInterestChargeDto fromObject(TypeInterestCharge typeInterestCharge) {
		TypeInterestChargeDto typeInterestChargeDto = new TypeInterestChargeDto();
		BeanUtils.copyProperties(typeInterestCharge, typeInterestChargeDto);
		return typeInterestChargeDto;
	}
	
	public TypeInterestCharge toObject() {
		TypeInterestCharge typeInterestCharge = new TypeInterestCharge();
		BeanUtils.copyProperties(this, typeInterestCharge);
		return typeInterestCharge;
	}
}
