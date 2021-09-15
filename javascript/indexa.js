var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var myVar6;
var userunita ;
var ourunita ;
var userinputa ;



converta=()=>{



    if (userunita==ourunita) {
        document.getElementById('answerarea').innerHTML=userinputa;
    }

    if((userunita=="centimeter square")&&(ourunita=="millimeter square")){
        userinputa=userinputa*100;
        document.getElementById('answerarea').innerHTML=userinputa;
    }


    if((userunita=="centimeter square")&&(ourunita=="nanometer square")){
    userinputa=userinputa*1e+14;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="micrometer square")){
        userinputa=userinputa*1e+8;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="yard square")){
        userinputa=userinputa/(91.44*91.44);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="meter square")){
        userinputa=userinputa/10000;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="inch square")){
        userinputa=userinputa/(2.54*2.54);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="feet square")){
        userinputa=userinputa/(30.48*30.48);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="kilometer square")){
        userinputa=userinputa/10000000000;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="mile square")){
        userinputa=userinputa/2.59e+10;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
//centimeter square done
}

convertarea= ()=>{
    
    userunita = document.getElementById('unitarea1').value;
    ourunita = document.getElementById('unitarea2').value;
    userinputa = document.getElementById('userinparea').value;

    // clearInterval(myVar1);

   
    if (userunita==ourunita) {
        document.getElementById('answerarea').innerHTML=userinputa;
    }

    if((userunita=="centimeter square")&&(ourunita=="millimeter square")){
        userinputa=userinputa*100;
        document.getElementById('answerarea').innerHTML=userinputa;
    }


    if((userunita=="centimeter square")&&(ourunita=="nanometer square")){
    userinputa=userinputa*1e+14;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="micrometer square")){
        userinputa=userinputa*1e+8;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="yard square")){
        userinputa=userinputa/(91.44*91.44);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="meter square")){
        userinputa=userinputa/10000;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="inch square")){
        userinputa=userinputa/(2.54*2.54);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="feet square")){
        userinputa=userinputa/(30.48*30.48);
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="kilometer square")){
        userinputa=userinputa/10000000000;
        document.getElementById('answerarea').innerHTML=userinputa;
    }
    if((userunita=="centimeter square")&&(ourunita=="mile square")){
        userinputa=userinputa/2.59e+10;
        console.log("hiii buddy");
        document.getElementById('answerarea').innerHTML=userinputa;
    }
//centimeter square done


    if((userunita=="millimeter square")&&(ourunita!="millimeter square")){
        userinputa=userinputa/100;
        userunita="centimeter square";
        converta();
    }


//millimeter square done


    if((userunita=="meter square")&&(ourunita!="meter square")){
        userinputa=userinputa*10000;
        userunita="centimeter square";
        converta();
    }

    // meter done 

    if((userunita=="nanometer square")&&(ourunita!="nanometer square")){
        userinputa=userinputa/(1e+7*1e+7);
        userunita="centimeter square";
        converta();
    }

    if((userunita=="micrometer square")&&(ourunita!="micrometer square")){
        userinputa=userinputa/100000000;
        userunita="centimeter square";
        converta();
    }

    if((userunita=="yard square")&&(ourunita!="yard square")){
        userinputa=userinputa*91.44*91.44;
        userunita="centimeter square";
        converta();
    }

    // yard square done 


    if((userunita=="inch square")&&(ourunita!="inch square")){
        userinputa=userinputa*2.54*2.54;
        userunita="centimeter square";
        converta();
    }

    // inch square done 


    if((userunita=="feet square")&&(ourunita!="feet square")){
        userinputa=userinputa*30.48*30.48;
        userunita="centimeter square";
        converta();
    }

    // feet square done 


    if((userunita=="kilometer square")&&(ourunita!="kilometer square")){
        userinputa=userinputa*10000000000;
        userunita="centimeter square";
        converta();
    }

    // kilometer square done 


    if((userunita=="mile square")&&(ourunita!="mile square")){
        userinputa=userinputa*160934*160934;
        userunita="centimeter square";
        converta();
    }

}

