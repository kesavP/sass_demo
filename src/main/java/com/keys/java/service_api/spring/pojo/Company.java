package com.keys.java.service_api.spring.pojo;

public class Company {

	public String bldgNo;
	public String streetNo;
	public String city;
	
	public String getBldgNo() {
		return bldgNo;
	}
	public void setBldgNo(String bldgNo) {
		this.bldgNo = bldgNo;
	}
	public String getStreetNo() {
		return streetNo;
	}
	public void setStreetNo(String streetNo) {
		this.streetNo = streetNo;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Override
	public String toString() {
		return "---------------------------------------------------------------------------"
				+ "  Company [bldgNo=" + bldgNo + ", streetNo=" + streetNo + ", city=" + city + "]";
	}
	
	
}
