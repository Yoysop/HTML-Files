function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    
    console.log("inputdate",inputdate);//string --> date(es_ES)
    let formattedDate = new Date(inputdate.value).toLocaleDateString("es_ES");
    outputdate.value = formattedDate;
}
