public with sharing class customLookupController {
    @AuraEnabled(cacheable=true)
    public static List<sObject> fetchLookupData (
        String searchKey, 
        String objectApiName
        ) {
        List<sObject> sObjectList = new List <sObject>();
        if (String.isBlank(searchKey)){
            return sObjectList;
        }else{
            String key = '%' + searchKey + '%';
            String query = 'Select Id,Name from' + objectApiName + 'where name like:key order by Name limit 5';
            sObjectList = Database.query(query,AccessLevel.USER_MODE);
            return sObjectList;
        }
    }
}