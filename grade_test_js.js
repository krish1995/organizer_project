// This is the Javascript function which contains all of the calculation code for the HTML tables //
// it also creates the tables aswell // 

var count; // this variable is composed of 2 numbers (the year and the semester)
var numFields = 6; // # of empty text boxes for courses for each semester (right now, we have placed 6 course per semester)

// this is the function that is executed as soon as the html page is loaded in the <body onload> tag
// this function executes another function called "init"
function go() {
	init();

}

// ############################################################################################################
// function to create the tables (runs a series of similar loops through each of the repeating tables)
function init() {
	count = "2"; // start out with 2 tables
	var table1 = initYearTable(1);
	myDiv.appendChild(table1);
}
// ############################################################################################################

// this function runs the total_credits(), sem_gpa(), cumulative_gpa(), and gened_go() functions
function gpas() {
	var numYears = count.length; // numYears = the length of the count variable(the number of tables)
	// for loop that starts with i=1, goes up be 1 until i is <= to numYears
	for(var i = 1; i <= numYears; i++) {
		var numSems = parseInt(count.charAt(i-1));
		for(var j = 1; j <= numSems; j++) {
			cumulative_gpa(i,j); 
			total_credits(i,j);
			sem_gpa(i,j);
		}
	}
	gened_go();
	gened_progress();
}


function total_credits(year, sem) {
	var numYears = count.length;
	if(year < count.length) {
		numYears = year;
	}
	
	var cred_total = 0;
	var baseId = "y" + year + "s" + sem;
	
	// for each field
	for(var k = 1; k <= numFields; k++) {
		var credits_input = parseFloat(document.getElementById(baseId + "c" + k).value);
		if(!isNaN(credits_input)) {
			cred_total = cred_total + credits_input;
		}
	}
	
	document.getElementById("y" + year + "s" + sem + "tc").value = cred_total;
}

function sem_gpa(year, sem) {
	
	var numYears = count.length;
	if(year < count.length) {
		numYears = year;
	}
	
	var gpa_total = 0;
	var cred_total = 0;
	
	
	var baseId = "y" + year + "s" + sem;
	// for each field
	for(var k = 1; k <= numFields; k++) {
		var credits_input = parseFloat(document.getElementById(baseId + "c" + k).value);
		if(!isNaN(credits_input)) {
			cred_total = cred_total + credits_input;
			var grade_input = document.getElementById(baseId + "g" + k).value;
			if(!isNaN(grade_input)) {
				gpa_total = gpa_total + grade_input*credits_input;
			}
		}
	}
	
	if(cred_total == 0) {
		var gpa = 0;
	} else {
		var gpa = gpa_total / cred_total;
	}
	var round_gpa = Math.round(gpa*1000) / 1000;
	
	document.getElementById("y" + year + "s" + sem + "sg").value = round_gpa;
	
}

// ############################################################################################################
function cumulative_gpa(year, sem) {
	var numYears = count.length;
	if(year < count.length) {
		numYears = year;
	}
	
	var gpa_total = 0;
	var cred_total = 0;
	
	// for each year
	for(var i = 1; i <= numYears; i++) {
		var numSems = parseInt(count.charAt(i-1));
		if(sem < numSems) {
			numSems = sem;
		}
		// for each semester
		for(var j = 1; j <= numSems; j++) {
			var baseId = "y" + i + "s" + j;
			// for each field
			for(var k = 1; k <= numFields; k++) {
				var credits_input = parseFloat(document.getElementById(baseId + "c" + k).value);
				if(!isNaN(credits_input)) {
					cred_total = cred_total + credits_input;
					var grade_input = document.getElementById(baseId + "g" + k).value;
					if(!isNaN(grade_input)) {
						gpa_total = gpa_total + grade_input*credits_input;
					}
				}
			}
		}
	}

	var gpa = gpa_total / cred_total;
	var round_gpa = Math.round(gpa*1000) / 1000;
	
	document.getElementById("y" + year + "s" + sem + "cg").value = round_gpa;
}

