import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberone = "";
    numbertwo = "";
    result = 0;

    changeHandlerNumberOne (event){
        //this.numberone = event.target.value;
        //console.log("this.numberone",this.numberone);
        let name =event.target.name;
        let value= event.target.value;

        if(name === "number1"){
            this.numberone = value;
        } else if (name === "number2"){
            this.numbertwo = value;
        }
    }
    changeHandlerNumberTwo (event){
        this.numbertwo = event.target.value;
        console.log("this.numbertwo",this.numbertwo);

    }

    calculateInput (){}
    addHandler(event) {
        this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
    }
    subHandler(event) {
        this.result = parseInt(this.numberone) - parseInt(this.numbertwo);

    }
    mulHandler(event) {
        this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
    }
    divHandler(event) {
        this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
    }
}