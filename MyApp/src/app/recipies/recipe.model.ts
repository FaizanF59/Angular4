import { Component, OnInit } from '@angular/core';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, descp: string, image: string) {
        this.name = name;
        this.description = descp;
        this.imagePath = image;
    }
}