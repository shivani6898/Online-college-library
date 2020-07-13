class Book{
    constructor(name, author, type) {
        this.name = name,
            this.author = author,
            this.type = type
}
}

class Display{
    add(book){
        console.log("adding UI");
        let tablebody = document.getElementById("tablebody")
        let UIString = `
                        <tr>
                        
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>
                        `
        tablebody.innerHTML+=UIString;
    
    }

    validate(book){
        if(book.name.length<2 || book.author.length<2){
           return false;
        }
        else{
           return true;
        }
    }

    clear(){
        let LibraryForm = document.getElementById('LibraryForm')    
        LibraryForm.reset();
    }
    
    show(type,showmsg){
        let msg =document.getElementById('message')
        msg.innerHTML =`
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message:</strong> ${showmsg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
                   `
       setTimeout(function(){
          msg.innerHTML=""
       },2000)
        
    }
}
 // Add submit event listener to libraryform
let LibraryForm = document.getElementById('LibraryForm')
LibraryForm.addEventListener('submit', libraryfromSubmit)

function libraryfromSubmit(e) {
    console.log("you have submit the form")
    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;
    let type;
    let fiction = document.getElementById('Fiction')
    let suspense = document.getElementById('Suspense')
    let lovestory = document.getElementById('LoveStory')
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (suspense.checked) {
        type = suspense.value;
    } else if (lovestory.checked) {
        type = lovestory.value;
    }
    let book = new Book(name, author, type)
    console.log(book)
    let display = new Display();
   if(display.validate(book)){
       display.add(book);
       display.clear();
       display.show('success',"Your Book has been added succesfully");
   }
   else{
       display.show('danger','Your Book has not been added');
   }


   e.preventDefault();
}

