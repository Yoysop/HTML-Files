import { LightningElement,track } from 'lwc';

export default class WelcomeDecorators extends LightningElement {
    greeting ="Hello"
    @track welcome = "Yohann Muller";
    
    clickHandler(event){
        this.greeting = "Monsieur Muller";
        this.welcome = "Tu es le Best";
    }
}