function doSubmit()
{
                var time = new Date().getHours();
                var min = new Date().getMinutes();
                var firstname = document.getElementById("name").value;
                var major = document.getElementById("major").value;
                var startyear= document.getElementById("year").value;
                if (document.getElementById("year").value < 2000 )
                                {
                                alert("unacceptable year!! Please enter start year less than 2000");
                                }
                else {
                                
                document.getElementById("records").innerHTML += "<br />"+time+":"+min+",  "+firstname+ ",   "+major+",  "+startyear;
                /**document.getElementById("records").innerHTML += major+ ",   ";
                document.getElementById("records").innerHTML += startyear;**/
		document.myForm.name.value="";
		document.myForm.major.value="";
		document.myForm.year.value="";
                }
}
