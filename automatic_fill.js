//##################################################################################################################################
// this is the function for the mutiple drop down menus for selecting your school and major
      function ldMenu(mySubject) {
      var Indx=mySubject;
      with (document.form2.select2) 
      {
      document.form2.select2.options.length=0;
      if (Indx==0)
      {
      options[0]=new Option("Pages appear here","");
      }
      if (Indx==1) // College of Agriculture
      {
      options[0]=new Option("Choose your Agriculture and Natural Resources Major","");
      options[1]=new Option("Agriculture and Resource Economics","");
      options[2]=new Option("Agricultural Science and Technology","");
      options[3]=new Option("Agricultural Education","");
      options[4]=new Option("Animal Biotechnology","");
      options[5]=new Option("Animal Care and Management","");
      options[6]=new Option("Combined Ag-Veterinary Medicine","");
      options[7]=new Option("Equine Studies","");
      options[8]=new Option("Laboratory Animal Management","");
      options[9]=new Option("Sciences/Pre-Profesional","");
      options[10]=new Option("Science and Policy","");
      options[11]=new Option("Ecological Technology Design","");
      options[12]=new Option("Environmental Health","");
      options[13]=new Option("Natural Resources Management","");
      options[14]=new Option("Soil and Watershed Science","");
      options[15]=new Option("Landscape Architecture","");
      options[16]=new Option("Diettics","");
      options[17]=new Option("Food Science","");
      options[18]=new Option("Nutritional Science","");
      options[19]=new Option("Plant Sciences","");
      options[20]=new Option("Horticulture and Crop Production","");      
      options[21]=new Option("Landscape Management","");
      options[22]=new Option("Turf and Golf Course Management","");
      options[23]=new Option("Urban Forestry","");
      }

      if (Indx==2) // College of Architecture
      {  
      options[0]=new Option("Choose your Architecture Major","");
      options[1]=new Option("Architecture","");
      }

      if (Indx==3) // College of Arts and Humanties
      {
      options[0]=new Option("Choose your College of Arts and Humanties Major","");
      options[1]=new Option("American Studies","");
      options[2]=new Option("Arabic Studies","");
      options[3]=new Option("Art History","");
      options[4]=new Option("Central European, Russian, and Eurasion Studies","");
      options[5]=new Option("Chinese","");
      options[6]=new Option("Classical Languages and Literatures","");
      options[7]=new Option("Communication","");
      options[8]=new Option("Dance","");
      options[9]=new Option("English Language and Literature","");
      options[10]=new Option("Film Studies","");
      options[11]=new Option("French Language and Literature","");
      options[12]=new Option("Germanic Studies","");
      options[13]=new Option("History","");
      options[14]=new Option("Itialian","");
      options[15]=new Option("Japanese","");
      options[16]=new Option("Jewish Studies","");
      options[17]=new Option("Linguistics","");
      options[18]=new Option("Music Education","");
      options[19]=new Option("Music Liberal Arts Program","");
      options[20]=new Option("Music Professional Program","");      
      options[21]=new Option("Persian Studies","");
      options[22]=new Option("Philosophy","");
      options[23]=new Option("Romance Languages","");
      options[24]=new Option("Russian Language and Literature","");
      options[25]=new Option("Spanish Language, Literature, and Cultures","");
      options[26]=new Option("Studio Art","");
      options[27]=new Option("Theatre","");
      options[28]=new Option("Women's Studies","");
      }

      if (Indx==4) // College of Behavioral and Social Sciences
      {
      options[0]=new Option("Choose your Behavioral and Social Sciences Major","");
      options[1]=new Option("African-American Studies","");
      options[2]=new Option("Anthropolgy","");
      options[3]=new Option("Criminology and Criminal Justice","");
      options[4]=new Option("Economics","");
      options[5]=new Option("Geographical Sciences","");
      options[6]=new Option("Government and Politics","");
      options[7]=new Option("Hearing and Speech Sciences","");
      options[8]=new Option("Psychology","");
      options[9]=new Option("Sociology","");

      }

      if (Indx==5) // Smith School of Business
      {
      options[0]=new Option("Choose your Business Major","");
      options[1]=new Option("Accounting","");
      options[2]=new Option("Finance","");
      options[3]=new Option("Management","");
      options[4]=new Option("Information Systems","");
      options[5]=new Option("International Business","");
      options[6]=new Option("Supply Chain Management","");
      options[7]=new Option("Marketing","");
      options[8]=new Option("Operations Management","");
      }

      if (Indx==6) // CMNS
      {
      options[0]=new Option("Choose your Computer, Mathematic, and Sciences Major","");
      options[1]=new Option("Astronomy","");
      options[2]=new Option("Atmospheric and Oceanic Science","");
      options[3]=new Option("BioChemistry","");
      options[4]=new Option("Cell Biology and Genetics","");
      options[5]=new Option("Ecology and Evolution","");
      options[6]=new Option("General Biology","");
      options[7]=new Option("Microbiology","");
      options[8]=new Option("Physiology and Neurobiology","");
      options[9]=new Option("Chemistry","");
      options[10]=new Option("Computer Science","");
      options[11]=new Option("Geology","");
      options[12]=new Option("Mathematics","");
      options[13]=new Option("Physical Sciences","");
      options[14]=new Option("Physics","");
      }

      if (Indx==7) // College of Education
      {
      options[0]=new Option("Choose your Education Major","");
      options[1]=new Option("Art Education","");
      options[2]=new Option("Early Childhood Education","");
      options[3]=new Option("Teacher Education","");
      options[4]=new Option("Elementary Education","");
      options[5]=new Option("English Language Arts Education","");
      options[6]=new Option("Mathematics Education","");
      options[7]=new Option("Middle School Education","");
      options[8]=new Option("Science Education","");
      options[9]=new Option("Social Studies Education","");
      options[10]=new Option("Special Education","");
      options[11]=new Option("World Language Education","");
      }

      if (Indx==8) // Clark School of Engineering
      {
      options[0]=new Option("Choose your Engineering Major","");
      options[1]=new Option("Aerospace Engineering","");
      options[2]=new Option("Bioengineering","");
      options[3]=new Option("Chemical and Biomolecular Engineering","");
      options[4]=new Option("Civil and Environmental Engineering","");
      options[5]=new Option("Computer Engineering","");
      options[6]=new Option("Electrical Engineering","");
      options[7]=new Option("Fire Protection Engineering","");
      options[8]=new Option("Materials Science and Engineering","");
      options[9]=new Option("Mechanical Engineering","");
      }

      // option 9 is graduate school 

      if (Indx==10) // Journalism
      {
      options[0]=new Option("Choose your Journalism Major","");
      options[1]=new Option("Broadcast Journalism","");
      options[2]=new Option("Multi-platform Journalism","");
      }

      // option 11 is information studies

      if (Indx==12) // School of Public Healty
      {
      options[0]=new Option("Choose your Public Health Major","");
      options[1]=new Option("Community Health","");
      options[2]=new Option("Family Science","");
      options[3]=new Option("Kinesiology","");
      options[4]=new Option("Public Health Science","");
	   }

	   // option 13 is Public Policy
	   // option 14 is undergraduate studies

      form2.select2.options[0].selected=true;
      }

      }

      //Hide from Java Script 
      function goToPage() 
      { 
      PageIndex2=document.form2.select2.selectedIndex 
      if (document.form2.select2.options[PageIndex2].value != "") 
      { 
      location.href = document.form2.select2.options[PageIndex2].value;
      } 
      } 