// ############################################################################################################
function add_year() {
	var numYears = count.length;
	count = count+"2";
	var table1 = initYearTable(numYears+1);
	myDiv.appendChild(table1);	
}

// ############################################################################################################
// Creates a default year table with the name y1table
// starts with 2 semesters, can add more
function initYearTable(num) {
	
	var id = "y" + num;
	
	var table = document.createElement("table");
	table.id = id + "table";

	table.setAttribute("border","3");
	
	var tableheader = document.createElement("thead");
	var row = document.createElement("tr");
	row.setAttribute("class","h1");
	// row.style.fontWeight = "bold";

	row.id = id + "toprow";
	
	var tempcol = document.createElement("th");
	tempcol.style.textAlign = "center";
	tempcol.id = "tempcol";
	tempcol.setAttribute("colspan","4");
	var tit = document.createTextNode("YEAR " + num);
	tempcol.appendChild(tit);
	row.appendChild(tempcol);
	tableheader.appendChild(row);
	table.appendChild(tableheader);
	
	var tablebody = document.createElement("tbody");
	
	var row = document.createElement("tr");
	row.id = id + "row";
	row.setAttribute("class","danger");


	tablebody.appendChild(row);
	table.appendChild(tablebody);
	
	// modified names for clarity, change back to "Semester 1" and "Semester 2"
	var sem1 = createSemTable("Fall Semester", id + "s1");
	var sem2 = createSemTable("Spring Semester", id + "s2");
	// var scol = createSemTable("SPRING", id + "s");
	// var mcol = createSemTable("SUMMER", id + "m");
	
	row.appendChild(sem1);
	row.appendChild(sem2);
	// row.appendChild(scol);
	// row.appendChild(mcol);

	var buttonRow = document.createElement("tr");
	var buttonCol = document.createElement("td");
	buttonCol.id = id + "buttoncol";
	buttonCol.setAttribute("colspan",count.charAt(num-1));

	// <input type="button" value="Calculate" id="calculate_button" onClick="gpas()"></input>
	var button = document.createElement("input");
	
	button.setAttribute("type","button");
	button.setAttribute("value","Add Semester");
	button.setAttribute("class","btn btn-danger");
	button.id = id + "add";
	button.onclick = function() {
		var numSems = count.charAt(num-1);
		var semNum = parseInt(numSems) + 1;
		var sem = createSemTable("Semester " + semNum, "y" + num + "s" + semNum);
		var row = document.getElementById("y" + num + "row");
		row.appendChild(sem);
		count = replaceAtIndex(count, num-1, semNum);
		var buttoncol = document.getElementById("y" + num + "buttoncol");
		buttonCol.setAttribute("colspan",count.charAt(num-1));
	}
	buttonRow.setAttribute("class","warning");
	buttonCol.appendChild(button);
	buttonRow.appendChild(buttonCol);
	tablebody.appendChild(buttonRow);

	table.setAttribute("class","table table-condensed");
	
	return table;	
}

function replaceAtIndex(string, index, character) {
	return string.substr(0,index) + character + string.substr(index+1);
}


