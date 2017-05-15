var grafteds,frees,ions;
var graftedTotals=[];
var graftedRemaining=[];
var freeTotals=[];
var freeRemaining=[];
var graftedCount=[];
var freeCount=[];
var graftedArray=[[]];
var freeArray=[[]];
var totalNom;
var xNumbers;//totalNotm


function ContactMe(){
	alert("zead29@outlook.com");}

function removeTable(id)
    {
        var tbl = document.getElementById(id);
        if(tbl) tbl.parentNode.removeChild(tbl);
    }
	
////////////////////////////Validation/////////////////////////////////////////
	
function validation(id){
	
	for(var i=0; i<id.length; i++){
	var formObj=document.getElementById(id[i]);
	var a=formObj.value;
	a=a.replace(/\s/g,"");

		if (a==null || a==""){
		
		formObj.style.borderColor = "red";
		
		document.getElementById(id[i]+"e").innerHTML="empty field";
		
		return false;
		}
		else{
			
			var numbers = /^[0-9]+$/;
	
			if(a.match(numbers)){  
			  formObj.style.borderColor = "#00FF00";
			  document.getElementById(id[i]+"e").innerHTML="";
						  
			}
			 
			else{  
			  formObj.style.borderColor = "red";
			  document.getElementById(id[i]+"e").innerHTML="numeric only";
			  return false;
			  }	
			
		}
	
	}
	return true;
}
//###########################RowMachine#########################################
function addRow(tableID,ls) {
  var nOfGrafted=document.getElementById("grafted").value;
  
  
  // Get a reference to the table
  var tableRef = document.getElementById(tableID);
  
  // Insert a row in the table at row index 0
  var newRow   = tableRef.insertRow(3);

  // Insert a cell in the row at index 0
  var newCell  = newRow.insertCell(0);
  newCell.setAttribute("align","center");
  var newCell2  = newRow.insertCell(1);
  newCell2.setAttribute("align","center");

  // Append a text node to the cell
  var inputElem=document.createElement('input');
  var inputElem2=document.createElement('input');
  if(ls<10){ls="00"+ls}
  if(ls>=10&&ls<100){ls="0"+ls}
  if(ls>=100){ls=ls}
  
  var inputElemID=tableID+ls+"0";
  var inputElemID2=tableID+ls+"1";
  
  console.log(tableID+"-"+ls+"-0"+"		addRow")

  inputElem.setAttribute("id",inputElemID);
  inputElem2.setAttribute("id",inputElemID2);
  inputElem2.setAttribute("onkeypress","return newRow(event,this)")
  newCell.appendChild(inputElem);
  newCell2.appendChild(inputElem2);
}

	
//#########################TableMAchine#########################################	

function tableMachine(tableID,source,tableHeads,cN,locate) {
	
    var a, b,fkl,tableElem, rowElem, colElem, thElem, inputElem, buttonElem;
	
	var divElem = document.getElementById(locate);
	
	fkl=document.getElementById(source).value;
	
	if(tableID=="xSurf" || tableID=="xCharge" || tableID=="xTable"){
		a = parseInt(fkl)+2;}
	else{a = parseInt(fkl)+1;}
    
    b = cN;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else{
        tableElem = document.createElement('table');
		tableElem.setAttribute("id",tableID);
		

        for (var i = -1; i < a; i++) {
            rowElem = document.createElement('tr');
			
			if(i==-1){

				for (var j = 0; j < b; j++) {
					
					
	
					thElem = document.createElement('th');
					thElem.setAttribute("align","center");
					thElem.appendChild(document.createTextNode(tableHeads[j])); //to print cell number
					
					rowElem.appendChild(thElem);
				}
			}

            if(i>-1 && i<a-1){

				for (var j = 0; j < b; j++) {
					colElem = document.createElement('td');
					colElem.setAttribute("align","center");
					
					if(j==0){
						
						if(tableID=="xSurf" || tableID=="xCharge" || tableID=="xTable"){
								colElem.appendChild(document.createTextNode(i));}
							else{colElem.appendChild(document.createTextNode(i+1));
						}
						
					}
					
					if(j>0){
						inputElem=document.createElement('input');
						
						if(tableID=="xSurf" || tableID=="xCharge" || tableID=="xTable"){
							inputElem.setAttribute("id",tableID+i+(j-1));}
							else{inputElem.setAttribute("id",tableID+i+(j-1));

						}
						
					colElem.appendChild(inputElem);
						}
					
					rowElem.appendChild(colElem);
				}
			}
			
			if(i==a-1){

				for (var j = 0; j < b; j++) {
					colElem = document.createElement('td');
					colElem.setAttribute("align","center");
					
					if(j==b-1){
						buttonElem=document.createElement('button');
						buttonElem.setAttribute("id",tableID+"Button");
						buttonElem.setAttribute("onClick","callMap(this)");
						buttonElem.appendChild(document.createTextNode("Create"));
						colElem.appendChild(buttonElem);
						}
					
					rowElem.appendChild(colElem);
				}
			}

            tableElem.appendChild(rowElem);
        }
		
		divElem.appendChild(tableElem);


    }
}

