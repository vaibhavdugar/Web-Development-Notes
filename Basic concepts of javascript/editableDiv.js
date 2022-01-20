 /*
        You have to create a div and inject it into the page which contains a heading.

        Whenever someone clicks on the div, it should be converted into an editable item.
        
        Whenever user clicks away(blur), save the note into local storage.
        */

        let container = document.querySelector('.container')

        // To create a div
        let divElem = document.createElement('div');

        let val = localStorage.getItem('text1');
        let text;
        if (val == null){
            // Created a text
            text = document.createTextNode("This is my text. Click to edit");
        }
        else {
            // If val is not null then, its value will be what we write in editable div
            text = document.createTextNode(val)
        }
        
        // To append the text in the div
        divElem.append(text);

        // To set the id of the div
        divElem.setAttribute('id', 'input');  
        
        let first = document.getElementById('first');

        // Now finally insert the div on the page. You have to use insertBefore for that. "insert divElem before first"
        container.insertBefore(divElem, first);
        
        // This is used to edit the content in the div whose id is input
        document.getElementById('input').contentEditable = "true";

        // when the 'blur' event triggers, the text of the div will be stored in local storage
        input.addEventListener('blur', function(){
            localStorage.setItem('text1', input.innerHTML)
        })