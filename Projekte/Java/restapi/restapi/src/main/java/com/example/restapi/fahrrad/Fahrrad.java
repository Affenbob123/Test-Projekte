package com.example.restapi.fahrrad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import com.example.restapi.basemodel.BaseModel;

@Entity
public class Fahrrad extends BaseModel{

	private static final long serialVersionUID = -3307119560565494333L;

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO, generator="native")
	@GenericGenerator(name = "native", strategy = "native")
	private long id;
	
	private String bezeichnung;
	
	public Fahrrad() {
		
	}
	
	public Fahrrad(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBezeichnung() {
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}
}