// creates a semester table
// id is y#s#
function createSemTable(semName, id) {
	var col = document.createElement("td");
	var table = document.createElement("table");
	table.id = id + "table";
	col.appendChild(table);
	table.setAttribute("class", "table table-condensed");
	// table.setAttribute("cellpadding","5");
	// table.setAttribute("cellspacing","2");
	
	var thead = document.createElement("thead");
	table.appendChild(thead);
		
	// row for title: Semester X
	var row1 = document.createElement("tr");
	row1.id = id + "titlerow";
	thead.appendChild(row1);
	// row1.setAttribute("class","header2");
	row1.setAttribute("class","warning");
	row1.style.fontSize = "x-large";
	row1.style.fontWeight = "bold";
	row1.style.textAlign = "center";

	var col11 = document.createElement("td");
	col11.id = id + "titlecol";
	col11.colspan="3";
	col11.setAttribute("colspan", "4");
	
	row1.appendChild(col11);
	var tit = document.createTextNode(semName);
	
	col11.appendChild(tit);
	// end row+col for title
	
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	
	// row for field labels: Course Name, etc
	var row2 = document.createElement("tr");
	row2.id = id + "labelrow";
	row2.setAttribute("class","danger");


	tbody.appendChild(row2);
	
	var textFields = ["Course Name","Course Type","Grade","Credits"];
	
	for(i = 0; i < 4; i++) {
		var tempcol = document.createElement("td");
		tempcol.id = "col2" + (i+1);
		row2.appendChild(tempcol);
		var bold = document.createElement("b");
		var text = document.createTextNode(textFields[i]);
		bold.appendChild(text);
		tempcol.appendChild(bold);
	}
	
	// end row for labels
	
	// first row inputs
	// loop from here i=1 to i=6
	
	for(i=1; i <= 6; i++) {
	
		var row = document.createElement("tr");
		row.id = "rowf" + i;
		
		var background = "";
		var reverseBackground = "";
		
		if(i%2 == 0) {
			row.setAttribute("class","danger");
			background = "#f2dede";
			reverseBackground = "#fcf8e3";
		} else {
			row.setAttribute("class","warning");
			background = "#fcf8e3";
			reverseBackground = "#f2dede";
		}
		
		tbody.appendChild(row);
		
		var col1 = document.createElement("td");
		var col2 = document.createElement("td");
		var col3 = document.createElement("td");
		var col4 = document.createElement("td");
		col1.id = "colf" + i + "1";
		col2.id = "colf" + i + "2";
		col3.id = "colf" + i + "3";
		col4.id = "colf" + i + "4";
		row.appendChild(col1);
		row.appendChild(col2);
		row.appendChild(col3);
		row.appendChild(col4);
		
		// fall name 1
		var fn1 = document.createElement("input");
		fn1.setAttribute("maxlength","15");
		fn1.setAttribute("size","15");

		fn1.id = id + "n" + i;
		col1.appendChild(fn1);
		// fall type 1
		var div = document.createElement("div");
		div.setAttribute("class","col-sm-8");
		var ft1 = selectType("ft" + i);
		ft1.setAttribute("class","form-control");
		ft1.id = id + "t" + i;
		// ft1.style.backgroundColor = background;
		div.appendChild(ft1);
		col2.appendChild(div);
		// fall grade 1
		var div = document.createElement("div");
		div.setAttribute("class","col-sm-7");
		var fg1 = selectGrade("fg" + i);
		fg1.setAttribute("class","form-control");
		fg1.id = id + "g" + i;
		// fg1.style.backgroundColor = reverseBackground;
		div.appendChild(fg1);
		col3.appendChild(div);
		// fall credits 1
		var fc1 = document.createElement("input");
		fc1.id = id + "c" + i;
		fc1.setAttribute("maxlength","2");
		fc1.setAttribute("size","3");
		// fc1.style.backgroundColor = background;
		col4.appendChild(fc1);	
	}
	
	var textFields = ["Total Credits: ","Semester GPA: ","Cumulative GPA: "];
	var ids = ["tc","sg","cg"]
	
	for(i=1; i <= 3; i++) {
	
		var rb1 = document.createElement("tr");
		rb1.id = "rb" + i;
		
		if(i%2 == 0) {
			rb1.setAttribute("class","danger");
		} else {
			rb1.setAttribute("class","warning");
		}
		
		var col1 = document.createElement("td");
		var col2 = document.createElement("td");
		var col3 = document.createElement("td");
		col1.id = "col" + i;
		col2.id = "col" + i;
		col3.id = "col" + i;
		rb1.appendChild(col1);
		rb1.appendChild(col2);
		col3.setAttribute("colspan","2");

		rb1.appendChild(col3);
		var bold = document.createElement("b");
		var text = document.createTextNode(textFields[i-1]);
		bold.appendChild(text);
		col2.appendChild(bold);
		var input = document.createElement("input");
		input.id = id + ids[i-1];
		col3.appendChild(input);
		
		tbody.appendChild(rb1);
	}
	return col;
}

