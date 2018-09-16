package com.example.restapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restapi.basemodel.GenericRestController;
import com.example.restapi.fahrrad.Fahrrad;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/fahrraeder")
@CrossOrigin
@Api
public class FahrradController extends GenericRestController<Fahrrad> {

}