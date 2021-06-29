function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var string = '';

    if(p > 0){
      var res = (p * r * y)/100;

      var dt = new Date();
      var year = dt.getFullYear();
      year = parseInt(year) + parseInt(y);

      string = "If you deposit <mark>" + p + "</mark>,<br/>";
      string += "at an interest rate of <mark>" + r + "</mark>.<br/>";
      string += "You will recieve an amount of <mark>" + res + "</mark>,<br/>";
      string += "in the year <mark>" + year + "</mark>";
      document.getElementById("result").innerHTML = string;
    }
    else {
        /*string = "Enter valid Principal";*/
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
    }
}

function rate_disp()
{
  var rate = document.getElementById("rate").value;
  rate += '%';
  document.getElementById("rt").innerHTML = rate;
}

function yr_drop()
{
    var str = '';
    for(i = 1; i <= 100; i++){
        str += '<option val=' + i + '>' + i + '</option>';
    }
    rate_disp();
    document.getElementById("years").innerHTML = str;
}
