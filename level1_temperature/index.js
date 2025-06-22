function temperatureconvert(){
    const temp=parseFloat(document.getElementById('temperature').value);
    const con=document.getElementById("fromto").value;
    let result="";
    if(isNaN(temp)){
        document.getElementById('result').textContent="Enter a valid num";
    }
    else if(con=="ctoF"){
        result=`${temp}C=${(temp*(9/5) + 32).toFixed(2)}F`;  
    }
    else{
        result=`${temp}F=${((temp-32)*5/9).toFixed(2)}C`
    }
    document.getElementById('result').textContent=result;
}