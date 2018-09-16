package com.example.restapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapi.auto.Auto;
import com.example.restapi.basemodel.GenericRestController;

@RestController
@RequestMapping("/autos")
@CrossOrigin
public class AutoController extends GenericRestController<Auto> {

}