function selectType(param) {
    
	//Create array of options to be added
	var array1 = ["","Core Course","Honors Req","Scholars Req","QUEST Req","Hinman Req","CIVICUS","VIRTUS","BTC","FSAW","FSMA","FSPW","FSOC","FSAR",
	"DSNS","DSHU","DSSP(in major)","DSSP(out major)","DVUP","DSHS","DVCC","SCIS"];

	var array2 = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13",
	"14","15","16","17","18","19","20","21"];

	//Create and append select list
	var type = document.createElement("select");
	type.id = param;
	
	//Create and append the options
	for (var i = 0; i < array1.length; i++) {
		var option = document.createElement("option");
		option.value = array2[i];
		option.text = array1[i];
		type.appendChild(option);
	}

	return type;
}


function selectGrade(param) {

	//Create array of options to be added
	var array1 = ["","A+" ,"A"  ,"A-" ,"B+" ,"B"  ,"B-" ,"C+" ,"C"  ,"C-" ,"D+" ,"D"  ,"D-" ,"F"];

	var array2 = ["","4.0","4.0","3.7","3.3","3.0","2.7","2.3","2.0","1.7","1.3","1.0","0.7","0"];

	//Create and append select list
	var grade = document.createElement("select");
	grade.id = param;



	//Create and append the options
	for (var i = 0; i < array1.length; i++) {
		var option = document.createElement("option");
		option.value = array2[i];
		option.text = array1[i];
		grade.appendChild(option);
	}

	return grade;
}


// obsolete below this point

function initTable() {
	var table = document.createElement("table");
	table.id = "table";
	myDiv.appendChild(table);

	// row for title: Fall Semester
	var row1 = document.createElement("tr");
	row1.id = "row1";
	table.appendChild(row1);
	
	var col11 = document.createElement("td");
	col11.id = "col11";
	col11.colspan="3";
	row1.appendChild(col11);
	
	var row2 = document.createElement("tr");
	row2.id = "row2";
	table.appendChild(row2);
	
	var col21 = document.createElement("td");
	var col22 = document.createElement("td");
	var col23 = document.createElement("td");
	var col24 = document.createElement("td");
	col21.id = "col21";
	col22.id = "col22";
	col23.id = "col23";
	col24.id = "col24";
	row2.appendChild(col21);
	row2.appendChild(col22);
	row2.appendChild(col23);
	row2.appendChild(col24);
	var text1 = document.createTextNode("Name");
	var text2 = document.createTextNode("Type");
	var text3 = document.createTextNode("Grade");
	var text4 = document.createTextNode("Credits");
	col21.appendChild(text1);
	col22.appendChild(text2);
	col23.appendChild(text3);
	col24.appendChild(text4);
	
}


function createTables(numTables) {
	
				
	var table = document.createElement("table");
	table.id = "myTable";
	myDiv.appendChild(table);
	
	// table.cellPadding = "5";
	// table.style.backgroundColor="#C0C0C0";
	// table.border = "5";
	
	
	for(i = 0; i < numTables; i++) {
		var row1 = document.createElement("tr");
		row1.id = "row" ;
		table.appendChild(row1);
		
		
		var c1 = document.createElement("td");
		c1.id = "c1";
		row1.appendChild(c1);		
		
		var text = document.createTextNode("Text" );
		c1.appendChild(text);
	}
	
	var x  = append(table);
	
}


// look into doing the sum of credits of all the fundamental studies. For example
// if sum of credits completed for Fund Studeis is 0-8 = low, 9-12 = medium, 13-14 = almost there, 15=complete


// org_script starts here

