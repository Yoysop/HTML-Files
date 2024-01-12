import { LightningElement, api, wire } from 'lwc';
import fetchLookupData from "@salesforce/apex/customLookupController.fetchLookupData";
import {ShowToastEvent} from "lightning/platformShowToastEvent";
const DELAY = 300;//milliseconds
export default class MultiCustomLookup extends LightningElement {
    searchKey;
    @api objectApiName = "Point de Collecte";
    @api label = "Point de Collecte";
    @api placeholder ="Search Point de Collecte";
    @api iconName = "standard:account";
    hasRecords = false;
    searchOutput = [];
    selectedRecords = [];
    delayTimeout;
    @wire(fetchLookupData,{
        searchKey : "$searchKey",
        objectApiName : "$objectApiName"
    }) 
    searchResult({data,error}){
        if(data){
            console,log(data)
            this.hasRecords = data.lengh > 0 ? true : false;
            this.searchOutput = data;
        }else if (error){
            console.log(error);
        }
    }
    changeHandler(event){
        clearTimeout(this.delayTimeout)
        let value = event.target.value;
       this.delayTimeout = setTimeout(()=> {
            this.searchKey = value;
        }, DELAY);
    }
    clickHandler(event){
        let recId = event.target.getAttribute("data-recid");
        console.log("recId", recId);
        if(this.validateDuplicate(recId)){
            let selectedRecord = this.searchOutput.find(
                (currItem) => currItem.Id === recId);
            let pill = {
                type: 'icon',
                label: selectedRecord.Name,
                name: recId,
                iconName: this,iconName,
                alternativeText: selectedRecord.Name,
            };
            this.selectedRecords = [...this.selectedRecords, pill];
        }
    }
    handleItemRemove(event){
        const index = event.detail.index;
        this.selectedRecords.splice(index, 1);
        }
    get showPillContainer(){
        return this.selectedRecords.length > 0 ? true : false;
    }
    validateDuplicate(selectedRecord){
        let isRecordAlreadySlected = this.selectedRecords.find(currItem => currItem.name === selectedRecord)
        if(isRecordAlreadySlected){
            isValid = false;
            this.dispatchEvent(new ShowToastEvent({
                title: "Error",
                message: "Vous avez déjà sélectionné ce Point",
                variant: "error"
            })
            );
        }else{
            isValid = true;
        }
        return isValid;
    }
}