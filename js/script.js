var index=0;
Carousel();
function Carousel()
{
    var i;

    var x = document.getElementsByClassName('pic1');
    for(i=0; i<x.length; i++)
    {
        if(i==index)
        {
            x[i].style.display = "block";
        }
        else{
            x[i].style.display = "none";
        }
    }
    index++;
    if(index>=x.length)
    {
        index = 0;
    }
    setTimeout(Carousel,5000);
}


var testresults

function checkemail() {
  var str = document.validation.emailcheck.value
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  if (filter.test(str))
    testresults = true
  else {
    alert("Please input a valid email address!")
    testresults = false
  }
  return (testresults)
}

function checkbae() {
  if (document.layers || document.getElementById || document.all)
    return checkemail()
  else
    return true
}