//###########################MapMAchine#########################################

function mapMachine(tableID,type,locate,remainingSource) {
	var total=document.getElementById(remainingSource).value;
    var a, b, tableElem, rowElem, colElem, thElem, inputElem,inputElem2,placeToPut;
	var tableHeads=[type,total+"/"+total];
	var tableSubHeads=["Mo.Type","Number"];
	
	var divElem = document.getElementById(locate);	
    a = 2;
	b = 2;

    if (a == "" || b == "") {
        alert("Please enter some numeric value");
    } else{
        tableElem = document.createElement('table');
		tableElem.setAttribute("id",tableID);

        for (var i = -3; i < a; i++) {
            rowElem = document.createElement('tr');
			
			if(i<-2){
				
				var sayac=0;

				for (var j = 0; j < b; j++) {
					
					
	
					thElem = document.createElement('th');
					thElem.setAttribute("align","center");
					if(j==1){thElem.setAttribute("id","rem"+tableID);}
					
					thElem.appendChild(document.createTextNode(tableHeads[j])); //to print cell number
					thElem.style.backgroundColor="orange";
					
					rowElem.appendChild(thElem);
				}
					
			}
			
			if(i==-2){

				for (var j = 0; j < b; j++) {
					
					
	
					thElem = document.createElement('th');
					thElem.setAttribute("align","center");
					if(j==0){thElem.appendChild(document.createTextNode("NOArms"));}
					if(j==1){
						
						inputElem2=document.createElement('input');
						inputElem2.setAttribute("id",tableID+i+j);
				
						
					thElem.appendChild(inputElem2);	
						
						
						}
					thElem.style.backgroundColor="yellow";
					
					rowElem.appendChild(thElem);
				}
				
				
			}
			
			if(i==-1){

				for (var j = 0; j < b; j++) {
					
					
	
					thElem = document.createElement('th');
					thElem.setAttribute("align","center");
					thElem.appendChild(document.createTextNode(tableSubHeads[j])); //to print cell number
					thElem.style.backgroundColor="yellow";
					
					rowElem.appendChild(thElem);
				}
				
				
			}

            
			
			if(i>0){

				for (var j = 0; j < b; j++) {
					colElem = document.createElement('td');
					colElem.setAttribute("align","center");
					
					
						inputElem=document.createElement('input');
						inputElem.setAttribute("id",tableID+"00"+i+j);
						
						//if(j==0){}
						if(j==1){
							inputElem.setAttribute("onkeypress",
							"return newRow(event,this,'doldur')");}	
					colElem.appendChild(inputElem);	
					
					rowElem.appendChild(colElem);
				}
			}

            tableElem.appendChild(rowElem);
        }
		divElem.appendChild(tableElem);
        //document.body.appendChild(divElem);
		//placeToPut = document.getElementById(putAfter);
		//insertAfter(placeToPut, divElem);


    }
}


//##############################################################################

