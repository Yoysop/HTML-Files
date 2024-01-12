import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    //if no decorator then greeting is a private property
    greeting = "Welcome from child Component";
    userdetails = {
        firstname: "Yohann",
        lastname: "Muller",
        channel: "Tech Bootcamp"
    };
}