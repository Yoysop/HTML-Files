import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    //to make it public use the decorator
    @api display;//smallcase
    @api displayGreeting; //camelCase
    @api user;
    @api isUserAvailable = false;//declare boolean
}