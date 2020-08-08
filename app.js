
var update_id_1=document.getElementById('my_update');
update_id_1.setAttribute("class","button_show");

function submitForm(){
    var bookName_id=document.getElementById('bookName_id').value;
    var AuthorName_id=document.getElementById('AuthorName_id').value;
    var date_id=document.getElementById('date_id').value;
    var isbNum_id=document.getElementById('isbNum_id').value;

    // validation
    if(bookName_id == ""){
        document.getElementById('bookName').innerHTML="please fill up Book Title";
        return false;
    }
    else if((bookName_id.length<3) || (bookName_id.length>20)){
        document.getElementById('bookName').innerHTML="**please fill the Book Name between 3 to 20";
        return false;
    }
    else if(!isNaN(bookName_id)){
        document.getElementById('bookName').innerHTML="*Please fill up character*";
		return false;
    }else{
        document.getElementById('bookName').style.display="none";
    }

    if(AuthorName_id == ""){
		document.getElementById('authorName').innerHTML="please fill up Author Name";
		return false;
	}
	else if((AuthorName_id.length<3) || (AuthorName_id.length>13)){
		document.getElementById('authorName').innerHTML="*Please fill the Author Name between 3 and 15*";
		return false;
	}
	else if(!isNaN(AuthorName_id)){
		document.getElementById('authorName').innerHTML="*Please fill up character*";
		return false;
	}else{
        document.getElementById('authorName').style.display="none";
	}
	
	  
    if(date_id == ""){
		document.getElementById('dateName').innerHTML="please fill up Correct Date";
		return false;
	}


	if(isbNum_id == ""){
		document.getElementById('isbnNum').innerHTML="please fill up Isbn Number";
		return false;
    }
	else if((isbNum_id.length<1) || (isbNum_id.length>13)){
		document.getElementById('isbnNum').innerHTML="*Please fill the isbn Number between 1 and 13*";
		return false;
	}
	else if(isNaN(isbNum_id)){
		document.getElementById('isbnNum').innerHTML="Enter Only Number";
		return false;
	}else{
        document.getElementById('isbnNum').style.display="none";
    }


    var formData={
        name:bookName_id,
        author:AuthorName_id,
        date:date_id,
        isbn:isbNum_id,
    }
    if(localStorage.getItem('formDatas')=== null){
        var formDatas=[]
        formDatas.push(formData)
        localStorage.setItem('formDatas', JSON.stringify(formDatas))
    }else{
        var formDatas=JSON.parse(localStorage.getItem('formDatas'))
        formDatas.push(formData)
        localStorage.setItem('formDatas',JSON.stringify(formDatas))
    }
    document.getElementById('main_form').reset();
    fetchformDatas()
    event.preventDefault();

}

// delete
function deleteFromData(id){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));

	for(var i=0;i<formDatas.length;i++){
		if(i===parseInt(id)){
			formDatas.splice(i,1);
		}
	}
	localStorage.setItem('formDatas',JSON.stringify(formDatas));
	// e.preventDefault();
	fetchformDatas();


}

// edit Data
function editFromData(isbn){
    var update_id_1=document.getElementById('my_update');
	update_id_1.setAttribute("class","button_show1  btn btn-primary");
	var submit_hide=document.getElementById('my_submit');
    submit_hide.setAttribute("class"," btn btn-primary button_show");
   
    document.getElementById('isbNum_id').disabled = true;
    
    var formDatas=JSON.parse(localStorage.getItem('formDatas'))
    for(var i=0;i<formDatas.length;i++){
		if(formDatas[i].isbn == parseInt(isbn)){
			var name=formDatas[i].name;
			var author=formDatas[i].author;
			var date=formDatas[i].date;
			var isbn=formDatas[i].isbn;
			var inputTitle=document.getElementById('bookName_id').setAttribute("value",name);
			var authorName=document.getElementById('AuthorName_id').setAttribute("value",author);
			var dateName=document.getElementById('date_id').setAttribute("value",date);
			var isbnNum=document.getElementById('isbNum_id').setAttribute("value",isbn);
			
        }
       
	}
    event.preventDefault()
}



