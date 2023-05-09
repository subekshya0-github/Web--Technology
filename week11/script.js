document.getElementById("parent").innerHTML=("somethingElse");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.color=("green");
document.getElementById("parent").style.cssText=("background-color:yellow;color:pink; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Subekshya Dhamala");
document.getElementsByClassName("exercise")[1].innerHTML=("I am 20 years old.");
document.getElementsByClassName("exercise")[2].innerHTML=("I am student");
document.getElementsByClassName("exercise")[3].innerHTML=("I am from Budhanilkantha");
document.getElementsByClassName("exercise")[4].innerHTML=("I am ");

document.querySelector("h2").innerHTML=("I am subu.");
document.querySelector("#hi").innerHTML=("I am subu.");
document.querySelector(".hey").innerHTML=("I am subu.");

document.getElementsByClassName("exercise")[0].style.cssText=("background-color:blue;color:white; text-align:center")
document.getElementsByClassName("exercise")[1].style.cssText=("background-color:pink;color:brown; text-align:center")
document.getElementsByClassName("exercise")[2].style.cssText=("background-color:green;color:white; text-align:center")
document.getElementsByClassName("exercise")[3].style.cssText=("background-color:purple;color:yellow; text-align:center")
document.getElementsByClassName("exercise")[4].style.cssText=("background-color:Golden;color:white; text-align:center")

document.getElementsByTagName("h1")[0].style.cssText=("text-transform:uppercase;text-alig:centre")
document.getElementsByTagName("h1")[1].style.cssText=("text-transform:uppercase;text-alig:centre")
document.getElementsByTagName("h1")[2].style.cssText=("text-transform:uppercase;text-alig:centre")

document.getElementsByTagName("h2")[0].style.cssText=("text-transform:uppercase;text-alig:centre")
document.getElementsByTagName("h2")[1].style.cssText=("text-transform:uppercase;text-alig:centre")
document.getElementsByTagName("h2")[2].style.cssText=("text-transform:uppercase;text-alig:centre")

const change = document.querySelectorAll("h3"); 
for(i=0; i<=change.length;i++)
{
    change[i].innerHTML=("I am swostika");
}

// function myFunction(){
//     document.open();
//     document.write("<h1>Hello World</h1");
//     document.close();
// }

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1>Hello World</h1");
    document.close();

}