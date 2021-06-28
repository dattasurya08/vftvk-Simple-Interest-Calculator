function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var res = (p * r * y)/100;

    var dt = new Date();
    var year = dt.getFullYear();
    year = parseInt(year) + parseInt(y);

    var string = "If you deposit " + p + ",<br/>";
    string += "at an interest rate of " + r + ".<br/>";
    string += "You will recieve an amount of " + res + ",<br/>";
    string += "in the year " + year;
    document.getElementById("result").innerHTML = string;
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
