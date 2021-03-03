function compute()
            {
                p = document.getElementById("principal").value;
                n = document.getElementById("rate").value;
                r = document.getElementById("years").value;
                result = document.getElementById("result");
                
                result.innerHTML = "If you deposit principal='' at an interest of rate=''.You will receive an amount result='',in the year years='' " + (p*n*r/100);
            }

 