function callTable()
    {
		
		removeTable('gTable');
		removeTable('fTable');
		removeTable('iTable');
		removeTable('QTable');
		removeTable('xTable');
		removeTable('xSurf');
		removeTable('xCharge');
		
		grafteds=document.getElementById("grafted").value;
		frees=document.getElementById("free").value;
		ions=document.getElementById("ions").value;
		
		
		
		
		var xNumbersSource=document.getElementById("notm").value;
		xNumbers=parseInt(xNumbersSource);
		
		var tott=parseInt(grafteds)+parseInt(frees)+parseInt(ions);
		
		
		var xNumbersArray=["X"];
		for (var i=0; i<xNumbers; i++){
			
			xNumbersArray.push(i);
			
			}
		if(validation(["from","to","nom","notm","grafted","free","ions"])){
			if(tott==document.getElementById("nom").value){
		

				tableMachine('QTable','nom',["Number","Bulk Conc."],2,"bulkConc");
				tableMachine('xTable','notm',xNumbersArray,xNumbersArray.length,"bulkConc");
				tableMachine('xSurf','notm',["Type","xSurface"],2,"xSurface");
				tableMachine('xCharge','notm',["Type","Charge"],2,"charges");
				tableMachine('gTable','grafted',["Number","Types of Arms","Chain Size"],3,"graftedTable");
				tableMachine('fTable','free',["Number","Chain Size"],2,"freeTable");
				tableMachine('iTable','ions',["Number","Mo.Type"],2,"ionTable");
		
		
				//var tdHidden;
				
				for (var j=1; j<xNumbers; j++){
						
					document.getElementById("xTable"+0+j).style.visibility="hidden";
								
					}
					
				for (var i=1; i<xNumbers; i++){
					
					for (var j=i; j<xNumbers; j++){
						
					//document.getElementById("xTable"+0+j).style.visibility="hidden";
					document.getElementById("xTable"+i+j).style.visibility="hidden";
					
					}
				}
				
			}
			
			if(tott!=document.getElementById("nom").value){
				
				document.getElementById("nome").innerHTML="Nom=Grafted+Free+Ions";
				document.getElementById("nom").style.borderColor="blue";
				document.getElementById("grafted").style.borderColor="blue";
				document.getElementById("free").style.borderColor="blue";
				document.getElementById("ions").style.borderColor="blue";
			
			}
		
		
		}
		
		
		
		
		for (var i=1; i<=grafteds; i++){
			graftedArray.push([]);
		}
			
		for (var i=1; i<=frees; i++){
			freeArray.push([]);
		}
		
		

		
    }
	
