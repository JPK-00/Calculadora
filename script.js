function insert(num)
        {
           var numero = document.getElementById('resultado').innerHTML ;
           document.getElementById('resultado').innerHTML = numero + num ;
        }
        function clean(num)
        {
            document.getElementById('resultado').innerHTML = "";
        }
        function back(num)
        {
            var resultado = document.getElementById('resultado').innerHTML;
             document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);   
        }
        function calcular(num)
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        }

