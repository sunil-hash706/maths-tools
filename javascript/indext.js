var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var myVar6;
var userunitt ;
var ourunitt ;
var userinputt ;



convertt=()=>{



    if (userunitt==ourunitt) {
        document.getElementById('answertime').innerHTML=userinputt;
    }

    if((userunitt=="seconds")&&(ourunitt=="milliseconds")){
    userinputt=userinputt*1000;
        document.getElementById('answertime').innerHTML=userinputt;
    }


    if((userunitt=="seconds")&&(ourunitt=="minutes")){
    userinputt=userinputt/60;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="nanoseconds")){
        userinputt=userinputt*1e+9;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="microseconds")){
        userinputt=userinputt*1e+6;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="hours")){
        userinputt=userinputt/3600;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="days")){
        userinputt=userinputt/86400;
        document.getElementById('answertime').innerHTML=userinputt;
    }
//seconds done
}

converttime= ()=>{
   
    userunitt = document.getElementById('unittime1').value;
    ourunitt = document.getElementById('unittime2').value;
    userinputt = document.getElementById('userinptime').value;

    // clearInterval(myVar1);

    if (userunitt==ourunitt) {
        document.getElementById('answertime').innerHTML=userinputt;
    }

    if((userunitt=="seconds")&&(ourunitt=="milliseconds")){
    userinputt=userinputt*1000;
        document.getElementById('answertime').innerHTML=userinputt;
    }


    if((userunitt=="seconds")&&(ourunitt=="minutes")){
    userinputt=userinputt/60;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="nanoseconds")){
        userinputt=userinputt*1e+9;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="microseconds")){
        userinputt=userinputt*1e+6;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="hours")){
        userinputt=userinputt/3600;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    if((userunitt=="seconds")&&(ourunitt=="days")){
        userinputt=userinputt/86400;
        document.getElementById('answertime').innerHTML=userinputt;
    }
    
//seconds done


    if((userunitt=="milliseconds")&&(ourunitt!="milliseconds")){
        userinputt=userinputt/1000;
        userunitt="seconds";
        convertt();
    }


//milliseconds done


    if((userunitt=="hours")&&(ourunitt!="hours")){
        userinputt=userinputt*3600;
        userunitt="seconds";
        convertt();
    }

    // meter done 

    if((userunitt=="minutes")&&(ourunitt!="minutes")){
        userinputt=userinputt*60;
        userunitt="seconds";
        convertt();
    }

    if((userunitt=="nanoseconds")&&(ourunitt!="nanoseconds")){
        userinputt=userinputt/1e+9;
        userunitt="seconds";
        convertt();
    }

    if((userunitt=="microseconds")&&(ourunitt!="microseconds")){
        userinputt=userinputt/1e+6;
        userunitt="seconds";
        convertt();
    }

    // microseconds done 


    if((userunitt=="days")&&(ourunitt!="days")){
        userinputt=userinputt*86400;
        userunitt="seconds";
        convertt();
    }

    // days done 
}

