package com.example.restapi.basemodel;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BaseModelRepository<T extends BaseModel> extends JpaRepository<T, Serializable> {

}