function callMap(but)
{

	
	if (but.id=="gTableButton"){
		
		
		
		//for(var i=grafteds; i>0; i--){
		for(var i=1; i<=grafteds; i++){
			var ii=i-1;
			if(i<10){var adTablo="gMap0";}
			if(i>=10){var adTablo="gMap";}
			removeTable(adTablo+i);
			mapMachine(adTablo+i,"type"+i,"graftedMap","gTable"+ii+"1");
			if(i%2==0){document.getElementById(adTablo+i).style.backgroundColor="#80CC99";}
			else 
			document.getElementById(adTablo+i).style.backgroundColor="#33AD5C";
			
			graftedTotals[i]=document.getElementById("gTable"+ii+"1").value;
			graftedRemaining[i]=document.getElementById("gTable"+ii+"1").value;
			
			}
		
	}
	
	if (but.id=="fTableButton"){
		
		//for(var i=grafteds; i>0; i--){
		for(var i=1; i<=frees; i++){
			var ii=i-1;
			if(i<10){var adTablo="fMap0";}
			if(i>=10){var adTablo="fMap";}
			removeTable(adTablo+i);
			mapMachine(adTablo+i,"type"+i,"freeMap","fTable"+ii+"0");
			if(i%2==0){document.getElementById(adTablo+i).style.backgroundColor="	#CC9999";}
			else 
			document.getElementById(adTablo+i).style.backgroundColor="#A34747";
			
			freeTotals[i]=document.getElementById("fTable"+ii+"0").value;
			freeRemaining[i]=document.getElementById("fTable"+ii+"0").value;
			
			}
		
	}
		
	
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
	

	
function newRow(e,obj,doldur)
{
	

	
	if (event.which == 13 || event.keyCode == 13) {
			var asd=obj.id.substring(4,6).replace(/^0+/,"");//a code from textbox id to find out the type of chain and its size
			var thID=obj.id.substring(0,6);
			var replaceID=obj.id.substring(0,4);
		
		
			var sdf=parseInt(obj.value);//read textbox value
			var step=obj.id.substring(6,9).replace(/^0+/,"");//a code from textbox id to give the next id to next textboxes
				
			var ls=parseInt(step)+1;
		
		
					if(replaceID=="gMap"){
						var stepBack=graftedArray [asd][step];
						graftedCount[asd]=step;
						graftedArray [asd][step]=sdf;
						var i=1;
						var araToplam=0;
						do{ 
							if(i<10){var kk="00"+i;var ee="00"+(i+1);}
							if(i>=10){var kk="0"+i;var ee="0"+(i+1);}
							if(i>=100){var kk=i;var ee=i+1;}
							araToplam=araToplam+graftedArray[asd][i];
							i++;
						}while(typeof graftedArray[asd][i]!="undefined");
						
						graftedRemaining[asd]=graftedTotals[asd]-araToplam;
				
						if(graftedRemaining[asd]>=0){
							document.getElementById("rem"+thID).innerHTML=graftedRemaining[asd]+"/"+graftedTotals[asd];
							
								if(graftedRemaining[asd]>0){
									if(document.getElementById(thID+ee+"0")){
										return false;}
									else{
										addRow(thID,i);
										document.getElementById(thID+ee+"0").focus();
										return true;}
								
								}
						}
						
						if(graftedRemaining[asd]<0){
							alert("Please check your remainder");
							graftedArray [asd][step]=stepBack;
							var k=1;
							
							do{
								if(k<10){var kk="00"+k;}
								if(k>=10){var kk="0"+k;}
								if(k>=100){var kk=k;}
								document.getElementById(thID+kk+"1").value=graftedArray[asd][k];
								k++;
							}while(typeof graftedArray[asd][k]!="undefined");
							return false;
						}
						
						else{
							alert("No remaining monomer in this type!");
							//alert(graftedRemaining[asd]); 
							return false;
						}	
						
					}
					
					
					
		//###############################gSonu fBasi#############################################			
					
					if(replaceID=="fMap"){
						var stepBack=freeArray [asd][step];
						freeCount[asd]=step;
						freeArray [asd][step]=sdf;
						var i=1;
						var araToplam=0;
						do{ 
							if(i<10){var kk="00"+i;var ee="00"+(i+1);}
							if(i>=10){var kk="0"+i;var ee="0"+(i+1);}
							if(i>=100){var kk=i;var ee=i+1;}
							araToplam=araToplam+freeArray[asd][i];
							i++;
						}while(typeof freeArray[asd][i]!="undefined");
						
						freeRemaining[asd]=freeTotals[asd]-araToplam;
				
						if(freeRemaining[asd]>=0){
							document.getElementById("rem"+thID).innerHTML=freeRemaining[asd]+"/"+freeTotals[asd];
							
								if(freeRemaining[asd]>0){
									if(document.getElementById(thID+ee+"0")){
										return false;}
									else{
										addRow(thID,i);
										document.getElementById(thID+ee+"0").focus();
										return true;}
								
								}
						}
						
						if(freeRemaining[asd]<0){
							alert("Please check your remainder");
							freeArray [asd][step]=stepBack;
							var k=1;
							
							do{
								if(k<10){var kk="00"+k;}
								if(k>=10){var kk="0"+k;}
								if(k>=100){var kk=k;}
								document.getElementById(thID+kk+"1").value=freeArray[asd][k];
								k++;
							}while(typeof freeArray[asd][k]!="undefined");
							return false;
						}
						
						else{
							alert("No remaining monomer in this type!");
							//alert(graftedRemaining[asd]); 
							return false;
						}	
						
					}
			
			
			
//#####################################fSonu#################################################

            return false;
        }
/////////////////////////////////////////////loading///////////////////////////////////////////////		
		
	if (doldur=="true") {
		var asd=obj.id.substring(4,6).replace(/^0+/,"");//a code from textbox id to find out the type of chain and its size
		var thID=obj.id.substring(0,6);
		var replaceID=obj.id.substring(0,4);
	
	
		var sdf=parseInt(obj.value);//read textbox value
		var step=obj.id.substring(6,9).replace(/^0+/,"");//a code from textbox id to give the next id to next textboxes
			
		var ls=parseInt(step)+1;
		
		
			if(replaceID=="gMap"){
						var stepBack=graftedArray [asd][step];
						graftedCount[asd]=step;
						graftedArray [asd][step]=sdf;
						var i=1;
						var araToplam=0;
						do{ 
							if(i<10){var kk="00"+i;var ee="00"+(i+1);}
							if(i>=10){var kk="0"+i;var ee="0"+(i+1);}
							if(i>=100){var kk=i;var ee=i+1;}
							araToplam=araToplam+graftedArray[asd][i];
							i++;
						}while(typeof graftedArray[asd][i]!="undefined");
						
						graftedRemaining[asd]=graftedTotals[asd]-araToplam;
				
						if(graftedRemaining[asd]>=0){
							document.getElementById("rem"+thID).innerHTML=graftedRemaining[asd]+"/"+graftedTotals[asd];
							
								if(graftedRemaining[asd]>0){
									if(document.getElementById(thID+ee+"0")){
										return false;}
									else{
										addRow(thID,i);
										document.getElementById(thID+ee+"0").focus();
										return true;}
								
								}
						}
						
						if(graftedRemaining[asd]<0){
							alert("Please check your remainder");
							graftedArray [asd][step]=stepBack;
							var k=1;
							
							do{
								if(k<10){var kk="00"+k;}
								if(k>=10){var kk="0"+k;}
								if(k>=100){var kk=k;}
								document.getElementById(thID+kk+"1").value=graftedArray[asd][k];
								k++;
							}while(typeof graftedArray[asd][k]!="undefined");
							return false;
						}
						
						else{
							alert("No remaining monomer in this type!");
							//alert(graftedRemaining[asd]); 
							return false;
						}	
						
					}
			
			
			
//###############################gSonu fBasi#############################################			
			
			if(replaceID=="fMap"){
						var stepBack=freeArray [asd][step];
						freeCount[asd]=step;
						freeArray [asd][step]=sdf;
						var i=1;
						var araToplam=0;
						do{ 
							if(i<10){var kk="00"+i;var ee="00"+(i+1);}
							if(i>=10){var kk="0"+i;var ee="0"+(i+1);}
							//if(i==99){var kk="0"+i;var ee=(i+1);}
							if(i>=100){var kk=i;var ee=i+1;}
							araToplam=araToplam+freeArray[asd][i];
							i++;
						}while(typeof freeArray[asd][i]!="undefined");
						
						freeRemaining[asd]=freeTotals[asd]-araToplam;
				
						if(freeRemaining[asd]>=0){
							document.getElementById("rem"+thID).innerHTML=freeRemaining[asd]+"/"+freeTotals[asd];
							
								if(freeRemaining[asd]>0){
									if(document.getElementById(thID+ee+"0")){
										return false;}
									else{
										console.log(thID+"-"+i+"	goToAddRow");
										addRow(thID,i);
										console.log(thID+"-"+ee+"	ee");
										//alert("Please check your remainder");
										if(ee=="0010"){document.getElementById(thID+"0100").focus();}
										else if(ee=="0100"){document.getElementById(thID+"1000").focus();}
										
										else{document.getElementById(thID+ee+"0").focus();}
										
										return true;}
								
								}
						}
						
						if(freeRemaining[asd]<0){
							alert("Please check your remainder");
							freeArray [asd][step]=stepBack;
							var k=1;
							
							do{
								if(k<10){var kk="00"+k;}
								if(k>=10){var kk="0"+k;}
								if(k>=100){var kk=k;}
								document.getElementById(thID+kk+"1").value=freeArray[asd][k];
								k++;
							}while(typeof freeArray[asd][k]!="undefined");
							return false;
						}
						
						else{
							alert("No remaining monomer in this type!");
							//alert(graftedRemaining[asd]); 
							return false;
						}	
						
					}
			
			
			
//#####################################fSonu#################################################

            return false;
        	}
		return true;
		
}
        
//second


	
	
	
	
	function uyduruk()
	{
		
		alert (totalNom);
		var textArray=[];
		
		textArray.push("\r\n"+document.getElementById("from").value+
				" "+document.getElementById("to").value+
				"\r\n"+document.getElementById("nom").value+
				"\r\n"+document.getElementById("grafted").value+
				" "+document.getElementById("free").value+
				" "+document.getElementById("ions").value);
		
		
		
		
		
		for (var i=1; i<=totalNom; i++){
			for (var j=0; j<=grafteds; j++){
				textArray.push("\r\n"+i+" ");
				textArray.push(document.getElementById("gTable"+j+"0").value);
				
			}
		}
			
		var textToWrite=document.getElementById("cub").value;
			
		for (var i=0; i<textArray.length; i++){
			
			textToWrite=textToWrite+textArray[1];
			}	
			
	}
	
	
	
	function saveTextAsFile()
	{
		
		var textArray=[];
		textArray.push("\r\n"+document.getElementById("from").value+
				" "+document.getElementById("to").value+
				"\r\n"+document.getElementById("nom").value+
				"\r\n"+document.getElementById("grafted").value+
				" "+document.getElementById("free").value+
				" "+document.getElementById("ions").value);
		
	var m=1;	
	////////////////////////Writing Grafteds////////////////////////////////////////	
		if(grafteds!=0){
		
				var j=0;
				
				for (var i=1; i<=grafteds; i++){
						
						if(i<10){var ii="0"+i;}
						if(i>=10){var ii=i;}
					 
						textArray.push("\r\n"+m+" ");
						textArray.push(document.getElementById("gTable"+j+"0").value);
						
						for(var k=1; k<=graftedCount[i]; k++){
							
							
							if(k<10){var kk="00"+k;}
							if(k>=10){var kk="0"+k;}
							if(k>=100){var kk=k;}
						alert("gMap"+ii+kk+"1");
							textArray.push("\r\n"+document.getElementById("gMap"+ii+kk+"1").value);
							textArray.push(" "+document.getElementById("gMap"+ii+kk+"0").value);	
							
						}
						
						textArray.push("\r\n-1 "+document.getElementById("gMap"+ii+"-21").value);
						
					j=j+1;
					m=m+1;	
					
				}
		
		}
		
	/////////////////////////////////////Writing Frees/////////////////////////////////////
		
		if(frees!=0){
			
			for (var i=1; i<=frees; i++){
				
				if(i<10){var ii="0"+i;}
				if(i>=10){var ii=i;}
			 
				textArray.push("\r\n"+m+" 1");
				//textArray.push(document.getElementById("fTable"+j+"0").value);
				
				for(var k=1; k<=freeCount[i]; k++){
					
					if(k<10){var kk="00"+k;}
					if(k>=10){var k="0"+k;}
					if(k>=100){var kk=k;}
				
					textArray.push("\r\n"+document.getElementById("fMap"+ii+kk+"1").value);
					textArray.push(" "+document.getElementById("fMap"+ii+kk+"0").value);	
					
				}
				
				textArray.push("\r\n-1 "+document.getElementById("fMap"+ii+"-21").value);
			
			m=m+1;
				
			
			}
			
		}
		
	/////////////////////////////////////Writing Ions/////////////////////////////////////
		if(ions!=0){
			
			j=0;
			for (var i=1; i<=ions; i++){
				
				 
					textArray.push("\r\n"+m+" 1");
					textArray.push("\r\n1 "+document.getElementById("iTable"+j+"0").value);
					
					textArray.push("\r\n-1 1");
				
				m=m+1;
				j=j+1;
				
			
			}
			
		}
	///////////////////////////////////////////////////////////////////////////////////////	
		
		textArray.push("\r\n"+document.getElementById("notm").value);
	
	//////////////////////////////////////Writing Bulk Concentrations//////////////////////
		
		totalNom=document.getElementById("nom").value;
		
		for (var i=0; i<totalNom; i++){
			
			textArray.push("\r\n"+document.getElementById("QTable"+i+"0").value);
			
			}
	////////////////////////////////XX//////////////////////////////////
	
		textArray.push("\r\n"+document.getElementById("xTable00").value+"d0");
		
		for (var i=1; i<=xNumbers; i++){
			for(var j=0; j<i; j++){
				
				textArray.push("\r\n"+document.getElementById("xTable"+i+j).value+"d0 x"+i+j);
			
			}
		}
	//////////////////////////////XSurface///////////////////////////////////////////	
		
		for (var i=0; i<=xNumbers; i++){
				
				textArray.push("\r\n"+document.getElementById("xSurf"+i+"0").value+"d0 "+i+"s");
			
			
		}
	////////////////////////////////xCharge//////////////////////////////////////////	
	
	for (var i=0; i<=xNumbers; i++){
				
				textArray.push("\r\n"+i+" "+document.getElementById("xCharge"+i+"0").value+"d0");
			
			
		}
	//////////////////////////////////////////////////////////////////////////////////////	
			
			
		var textToWrite=document.getElementById("cub").value;
			
		for (var i=0; i<textArray.length; i++){
			
			textToWrite=textToWrite+textArray[i];
			}	
				
		/*var textToWrite = document.getElementById("cub").value+
	            "\r\n"+document.getElementById("from").value+
				" "+document.getElementById("to").value+
				"\r\n"+document.getElementById("nom").value+
				"\r\n"+document.getElementById("grafted").value+
				" "+document.getElementById("free").value+
				" "+document.getElementById("ions").value;
				*/
				
				
		var textFileAsBlob = new Blob([textToWrite], {type:'in/plain'});
		var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value+".in";
	
		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null)
		{
			// Chrome allows the link to be clicked
			// without actually adding it to the DOM.
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}
		else
		{
			// Firefox requires the link to be added to the DOM
			// before it can be clicked.
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}
	
		downloadLink.click();
	}
	
	function destroyClickedElement(event)
	{
		document.body.removeChild(event.target);
	}
	
	function loadFileAsText()
	{
		var fileToLoad = document.getElementById("fileToLoad").files[0];
	
		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{
			var textFromFileLoaded = fileLoadedEvent.target.result;
			
			var ww = textFromFileLoaded.search("\r\n");
			
			if(ww !=-1){var line=textFromFileLoaded.split("\r\n");}
			if(ww ==-1){var line=textFromFileLoaded.split("\n");}
			
			if(line[0]=="'cub'"){
				document.getElementById("cub").setAttribute("checked","");
				}
				
			if(line[0]=="other"){
				document.getElementById("other").setAttribute("checked","");
				}
				
			var bos=line[1].split(" ");
			document.getElementById("from").value = bos[0];
			document.getElementById("to").value = bos[1];
			totalNom=line[2];
			document.getElementById("nom").value = totalNom;
			
			var bos1=line[3].split(" ");
			
			grafteds=parseInt(bos1[0]);
			frees=parseInt(bos1[1]);
			ions=parseInt(bos1[2]);
			
	////////////////////////Number of Types of Monomers///////////////////////////////		
			for(var i=0; i<line.length; i++){
				
				if(line[i].substring(0,3)=="-1 "){
					
					var kesme1=i;
					
					}
				
			}
			
			
			document.getElementById("notm").value = line[kesme1+1];
	//////////////////////////////////////////////////////////////////////////////////////
			
			document.getElementById("grafted").value = grafteds;
			document.getElementById("free").value = frees;
			document.getElementById("ions").value = ions;
			
			callTable();
			
			
			var j=5;
			var jj=5;
			var kesme=0;
			var sonraki=["4"];
			var toplamG=0;
			
			
	//////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////Grafteds///////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////	
			
			if(grafteds!=0){
				
			var Gtypo=[];
			var Gnumbro=[];
				
	//////////////////////////////////////////////////Type of Arms///////////////////////////////////////		
				do{
						
						if(line[j].substring(0,3)=="-1 "){
								
									kesme=kesme+1;
									sonraki.push(j+1);
								
						}
								
						j++;
								
								
				}while(kesme<grafteds);
					
				for(var i=0; i<grafteds; i++){	
				
					var bos2=line[sonraki[i]].split(" ");
					document.getElementById("gTable"+i+"0").value=bos2[1];			
						
				}
				
	////////////////////////////////////////////////Chains Size////////////////////////////////////////			
				kesme=0;
				
				do{
					
						
						if(line[jj].substring(0,3)!="-1 "){
								
								var bos3=line[jj].split(" ");
								//alert(bos3[0]);
								var parsoN=parseInt(bos3[0]);
								var parsoT=parseInt(bos3[1]);
								toplamG= toplamG+parsoN;
								Gnumbro.push(parsoN);
								Gtypo.push(parsoT);
								
								
						}
						
						if(line[jj].substring(0,3)=="-1 "){
								
								document.getElementById("gTable"+kesme+"1").value=toplamG;
								//alert(toplamG);
								toplamG=0;
								jj++;
								kesme=kesme+1;
								Gnumbro.push("kesme");
								Gtypo.push("kesme");
								
						}
								
						jj++;
						
								
								
				}while(kesme<grafteds);
				
				
			
			}
	
	
	//////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////Frees//////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////	
		
			if(frees!=0){
				
			var Ftypo=[];
			var Fnumbro=[];
				
	////////////////////////////////////////////////Chains Size////////////////////////////////////////			
				kesme=0;
				
				do{
					
						
						if(line[jj].substring(0,3)!="-1 "){
								
								var bos3=line[jj].split(" ");
								//alert(bos3[0]);
								var parsoN=parseInt(bos3[0]);
								var parsoT=parseInt(bos3[1]);
								toplamG= toplamG+parsoN;
								Fnumbro.push(parsoN);
								Ftypo.push(parsoT);
								
								
						}
						
						if(line[jj].substring(0,3)=="-1 "){
								
									document.getElementById("fTable"+kesme+"0").value=toplamG;
									//alert(toplamG);
									toplamG=0;
									jj++;
									kesme=kesme+1;
									Fnumbro.push("kesme");
									Ftypo.push("kesme");
								
						}
								
						jj++;
						
								
								
				}while(kesme<frees);
				
			
			}
			
			
	//////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////Ions//////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////	
			
			if(ions!=0){
					
	////////////////////////////////////////////////Chains Size////////////////////////////////////////			
				kesme=0;
				
				do{
							
					var bos3=line[jj].split(" ");
					document.getElementById("iTable"+kesme+"0").value=bos3[1];
					jj=jj+3;
					kesme=kesme+1;				
								
				}while(kesme<ions);
			
			}
	
	//////////////////////////////////////////Gmap Loading//////////////////////////////////////////
	
	if(grafteds!=0){
		
			callMap(document.getElementById("gTableButton"));
			var ii=1;
			var jj=1;
			
			for (var i=1; i<=Gtypo.length; i++){
				
				if(jj<10){var jjj="0"+jj;}
				if(jj>=10){var jjj=jj;}
				if(ii<10){var iii="00"+ii;}
				if(ii>=10){var iii="0"+ii;}
				if(ii>=100){var iii=ii;}
				if(Gtypo[i-1]!="kesme"){
					var obj1=document.getElementById("gMap"+jjj+iii+"1");
					var obj2=document.getElementById("gMap"+jjj+iii+"0");
					//alert(obj1.id);
					obj1.value=Gnumbro[i-1];
					obj2.value=Gtypo[i-1];
					
					newRow(event,obj1,"true");
					
					ii++;
					}
				if(Gtypo[i-1]=="kesme"){
					
					ii=1;
					jj++;
					
					}
				
				
				
			}
	}
	///////////////////////////////////Fmap Loading//////////////////////////////////
	
	if(frees!=0){
		
			callMap(document.getElementById("fTableButton"));
			var ii=1;
			var jj=1;
			var hjk=0;
			for (var i=1; i<=Ftypo.length; i++){
				
				if(jj<10){var jjj="0"+jj;}
				if(jj>=10){var jjj=jj;}
				if(ii<10){var iii="00"+ii;}
				if(ii>=10){var iii="0"+ii;}
				if(ii>=100){var iii=ii;}
				if(Ftypo[i-1]!="kesme"){
					var obj1=document.getElementById("fMap"+jjj+iii+"1");
					var obj2=document.getElementById("fMap"+jjj+iii+"0");
					console.log("fMap"+jjj+"-"+iii+"-0");
					console.log(obj1.id+"	a");
					obj1.value=Fnumbro[i-1];
					obj2.value=Ftypo[i-1];
					
					newRow(event,obj1,"true");
					
					ii++;
					}
				if(Ftypo[i-1]=="kesme"){
					
					ii=1;
					jj++;
					
					}
				
				
				
			}
	}
	
	////////////////////////////////////////////////////////////////////////////////////////////////		
			
			for (var i=0; i<totalNom; i++){
				
				var bos4=kesme1+2+i;
				var bos3=line[bos4].split(" ");
				document.getElementById("QTable"+i+"0").value=bos3[0];	
			}
			
	////////////////////////////////////////////////////////////////////////////////////////////////
	
			var bos6=bos4+1;
			var bos5=line[bos6].split("d");
			document.getElementById("xTable00").value=bos5[0];
		
		for (var i=1; i<=xNumbers; i++){
			for(var j=0; j<i; j++){
				bos6++;
				var bos5=line[bos6].split("d");
				document.getElementById("xTable"+i+j).value=bos5[0];
			
			}
		}
		
	////////////////////////////////////////////////////////////////////////////////////////////////
							
		for (var i=0; i<=xNumbers; i++){
		
				bos6++;
				
				var bos5=line[bos6].split("d");
				document.getElementById("xSurf"+i+"0").value=bos5[0];
			
			
		}	
		
	////////////////////////////////////////////////////////////////////////////////////////////////					
		
		for (var i=0; i<=xNumbers; i++){
		
				bos6++;
				
				var bos5=line[bos6].split(" ");
				var bos9=bos5[1].split("d");
				document.getElementById("xCharge"+i+"0").value=bos9[0];
			
			
		}	
			
	/////////////////////////////////////////////////////////////////////////////////
			
		};
		fileReader.readAsText(fileToLoad, "UTF-8");
	}
	
	
	



