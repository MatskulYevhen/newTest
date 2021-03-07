var servResponse = document.querySelector("#response"); // присвоедние div из index1.html

document.forms.ourform.onsubmit = function(e){
    e.preventDefault();
    var userInput = document.forms.ourform.ourform__inp.value;

    var xhr = new XMLHttpRequest();

    //xhr.open('Get', 'form.php?' + 'ourform__inp' + userInput + '&key2=value2');

    xhr.open('post', 'form.php');

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            servResponse.textContent = xhr.responsetext;

        }
    }

    xhr.send('ourform__inp=' + userInput)

};
