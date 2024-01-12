import { LightningElement, track } from 'lwc';

export default class WelcomePrivateProperty extends LightningElement {
    @track myDetails = { fname: "Yohann", lname:"Muller"};
    @track myTasks = ["Office", "Metting", "Bootcamp"];

    clickHandler(event){
        this.myDetails.fname = "Boss";
    }
    addTaskHandler(event){
        this.myTasks.push("Self Study");
    }
    refreshHandler(event){
        this.myDetails = {fname: "Yohann", lname: "Muller"};
        this.myTasks = [...this.myTasks, "Bootcamp"];
    }
}