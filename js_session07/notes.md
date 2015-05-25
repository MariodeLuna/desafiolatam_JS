<div id="my_name">My name</div>
<span name="my_element"> span </span>


var element = $("#my_name");
//console.log(element);


var span = $("span[name='my_element']");
console.log(span);









<div id="my_name">My name <span>span</span></div>
<span name="my_element"> span </span>
<input type="text" value="10" />




var element = $("#my_name");
//console.log(element);


var span = $("span[name='my_element']");
console.log(span);

var insideSpan = $("#my_name > span");

insideSpan.html("<span>Hollla</span>");
insideSpan.css("background-color", "red");

//$("div").addClass("greenish");
$("div").toggleClass("greenish");


$("input").attr("value", "atributo");
var value = $("input").val();
console.log(value);





<div id="my_name" class="greenish">My name <span>span</span></div>


var element = $("#my_name");

$("my_name").add("div");

element.prepend("<span>My first name</span>");
element.append("<span>My last name</span>");

element.before("<div>First bro</div>");
element.after("<div>Last bro</div>");
$("span").remove();
$("body > div:nth-child(1)").replaceWith("<div>Replaced bro</div>");


element.on("mouseover mouseout", function(){
    $(this).toggleClass("greenish");
});

element.on("mouseover", function(){
    $(this).text("file");
})

element.on("mouseout", function(){
       $(this).text("My Name"); 
});






<span>Click</span>
<div id="my_name" class="greenish">My name <span>span</span></div>




var element = $("#my_name");

element.hide(1000, function(){
     $(this).slideDown(1000);   
});

$("span").on("click", function(){
     $("#my_name").toggle(1000);   
});
























<form>
<label name="first_name_label">First name:</label>
<br>
<input type="text" name="firstname">
<br>
Last name:
<br>
<input type="text" name="lastname">
<br>
<input type="radio" name="sex" value="male" checked>Male
<br>
<input type="radio" name="sex" value="female">Female
<br>
Favorite day of the week:
<br>
    <select name="fav_day">
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Monday">Monday</option>
    </select>
<br>
</form>

<br><br>
    
<form>
What's your major:
<br>
<input type="text" name="major">
<br>
What's your job title:
<br>
<input type="text" name="job_title">
<br>

Do you like challenges:
<br>
<input type="radio" name="challenge" value="yes" checked>Yes
<br>
<input type="radio" name="challenge" value="no">No
</form>


.form {
    border: 1px solid;
}

// 1. Pon tu nombre al atributo value del campo first name
// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
// 3. Cambia la etiqueta de First name a 'Tu nombre'
// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
// 5. Escoge la opción Female de la pregunta de género.
// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
// 7. Encuentra la primera form del documento y pon el atributo name = job_info
// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
// 9. Agrega un título a la pregunta Male/Female 'Gender'
// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
// 11. Agrega la clase form a ambas formas
//1
$("input[name='firstname']").attr("value", "Mario de Luna");
//2
$("select[name='fav_day']").val("Monday");
//3
$("label").text("Tu nombre:");
//4
var favDayWeek = $("select[name='fav_day']").val();
console.log(favDayWeek);
//5
$("input[value='male']").attr("checked", false);
$("input[value='female']").prop("checked", true);

//6
$("form:nth-child(1)").attr("name", "personal_info");

//7
$("body > form:nth-child(4)").attr("name", "job_info");

//8
$("form[name='personal_info']").prepend("<h1>Entrevista personal</h1>");
$("form[name='job_info']").prepend("<h1>Entrevista de trabajo</h1>");

//9
$("input[name='lastname']").after("<div>Gender:</div>");

//10
$("input[name='lastname']").after("<br/><label>Email:</label><br><input type='text'></input>");

//11
$("form").addClass("form");