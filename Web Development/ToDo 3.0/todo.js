var parent = document.getElementById("table");
var btn = document.getElementById("btn");
var input = document.getElementById("text");
var arr=[];
var count=0;

function addContent(event) {
	var code = event.keyCode;
	if(code == 13) {
		if(!input.value) {
			alert("not value");
			return ;
		}
		arr.push(input.value);
		generateRows();
	}
}
btn.addEventListener("click", function(abc) {
		if(!input.value) {
			alert("not value");
			return ;
		}
		arr.push(input.value);
		generateRows();
	}
);
function generateRows() {
	parent.innerHTML="";
	for(var i=0;i<arr.length;i++) {
		var tableRow=document.createElement('tr');
		tableRow.setAttribute("id",i);
		var srNo=document.createElement('tr');
		srNo.innerHTML=i+1;
		tableRow.appendChild(srNo);

		var taskNo=document.createElement('td');
		taskNo.innerHTML=arr[i];
		tableRow.appendChild(taskNo);

		var del=document.createElement('td');
		var button=document.createElement('button');
		button.innerHTML="Delete";

		button.addEventListener("click",function(e) {
			arr.splice(e.target.parentNode.parentNode.id,1);
			generateRows();
		});
		del.appendChild(button);
		tableRow.appendChild(del);
		parent.appendChild(tableRow);
	}
}