package g2financial.domain.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2financial.domain.BillToPay;
import lombok.Data;

@Data
public class BillToPayDto {

	private Integer id;
	private String clientName;
	private String description;
	private String observation;
	private String type;
	private Boolean isCredit;
	private Boolean isCancel;
	private Integer clientId;
	private List<BillToPayPaymentDto> listBillToPayPayment;
	
	public static BillToPayDto fromObject(BillToPay billToPay) {
		BillToPayDto billToPayDto = new BillToPayDto();
		BeanUtils.copyProperties(billToPay, billToPayDto);
		if (billToPay.getListBillToPayPayment() != null) {
			billToPayDto.setListBillToPayPayment(BillToPayPaymentDto.fromObject(billToPay.getListBillToPayPayment()));
		}
		return billToPayDto;
	}
	
	public static List<BillToPayDto> fromObject(List<BillToPay> listBillToPay) {
		List<BillToPayDto> listBillToPayDto = new ArrayList<BillToPayDto>();
		for (BillToPay billToPay: listBillToPay) {
			listBillToPayDto.add(BillToPayDto.fromObject(billToPay));
		}
		return listBillToPayDto;
	}
	
}
