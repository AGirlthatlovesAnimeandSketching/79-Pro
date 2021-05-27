name_of_the_student_array = [];

function submit()
{
    var name1 = document.getElementById("nameone").value;
    var name2 = document.getElementById("nametwo").value;
    var name3 = document.getElementById("namethree").value;
    var name4 = document.getElementById("namefour").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);

    console.log(name_of_the_student_array);

    document.getElementById("displaynames").innerHTML=name_of_the_student_array;

}
function sorting()
{
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);

    document.getElementById("displaynames").innerHTML=name_of_the_student_array;
}