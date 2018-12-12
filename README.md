# Angular 5/6/7

# CLI Commands

# Install Commands

    * sudo npm i -g @angular/cli@latest
    * npm i --save package  => to save as a production dependency

# Generation commands

    * ng new my-new-app
    * ng g c my-component / ng generate component parent-folder/my-component

# Running App

    * ng serve => localhost:4200/

# Setting Up Bootstrap

    - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/9118764?start=0

# TypeScript

    - https://www.typescriptlang.org/docs/handbook/basic-types.html

# Angular Start up steps

    1. main.ts gets loaded
    2. platformBrowserDynamic().bootstrapModule(AppModule) in main.ts gets loaded
    3. src/app.module gets loaded and all related files to it.

# Decorators

    - @Component, @Directive

# Components

    - @Componene({selector, templateUrl/template, Styleurls, })
    - need to add under "declarations" section of the parent component
    - multiple way's to use selector's instead of <app-root></app-root>, <div app-root> </div>, <div class="app-root"> Section 2, 21 lecture
    -

# Templates

    - methods also can be called in templates => {{ getMethodName() }}
    - {{ allowServer }} => <p [innerText]="allowServer"></p> setting the innerText property

# String Interpolation

    - assiging value from component property to template
    - <p [innerText]="allowServer"></p>
    - [property] = "data" => <button [disabled]="allowServer">
    - {{ getMethodName() }}
    - {{ allowServer }}

# Data Binding

    - One Way
        - from component to template
            - String interpolation {{ data }}
            - Property Binding [property] = "data" => <button [disabled]="allowServer">, in component => allowServer: boolean = true
            -  <img  [src]="recipe.imagePath" alt="{{ recipe.name }}"> => propery binding
            -  <img  src= {{recipe.imagePath}} alt="{{ recipe.name }}">

        - from template to component
            - Event Binding (event) = "expression" => (click) = "method()"

    - Two way Binding
        - [(ngModel)] = "data"
        - to enable two-way binding => https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655876?start=0

# Events

    - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655990?start=0
    - onClick => (click) = "method()", (input) = "method()"
    - passing data emmited by the event using $event => (click) = "method($event)" (28, section 2)
    - in component method(event: Event) { (<HTMLInputElement>event.target).value }

# Directives

    - Instructions in the DOM
    - Components are directives with a template

    - Inbuilt Directive's
        - Structural Directive -> it changes the dom
            - *ngIf => <p *ngIf="component-property/method()/inline statement"> (ifelse section 2, 34)
            - *ngFor => <app-server *ngFor="let server of servers"></app-server>
            - *ngFor with index => <li *ngFor="let detail of details; let i = index">

        - Attribute Directives => only change the element they were placed on
            - ngStyle => <p [ngStyle]="{'backgroundColor': getColor()}">
            - ngClass => <p [ngStyle]="{'backgroundColor': getColor()}"
                            [ngClass]="{online: serverStatus === 'online'}"  > (online will be the class)

    - Custom Directive
        - @Directive({selector})

# Creating Model File (our Convinence)

    - Blueprint for objects we create
    - export class Ingredient {
        constructor(public name: string, public amount: number){
            }
        }
    - export class Ingredient {
        public name: String,
        public amount: number,

        constructor(name: string, amount: number){
              this.name = name;
              this.amount = amount;
            }
        }

# CookBook

    - Images
      -  <img  [src]="recipe.imagePath" alt="{{ recipe.name }}"> => propery binding
      -  <img  src= {{recipe.imagePath}} alt="{{ recipe.name }}">
