package g2financial.domain.dto;

import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2financial.domain.BilletShipping;
import lombok.Data;

@Data
public class BilletShippingDto {

	private Integer id;	
	private Integer counter;
	private Date maturityDate;
	private Double billValue;
	private Date dischargeDate;
	private Double dischargeValue;
	private  Integer clientId;
	private String ourNumber;
	private Boolean isCancel;
	private String chargingType;
	private String partialPayment;
	private List<BillToPayPaymentDto> listBillToPayPayment;
	
	public static BilletShippingDto fromObject(BilletShipping billetShipping) {
		BilletShippingDto billetShippingDto = new BilletShippingDto();
		BeanUtils.copyProperties(billetShipping, billetShippingDto);
		if (billetShipping.getListBillToPayPayment() != null) {
			billetShippingDto.setListBillToPayPayment(BillToPayPaymentDto.fromObject(billetShipping.getListBillToPayPayment()));
		}
		return billetShippingDto;
	}
	
	public BilletShipping toOject() {
		BilletShipping billetShipping = new BilletShipping();
		BeanUtils.copyProperties(this, billetShipping);
		if (this.listBillToPayPayment != null) {
			billetShipping.setListBillToPayPayment(BillToPayPaymentDto.toObject(this.listBillToPayPayment));
		}
		return billetShipping;
	}
}