// ############################################################################################################
function gened_go() {
	
	var types = ["Select","Core Course","Honors Req","Scholars Req","QUEST Req","Hinman Req","CIVICUS","VIRTUS","BTC","FSAW","FSMA","FSPW","FSOC","FSAR",
	"DSNS","DSHU","DSSP(in major)","DSSP(out major)","DVUP","DSHS","DVCC","SCIS"];

	var ids = ["","","","","","","","","","fsaw","fsma","fspw","fsoc","fsar","dsns","dshu","dssp_in","dssp_out"
				,"dvup","dshs","dvcc","scis"];
	
	var values = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13",
					"14","15","16","17","18","19","20","21"];
	
	var totals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	var numYears = count.length;
	for(var i = 1; i <= numYears; i++) {
		var numSems = parseInt(count.charAt(i-1));
		for(var j = 1; j <= numSems; j++) {
			for (k=1; k<=5; k++) {
				var type = document.getElementById("y" + i + "s" + j + "t" + k).value;
				var type_int = parseInt(type);
				var c = document.getElementById("y" + i + "s" + j + "c" + k).value;
				var cint = parseInt(c);
				if(type_int > 0) {
					totals[type_int] = totals[type_int] + cint;
					document.getElementById(ids[type_int]).value = totals[type_int];
				}
			}
		}
	}	
}


function gened_progress() {
var fsaw = parseInt(document.getElementById("fsaw").value) || 0;
var fsma = parseInt(document.getElementById("fsma").value) || 0;
var fspw = parseInt(document.getElementById("fspw").value) || 0;
var fsoc = parseInt(document.getElementById("fsoc").value) || 0;
var fsar = parseInt(document.getElementById("fsar").value) || 0;

var fs_sum = fsaw + fsma + fspw + fsoc + fsar;
alert(fs_sum);
document.getElementById("fs_sum").value == fs_sum;
}

// This is the function for selecting school (After you select a college within UMD the next drop down major your specific major will be modified to just majors within that major)
function selectSchool() {
    
    //Create array of options to be added
    var array1 = ["Select","College of Agriculture and Natural Resources","School of Architecture, Planning, and Preservation","College of Arts and Humanities"
    ,"College of Behavioral and Social Sciences","Robert H. Smith School of Business","College of Computer, Mathematical, and Natural Sciences"
    ,"College of Education","A. James Clark School of Engineering","School of Public Health","Philip Merrill College of Journalism","Letters and Sciences"];

    var array2 = ["0","1","2","3","4","5","6","7","8","9","10","11"];

    //Create and append select list
    var school = document.createElement("select");
    school.id = "mySelect";
    
    //Create and append the options
    for (var i = 0; i < array1.length; i++) {
        var option = document.createElement("option");
        option.value = array2[i];
        option.text = array1[i];
        school.appendChild(option);
    }

    return school;
}

// ############################################################################################################
// This is the function for selecting school (After you select a college within UMD the next drop down major your specific major will be modified to just majors within that major)
function selectMajor() {
    
    //Create array of options to be added
    var arrayCANR1 = ["Select","Animal Sciences","Agricultural and Resource Economics", "Environmental Science and Policy","Environmental Science and Technology",
    "Agricultural Business Management","Golf Course Construction Management","Golf Course Management","Landscape Management", "Ornamental Horticulture","Sports Turf Management",
    "Turfgrass Management","International Agriculture and Natural Resources","Marine-Estuarine-Environmental Science","Dietetics","Food Science","Nutritional Science",
    "Agricultural Education","Agricultural Science & Technology","Landscape Architecture","Plant Science","Veterinary Medical Science","Veterinary Medicine"];

    var arrayCANR2 = ["0","1","2","3","4","5","6","7","8","9","10","11"];

    //Create and append select list
    var major = document.createElement("select");
    major.id = "mySelect";
    
    //Create and append the options
    for (var i = 0; i < array1.length; i++) {
        var option = document.createElement("option");
        option.value = array2[i];
        option.text = array1[i];
        major.appendChild(option);
    }

    return major;
}

