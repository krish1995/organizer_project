
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