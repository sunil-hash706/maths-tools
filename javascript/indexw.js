var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var myVar6;
var userunitw ;
var ourunitw ;
var userinputw ;



convertw=()=>{



    if (userunitw==ourunitw) {
        document.getElementById('answerweight').innerHTML=userinputw;
    }

    if((userunitw=="gram")&&(ourunitw=="milligram")){
        userinputw=userinputw*1000;
        document.getElementById('answerweight').innerHTML=userinputw;
    }


    if((userunitw=="gram")&&(ourunitw=="kilogram")){
    userinputw=userinputw/1000;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="ton")){
        userinputw=userinputw/907185;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="metric ton")){
        userinputw=userinputw/1e+6;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="pound")){
        userinputw=userinputw/454;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="atomic mass unit")){
        userinputw=userinputw*9.223e+18;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="long ton")){
        userinputw=userinputw/1.016e+6;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="short ton")){
        userinputw=userinputw/907185;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="carrat")){
        userinputw=userinputw*5;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
//gram done
}

convertweight= ()=>{
    userunitw = document.getElementById('unitweight1').value;
    ourunitw = document.getElementById('unitweight2').value;
    userinputw = document.getElementById('userinpweight').value;

    // clearInterval(myVar1);
    console.log(userunitw);
    console.log(ourunitw);

    if (userunitw==ourunitw) {
        document.getElementById('answerweight').innerHTML=userinputw;
    }

    if((userunitw=="gram")&&(ourunitw=="milligram")){
        userinputw=userinputw*1000;
        document.getElementById('answerweight').innerHTML=userinputw;
    }


    if((userunitw=="gram")&&(ourunitw=="kilogram")){
    userinputw=userinputw/1000;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="ton")){
        userinputw=userinputw/907185;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="metric ton")){
        userinputw=userinputw/1e+6;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="pound")){
        userinputw=userinputw/454;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="atomic mass unit")){
        userinputw=userinputw*9.223e+18;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="long ton")){
        userinputw=userinputw/1.016e+6;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="short ton")){
        userinputw=userinputw/907185;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
    if((userunitw=="gram")&&(ourunitw=="carrat")){
        userinputw=userinputw*5;
        document.getElementById('answerweight').innerHTML=userinputw;
    }
//gram done


    if((userunitw=="milligram")&&(ourunitw!="milligram")){
        userinputw=userinputw/1000;
        userunitw="gram";
        convertw();
    }


//milligram done


    if((userunitw=="pound")&&(ourunitw!="pound")){
        console.log("hoiiiiiiii");
        userinputw=userinputw*454;
        userunitw="gram";
        convertw();
    }

    // meter done 

    if((userunitw=="kilogram")&&(ourunitw!="kilogram")){
        userinputw=userinputw*1000;
        userunitw="gram";
        convertw();
    }

    if((userunitw=="ton")&&(ourunitw!="ton")){
        userinputw=userinputw*907185;
        userunitw="gram";
        convertw();
    }

    if((userunitw=="metric ton")&&(ourunitw!="metric ton")){
        userinputw=userinputw*1e+6;
        userunitw="gram";
        convertw();
    }

    // metric ton done 


    if((userunitw=="atomic mass unit")&&(ourunitw!="atomic mass unit")){
        userinputw=userinputw*1.660540199E-24;
        userunitw="gram";
        convertw();
    }

    // atomic mass unit done 


    if((userunitw=="long ton")&&(ourunitw!="long ton")){
        userinputw=userinputw*1.016e+6;
        userunitw="gram";
        convertw();
    }

    // long ton done 


    if((userunitw=="short ton")&&(ourunitw!="short ton")){
        userinputw=userinputw*907185;
        userunitw="gram";
        convertw();
    }

    // kilopound done 


    if((userunitw=="carrat")&&(ourunitw!="carrat")){
        userinputw=userinputw/5;
        userunitw="gram";
        convertw();
    }

}

