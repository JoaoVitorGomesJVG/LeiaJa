function search_animal() { 
    let x = document.getElementsByName('main_book'); 
    let y = document.getElementsByName('title');
    
    let input = document.getElementById('search_bar').value 
    input=input.toLowerCase(); 
      
    for (i = 0; i < x.length; i++) {  
        if (!y[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.cssText = "display: flex;flex-direction: row;justify-content: center;"
                              
        } 
    }
} 