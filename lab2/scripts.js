"use strict"

const evaluate_input = () =>
{
	let task_text = document.getElementById("task").value;
	if(task_text === "")
	{
		return;
	}
	return task_text;
}

let deleted = null;
let deleted_list = null;

const add_task = () =>
{
	let task_text = evaluate_input();
	
	if (!task_text)
	{
		return;
	}	
	
	const newP = document.createElement("p");
	newP.classList = "task-element";	
	
	const newPdiv = document.createElement("div");
	newPdiv.classList = "task-undone";
	newPdiv.innerHTML = `${task_text}`;	
	newPdiv.addEventListener("click", done);
	newP.appendChild(newPdiv);
	
	const newPdate = document.createElement("p");
	newPdate.innerHTML = "";
	newPdate.classList = "task-date";
	newPdate.style = "text-decoration: none;";
	newP.appendChild(newPdate);
	
	let list = document.getElementById("task-list");
	if (document.getElementById("is-important").checked === true)
	{
		list = document.getElementById("task-list-important");
	}
	list.appendChild(newP);
	
	const newXbutton = document.createElement("button");
	newXbutton.innerHTML = "Delete";
	newXbutton.classList = "btn btn-warning";
	if (document.getElementById("is-important").checked === true)
	{
		newXbutton.classList = "btn btn-danger";
	}
	newXbutton.addEventListener("click", function()
	{
		$("#modal").modal();
		deleted = $(this).parent();
		deleted_list = $(this).parent().parent().attr("id");
	});
	$(newP).append(newXbutton);
	
	return;
}

const done = (e) =>
{
	if (e.target.className === "task-undone")
	{
		e.target.classList = "task-done";
		
		e.target.removeEventListener("click", done);
		e.target.addEventListener("click", undone);
		
		e.target.style.color = "#666666";
		
		let date = new Date();
		date.getDate();
		
		e.target.parentNode.childNodes[1].innerHTML = date.toLocaleString();	
	}
}

const undone = (e) =>
{
	if (e.target.className === "task-done")
	{
		e.target.classList = "task-undone";
			
		e.target.removeEventListener("click", undone);
		e.target.addEventListener("click", done);
		
		e.target.style.color = "#000000";
		
		e.target.parentNode.childNodes[1].innerHTML = "";	
	}
}

const ctrl_z = () =>
{
	if (deleted !== null)
	{
		$("#" + deleted_list).append(deleted);
		deleted = null;
		$("#ctrl-z").attr("disabled", true);
	}
	else
	{
		deleted = null;
		$("#ctrl-z").attr("disabled", true);
	}
}

const remove_task = () =>
{
	$(deleted).remove();
	$("#ctrl-z").removeAttr("disabled");
}

const show_hide_list = () =>
{
	if (document.getElementById("task-list").style.visibility !== "hidden")
	{
		document.getElementById("task-list").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("task-list").style.visibility = "visible";
	}
}

const show_hide_important_list = () =>
{
	if (document.getElementById("task-list-important").style.visibility !== "hidden")
	{
		document.getElementById("task-list-important").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("task-list-important").style.visibility = "visible";
	}
}