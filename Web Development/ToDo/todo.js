var parent = document.getElementById("table");
var btn = document.getElementById("btn");
var input = document.getElementById("text");
var arr=[];
var date=[];

btn.addEventListener("click",function(abc) {
		if(!input.value) {
			alert("Please Enter Value");
			return ;
		}
		arr.push(input.value);
		date.push(new Date().toString());
		generateRows();
	}
);

function generateRows() {
	parent.innerHTML="";
	parent.appendChild(stat());
	for(var i=0;i<arr.length;i++) {
		var tableRow=document.createElement('tr');
		tableRow.setAttribute("id",i);
		var srNo=document.createElement('td');
		srNo.innerHTML=i+1;
		tableRow.appendChild(srNo);

		var taskNo=document.createElement('td');
		taskNo.innerHTML=arr[i];
		tableRow.appendChild(taskNo);

		var dateNo=document.createElement('td');
		dateNo.innerHTML=date[i];
		tableRow.appendChild(dateNo);

		var del=document.createElement('td');
		var button=document.createElement('button');
		button.innerHTML="Delete";

		button.addEventListener("click",function(e) {
			arr.splice(e.target.parentNode.parentNode.id,1);
			date.splice(e.target.parentNode.parentNode.id,1);
			generateRows();
		});

		del.appendChild(button);
		tableRow.appendChild(del);
		parent.appendChild(tableRow);
	}
	input.value="";
}

function stat() {
    var tableRow=document.createElement('tr');
	var srNo=document.createElement('td');
	srNo.innerHTML="S. No";
	tableRow.appendChild(srNo);

	var taskNo=document.createElement('td');
	taskNo.innerHTML="Task";
	tableRow.appendChild(taskNo);

	var dateNo=document.createElement('td');
	dateNo.innerHTML="Date";
	tableRow.appendChild(dateNo);

	var del=document.createElement('td');
	del.innerHTML="Delete";

	tableRow.appendChild(del);
	parent.appendChild(tableRow);

	return (tableRow);
}