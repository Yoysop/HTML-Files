public with sharing class ProcessSelectedPtCollects {
    public ProcessSelectedPtCollects() {

    }
    @InvocableMethod(label='Existing Sites' description= 'Processing Existing Sites' category='Opportunity')
    public static List <Results> prepareList(List<Requests> requestList){
        List <String> SiteIdList = new List<String>();
        List<Results> responsewrapper= new List<Results>();
        if(requestList.size()>0 && requestList[0].opportunityRecord!=null && requestList[0].opportunityRecord.Selected_Sites_Ids__c!=null){
            String existingSiteIds = requestList[0].opportunityRecord.Selected_Sites_Ids__c;
            existingSiteIds = existingSiteIds.removeEnd(',');
            SiteIdList.addAll(existingSiteIds.split(','));
            Results response = new Results();

            response.existingSiteIds = SiteIdList;
            responsewrapper.add(response);
        }
        return responsewrapper;
    }

    public class Requests {
        @InvocableVariable(label='Record for Input' description='yourdescription')
        public Opportunity opportunityRecord;
    }
    public class Results {
        @InvocableVariable(label='Record for Output' description='yourdescription')
        public List<String> existingSiteIds;
    }
 }