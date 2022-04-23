package com.example.demo;

import com.example.demo.controller.RouteController;
import com.example.demo.controller.SmartCardController;
import com.example.demo.model.Payment;
import com.example.demo.model.Receipt;
import com.example.demo.model.Route;
import com.example.demo.model.SmartCard;
import com.example.demo.repository.IPaymentRepository;
import com.example.demo.service.PaymentService;
import java.util.List;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@RunWith(SpringRunner.class)
@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class PaymentTest {
	@Autowired
	RouteController routeController;
	
	@Autowired
	SmartCardController smartCardController;
	
	@Autowired
	IPaymentRepository paymentRepository;
	
	@Autowired
	PaymentService paymentService;

	@Test
	@Order(1)
	void addPayment() {
		Payment payment = new Payment();
		payment.setCardId(100);
		payment.setPaymentAmount(1000);
		Payment obj=paymentService.addPayment(payment);
		assertNotNull(paymentRepository.findById(obj.getPaymentId()));
	}

	@Test
	@Order(2)
	void getPayment() {
		List<Payment> paymentList = paymentService.getAllPayments();
		assertThat(paymentList).size().isGreaterThan(0);
	}

	@Test
	@Order(3)
	void deletePayment() {
		List<Payment> paymentList = paymentRepository.findAll();
		Payment payment = null;
		for(Payment p : paymentList) {
			if(p.getCardId() == 100) {
				payment = p;
				break;
			}
		}
		paymentRepository.deleteById(payment.getPaymentId());
		assertThat(paymentRepository.existsById(payment.getPaymentId())).isEqualTo(false);
	}

	//Check Valid Route ID
	@Test
	@Order(4)
	void checkRouteID() {
		Route route = routeController.getRouteDetails(177);
		boolean res = route == null ? false : true;
		assertEquals(true,res);
	}

	//Check Invalid Route ID
	@Test
	@Order(5)
	void checkRouteID2() {
		Route route = routeController.getRouteDetails(190);
		boolean res = route == null ? false : true;
		assertEquals(false,res);
	}
	//Check Invalid Route ID
	@Test
	@Order(6)
	void checkInvalidRouteID() {
		Route route = routeController.getRouteDetails(190);
		boolean res = route == null ? false : true;
		assertNotEquals(true,res);
	}

	//Check Valid SmartCard ID
	@Test
	@Order(7)
	void checkSmartCardID() {
		SmartCard card = smartCardController.cardDetails(1);
		boolean res = card == null ? false : true;
		assertEquals(true,res);
	}
	//Check invalid SmartCard ID
	@Test
	@Order(8)
	void checkInvalidSmartCardID() {
		SmartCard card = smartCardController.cardDetails(200);
		boolean res = card == null ? false : true;
		assertEquals(false,res);
	}
	//Check invalid SmartCard ID
	@Test
	@Order(9)
	void checkInvalidSmartCardID2() {
		SmartCard card = smartCardController.cardDetails(300);
		boolean res = card == null ? false : true;
		assertNotEquals(true,res);
	}

	//Get Receipt for Valid Route ID
	@Test
	@Order(10)
	void getReceipt() {
		Receipt receipt = routeController.getReceipt(178);
		boolean res = receipt == null ? false : true;
		assertEquals(true,res);
	}


}
