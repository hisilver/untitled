function myFunction() {



     var stringValue="helloworldo";
    var count=0;
    var tempString=stringValue;
    var tempLength=0;
    for(var i=0;i<3;i++){
        tempString=tempString.substr(tempLength);
        tempLength=tempString.indexOf("o")+1;
        count+=tempLength;
        document.write("nowString:"+tempString);
        document.write("<br/>");
        document.write("nowLength:"+tempLength);
        document.write("<br/>");
    }
    document.write(count);
    document.write("<br/>");

    /*******************/
    var stringA="hello world nihao";
    var positions=new Array();
    var pos=stringA.indexOf("o");
    while(pos>-1){
        positions.push(pos);
        pos=stringA.indexOf("o",pos+1);
    }
    document.write(positions);


        /*
         tempLength=tempString.indexOf("o")+1;
         count+=tempLength;
         document.write(tempString);
         document.write(tempLength);
*/

/*
        tempString=tempString.substr(tempLength);
        tempLength=tempString.indexOf("o")+1;
        document.write(tempString);
        document.write(tempLength);
*/
/*
     var firstLength=stringValue.indexOf("o");
     document.write("stringValue:"+stringValue);
    document.write("<br/>");
     document.write("firstLengh:"+(firstLength+1));
    document.write("<br/>");

    var secondString=stringValue.substr(firstLength+1);
     var secondLength=secondString.indexOf("o");
    document.write("secondString:"+secondString);
    document.write("<br/>");
     document.write("secondeLength:"+(secondLength+1));

     var thirdString=secondString.substr(secondLength+1);
    var thirdLength=thirdString.indexOf("o");
    document.write("<br/>");
    document.write("thirdString:"+thirdString);
    document.write("<br/>");
    document.write("thirdLength:"+(thirdLength+1));
     //document.write("<br/>");
    document.write("<br/>");

    var thirdONum=firstLength+secondLength+thirdLength+3;
     document.write("thirdONumis:"+thirdONum);

*/

}