//##############################################################################################################################//
function meche() {
// year 1
	for (i = 1; i <= 4; i++) {
		var sem1 = ["ENES102", "MATH140", "CHEM135", "ENGL101"];
		var cred1 = [3,4,3,3];
			document.getElementById("y" + 1 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 1 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["ENES100", "MATH141", "PHYS161", "GENED", "ORALCOMM"];
		var cred2 = [3,4,3,3,3];
			document.getElementById("y" + 1 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 1 + "s" + 2 + "c" + i).value = cred2[i-1];
	}
// year 2
	for (i = 1; i <= 5; i++) {
		var sem1 = ["ENES220", "ENES221", "MATH241", "MATH206", "PHYS260/261"];
		var cred1 = [3,3,4,1,4];
			document.getElementById("y" + 2 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 2 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["ENES232", "ENME272", "MATH246", "PHYS270/271", "GENED"];
		var cred2 = [3,4,3,3,3];
			document.getElementById("y" + 2 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 2 + "s" + 2 + "c" + i).value = cred2[i-1];
	}		

// year 3
	for (i = 1; i <= 6; i++) {
		var sem1 = ["ENME331", "ENME350", "ENME382", "ENME392", "ENME201", "GENED"];
		var cred1 = [3,3,3,3,1,3];
			document.getElementById("y" + 3 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 3 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["ENME332", "ENME351", "ENME361", "ENME371", "ENGL393"];
		var cred2 = [3,3,3,3,3];
			document.getElementById("y" + 3 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 3 + "s" + 2 + "c" + i).value = cred2[i-1];
	}	

// year 4
	for (i = 1; i <= 5; i++) {
		var sem1 = ["ENME462", "ENME TECH ELEC", "ENME TECH ELEC", "TECH ELEC", "GENED"];
		var cred1 = [3,3,4,1,4];
			document.getElementById("y" + 4 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 4 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["ENME472", "ENME TECH ELEC", "ENME TECH ELEC", "TECH ELEC", "GENED"];
		var cred2 = [3,4,3,3,3];
			document.getElementById("y" + 4 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 4 + "s" + 2 + "c" + i).value = cred2[i-1];
	}					

}
// #########################################################################
function cmsc() {
// year 1
	for (i = 1; i <= 4; i++) {
		var sem1 = ["CMSC131", "MATH140", "CMSC100", "ENGL101"];
		var cred1 = [4,4,1,3];
			document.getElementById("y" + 1 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 1 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 4; i++) {
		var sem2 = ["CMSC132", "MATH141", "GENED", "GENED", ];
		var cred2 = [4,4,4,3];
			document.getElementById("y" + 1 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 1 + "s" + 2 + "c" + i).value = cred2[i-1];
	}
// year 2
	for (i = 1; i <= 4; i++) {
		var sem1 = ["CMSC216", "CMSC250", "MATH246", "GENED"];
		var cred1 = [4,4,4,3];
			document.getElementById("y" + 2 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 2 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["CMSC330", "CMSC351", "STAT400", "GENED", "GENED"];
		var cred2 = [3,3,3,3,3];
			document.getElementById("y" + 2 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 2 + "s" + 2 + "c" + i).value = cred2[i-1];
	}		

// year 3
	for (i = 1; i <= 5; i++) {
		var sem1 = ["CMSC4XX", "CMSC4XX", "GENED", "GENED", "ELEC"];
		var cred1 = [3,3,3,3,3];
			document.getElementById("y" + 3 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 3 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["CMSC4XX", "CMSC4XX", "ENGL393", "UL CONC", "UL CONC"];
		var cred2 = [3,3,3,3,3];
			document.getElementById("y" + 3 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 3 + "s" + 2 + "c" + i).value = cred2[i-1];
	}	

// year 4
	for (i = 1; i <= 5; i++) {
		var sem1 = ["CMSC4XX", "CMSC4XX", "UL CONC", "GENED", "ELEC"];
		var cred1 = [3,3,3,3,3];
			document.getElementById("y" + 4 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 4 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["CMSC4XX", "CMNS390", "UL CONC", "ELEC", "ELEC"];
		var cred2 = [3,3,3,3,3];
			document.getElementById("y" + 4 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 4 + "s" + 2 + "c" + i).value = cred2[i-1];
	}					

}
//#####################################################################
function finance() {
// year 1
	for (i = 1; i <= 5; i++) {
		var sem1 = ["ECON200", "MATH220", "BMGT110", "ENGL101", "LOWER ELEC"];
		var cred1 = [4,3,3,3,3];
			document.getElementById("y" + 1 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 1 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["ECON201", "BMGT230", "COMM107", "GENED", "LOWER ELEC"];
		var cred2 = [4,3,3,3,3];
			document.getElementById("y" + 1 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 1 + "s" + 2 + "c" + i).value = cred2[i-1];
	}
// year 2
	for (i = 1; i <= 5; i++) {
		var sem1 = ["BMGT220", "GENED", "GENED", "LOWER ELEC", "LOWER ELEC"];
		var cred1 = [43,4,3,3,3];
			document.getElementById("y" + 2 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 2 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 6; i++) {
		var sem2 = ["BMGT221", "GENED", "GENED", "BMGT367", "LOWER ELEC", "LOWER ELEC"];
		var cred2 = [3,3,3,1,3,2];
			document.getElementById("y" + 2 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 2 + "s" + 2 + "c" + i).value = cred2[i-1];
	}		

// year 3
	for (i = 1; i <= 5; i++) {
		var sem1 = ["BMGT301", "BMGT340", "BMGT350", "BMGT341", "UPPER ELEC"];
		var cred1 = [3,3,3,3,3];
			document.getElementById("y" + 3 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 3 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 5; i++) {
		var sem2 = ["BMGT343", "BMGT440", "BMGT364", "GENED", "UPPER ELEC"];
		var cred2 = [3,3,3,3,3];
			document.getElementById("y" + 3 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 3 + "s" + 2 + "c" + i).value = cred2[i-1];
	}	

// year 4
	for (i = 1; i <= 5; i++) {
		var sem1 = ["BMGT44X", "MAJOR REQ", "BMGT380", "UPPER ECON", "UPPER ELEC"];
		var cred1 = [3,3,3,3,3];
			document.getElementById("y" + 4 + "s" + 1 + "n" + i).value = sem1[i-1];
			document.getElementById("y" + 4 + "s" + 1 + "c" + i).value = cred1[i-1];
	}

	for (i = 1; i <= 4; i++) {
		var sem2 = ["BMGT44X", "BMGT44X", "BMGT495", "UPPER ELEC"];
		var cred2 = [3,3,3,3];
			document.getElementById("y" + 4 + "s" + 2 + "n" + i).value = sem2[i-1];
			document.getElementById("y" + 4 + "s" + 2 + "c" + i).value = cred2[i-1];
	}					

}