// update
function updateForm(){
    var bookName_id=document.getElementById('bookName_id').value;
	var AuthorName_id=document.getElementById('AuthorName_id').value;
	var date_id=document.getElementById('date_id').value;
    var isbNum_id=document.getElementById('isbNum_id').value;

    // validation
    if(bookName_id == ""){
        document.getElementById('bookName').innerHTML="please fill up Book Title";
        return false;
    }
    else if((bookName_id.length<3) || (bookName_id.length>20)){
        document.getElementById('bookName').innerHTML="**please fill the Book Name between 3 to 20";
        return false;
    }
    else if(!isNaN(bookName_id)){
        document.getElementById('bookName').innerHTML="*Please fill up character*";
		return false;
    }else{
        document.getElementById('bookName').style.display="none";
    }

    if(AuthorName_id == ""){
		document.getElementById('authorName').innerHTML="please fill up Author Name";
		return false;
	}
	else if((AuthorName_id.length<3) || (AuthorName_id.length>13)){
		document.getElementById('authorName').innerHTML="*Please fill the Author Name between 3 and 15*";
		return false;
	}
	else if(!isNaN(AuthorName_id)){
		document.getElementById('authorName').innerHTML="*Please fill up character*";
		return false;
	}else{
        document.getElementById('authorName').style.display="none";
    }

    if(date_id == ""){
		document.getElementById('dateName').innerHTML="please fill up Correct Date";
		return false;
	}else{
		document.getElementById('dateName').style.display="none";
	}


	if(isbNum_id == ""){
		document.getElementById('isbnNum').innerHTML="please fill up Isbn Number";
		return false;
    }
	else if((isbNum_id.length<1) || (isbNum_id.length>13)){
		document.getElementById('isbnNum').innerHTML="*Please fill the isbn Number between 1 and 13*";
		return false;
	}
	else if(isNaN(isbNum_id)){
		document.getElementById('isbnNum').innerHTML="Enter Only Number";
		return false;
	}else{
        document.getElementById('isbnNum').style.display="none";
    }
    var formData={
		name:bookName_id,
		author:AuthorName_id,
		date:date_id,
		isbn:isbNum_id
	};

	update(formData);
	fetchformDatas();
	
    event.preventDefault()
}


function update(oldData){
	var formDatas=JSON.parse(localStorage.getItem('formDatas'));

	var newarr=[];
	for(var i=0;i<formDatas.length;i++){
		if(formDatas[i].isbn===oldData.isbn){
			formDatas[i].name=oldData.name;
			formDatas[i].author=oldData.author;
			formDatas[i].date=oldData.date;
			formDatas[i].isbn=oldData.isbn;
		}
	}

	newarr = formDatas;
	localStorage.setItem('formDatas',JSON.stringify(newarr));
}

// fetch data
function fetchformDatas(){
    var formDatas=JSON.parse(localStorage.getItem('formDatas'))
    var tbody_html=document.getElementById('tbody_html');
    tbody_html.innerHTML='';

    for(var i=0; i<formDatas.length;i++){
		var name=formDatas[i].name;
		var author=formDatas[i].author;
		var date=formDatas[i].date;
		var isbn=formDatas[i].isbn;
        
        tbody_html.innerHTML +='<tr><td>'+name+'</td><td>'+
                author+'</td><td>'+
                date+'</td><td>'+isbn
                +'</td><td class="d-flex"><a href="" onclick="deleteFromData(\''+i+'\')"><i class="far fa-trash-alt"></i></a> <a href="" class="ml-auto" onclick="editFromData(\''+isbn+'\')"><i class="fas fa-pencil-alt  "></i></a></td></tr>';
        
    };


}