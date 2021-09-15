var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var myVar6;
var userunitv ;
var ourunitv ;
var userinputv ;



convertv=()=>{



    if (userunitv==ourunitv) {
        document.getElementById('answervolume').innerHTML=userinputv;
    }

    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic millimeter")){
        userinputv=userinputv*1000;
        document.getElementById('answervolume').innerHTML=userinputv;
    }


    if((userunitv=="cubic centimeter")&&(ourunitv=="liter")){
    userinputv=userinputv/1000;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="milliliter")){
        userinputv=userinputv*1;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic yard")){
        userinputv=userinputv/764555;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic meter")){
        userinputv=userinputv/1e+6;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic inch")){
        userinputv=userinputv/(16.387);
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic feet")){
        userinputv=userinputv/28317;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic kilometer")){
        userinputv=userinputv/1e+15;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic mile")){
        userinputv=userinputv/4.168e+15;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
//cubic centimeter done
}

convertvolume= ()=>{
    userunitv = document.getElementById('unitvolume1').value;
    ourunitv = document.getElementById('unitvolume2').value;
    userinputv = document.getElementById('userinpvolume').value;

    // clearInterval(myVar1);

    if (userunitv==ourunitv) {
        document.getElementById('answervolume').innerHTML=userinputv;
    }

    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic millimeter")){
        userinputv=userinputv*1000;
        document.getElementById('answervolume').innerHTML=userinputv;
    }


    if((userunitv=="cubic centimeter")&&(ourunitv=="liter")){
    userinputv=userinputv/1000;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="milliliter")){
        userinputv=userinputv*1;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic yard")){
        userinputv=userinputv/764555;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic meter")){
        userinputv=userinputv/1e+6;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic inch")){
        userinputv=userinputv/(16.387);
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic feet")){
        userinputv=userinputv/28317;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic kilometer")){
        userinputv=userinputv/1e+15;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
    if((userunitv=="cubic centimeter")&&(ourunitv=="cubic mile")){
        userinputv=userinputv/4.168e+15;
        document.getElementById('answervolume').innerHTML=userinputv;
    }
//cubic centimeter done


    if((userunitv=="cubic millimeter")&&(ourunitv!="cubic millimeter")){
        userinputv=userinputv/1000;
        userunitv="cubic centimeter";
        convertv();
    }


//cubic millimeter done


    if((userunitv=="cubic meter")&&(ourunitv!="cubic meter")){
        userinputv=userinputv*1e+6;
        userunitv="cubic centimeter";
        convertv();
    }

    // meter done 

    if((userunitv=="liter")&&(ourunitv!="liter")){
        userinputv=userinputv*1000;
        userunitv="cubic centimeter";
        convertv();
    }

    if((userunitv=="milliliter")&&(ourunitv!="milliliter")){
        userinputv=userinputv/1;
        userunitv="cubic centimeter";
        convertv();
    }

    if((userunitv=="cubic yard")&&(ourunitv!="cubic yard")){
        userinputv=userinputv*764555;
        userunitv="cubic centimeter";
        convertv();
    }

    // cubic yard done 


    if((userunitv=="cubic inch")&&(ourunitv!="cubic inch")){
        userinputv=userinputv*16.387;
        userunitv="cubic centimeter";
        convertv();
    }

    // cubic inch done 


    if((userunitv=="cubic feet")&&(ourunitv!="cubic feet")){
        userinputv=userinputv*28317;
        userunitv="cubic centimeter";
        convertv();
    }

    // cubic feet done 


    if((userunitv=="cubic kilometer")&&(ourunitv!="cubic kilometer")){
        userinputv=userinputv*1e+15;
        userunitv="cubic centimeter";
        convertv();
    }

    // kilocubic meter done 


    if((userunitv=="cubic mile")&&(ourunitv!="cubic mile")){
        userinputv=userinputv*4.168e+15;
        userunitv="cubic centimeter";
        convertv();
    }

}

