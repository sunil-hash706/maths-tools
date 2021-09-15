var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var myVar6;




converttemperature = ()=>{
    // clearInterval(myVar2);
    var userunit = document.getElementById('unittemperature1').value;
    var ourunit = document.getElementById('unittemperature2').value;
    var userinput = document.getElementById('sk').value;

    if (userunit==ourunit) {
        document.getElementById('answertemperature').innerHTML=userinput;
    }

    if((userunit=="celsius")&&(ourunit=="kelvin")){
        userinput=userinput*1+273.15*1;
        document.getElementById('answertemperature').innerHTML=userinput;
    }
    if((userunit=="celsius")&&(ourunit=="fahrenheit")){
        userinput=(userinput*(9/5))*1+32*1;
        document.getElementById('answertemperature').innerHTML=userinput;
    }
    if((ourunit=="celsius")&&(userunit=="kelvin")){
        userinput=userinput*1-273.15*1;
        document.getElementById('answertemperature').innerHTML=userinput;
    }
    if((ourunit=="fahrenheit")&&(userunit=="kelvin")){
        userinput=(userinput*1-273.15)*(9/5)+32;
        document.getElementById('answertemperature').innerHTML=userinput;
    }

    if((userunit=="fahrenheit")&&(ourunit=="celsius")){
        userinput=(userinput*1-32)*(5/9);
        document.getElementById('answertemperature').innerHTML=userinput;
    }
    if((userunit=="fahrenheit")&&(ourunit=="kelvin")){
        userinput=(userinput*1-32)*(5/9)+273.15;
        document.getElementById('answertemperature').innerHTML=userinput;
    }
    // myVar1 = setInterval(converttemperature, 1000);
}


var userunitl ;
var ourunitl ;
var userinputl ;



convertcenti=()=>{



    if (userunitl==ourunitl) {
        document.getElementById('answerlength').innerHTML=userinputl;
    }

    if((userunitl=="centimeter")&&(ourunitl=="millimeter")){
        userinputl=userinputl*10;
        document.getElementById('answerlength').innerHTML=userinputl;
    }


    if((userunitl=="centimeter")&&(ourunitl=="nanometer")){
    userinputl=userinputl*10e-12;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="micrometer")){
        userinputl=userinputl*10e-9;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="yard")){
        userinputl=userinputl/91.44;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="meter")){
        userinputl=userinputl/100;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="inch")){
        userinputl=userinputl/2.54
        ;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="feet")){
        userinputl=userinputl/30.48;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="kilometer")){
        userinputl=userinputl/100000;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="mile")){
        userinputl=userinputl/160934;
        documentl.getElementById('answerlength').innerHTML=userinputl;
    }
//centimeter done
}

convertlength = ()=>{
    
    userunitl = document.getElementById('unitlength1').value;
    ourunitl = document.getElementById('unitlength2').value;
    userinputl = document.getElementById('userinplength').value;

    // clearInterval(myVar1);

   
    if (userunitl==ourunitl) {
        document.getElementById('answerlength').innerHTML=userinputl;
    }

    if((userunitl=="centimeter")&&(ourunitl=="millimeter")){
        userinputl=userinputl*10;
        document.getElementById('answerlength').innerHTML=userinputl;
    }


    if((userunitl=="centimeter")&&(ourunitl=="nanometer")){
    userinputl=userinputl*10e-12;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="micrometer")){
        userinputl=userinputl*10e-9;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="yard")){
        userinputl=userinputl/91.44;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="meter")){
        userinputl=userinputl/100;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="inch")){
        userinputl=userinputl/2.54
        ;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="feet")){
        userinputl=userinputl/30.48;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="kilometer")){
        userinputl=userinputl/100000;
        document.getElementById('answerlength').innerHTML=userinputl;
    }
    if((userunitl=="centimeter")&&(ourunitl=="mile")){
        userinputl=userinputl/160934;
        documentl.getElementById('answerlength').innerHTML=userinputl;
    }
//centimeter done


    if((userunitl=="millimeter")&&(ourunitl!="millimeter")){
        userinputl=userinputl/10;
        userunitl="centimeter";
        convertcenti();
    }


//millimeter done


    if((userunitl=="meter")&&(ourunitl!="meter")){
        userinputl=userinputl*100;
        userunitl="centimeter";
        convertcenti();
    }

    // meter done 

    if((userunitl=="nanometer")&&(ourunitl!="nanometer")){
        userinputl=userinputl/1e+7;
        userunitl="centimeter";
        convertcenti();
    }

    if((userunitl=="micrometer")&&(ourunitl!="micrometer")){
        userinputl=userinputl/10000;
        userunitl="centimeter";
        convertcenti();
    }

    if((userunitl=="yard")&&(ourunitl!="yard")){
        userinputl=userinputl*91.44;
        userunitl="centimeter";
        convertcenti();
    }

    // yard done 


    if((userunitl=="inch")&&(ourunitl!="inch")){
        userinputl=userinputl*2.54;
        userunitl="centimeter";
        convertcenti();
    }

    // inch done 


    if((userunitl=="feet")&&(ourunitl!="feet")){
        userinputl=userinputl*30.48;
        userunitl="centimeter";
        convertcenti();
    }

    // feet done 


    if((userunitl=="kilometer")&&(ourunitl!="kilometer")){
        userinputl=userinputl*100000;
        userunitl="centimeter";
        convertcenti();
    }

    // kilometer done 


    if((userunitl=="mile")&&(ourunitl!="mile")){
        userinputl=userinputl*160934
        ;
        userunitl="centimeter";
        convertcenti();
    }

}

