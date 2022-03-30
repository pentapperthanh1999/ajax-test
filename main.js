function render() {
    var list = document.querySelectorAll('li');

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(){
            this.remove();
        })
    }
}

render();

const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const listItem = document.querySelector('ul');

add.addEventListener('click', function(){
    var li = document.createElement("li");
    var a = document.createElement('a');

    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode("Item"));
    li.appendChild(a);
    listItem.appendChild(li);
    render();
});

remove.addEventListener('click', function() {
    const list =  document.querySelector('ul');
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
})


function color(color) {
    var a = getComputedStyle(color);
    var b = a.backgroundColor;
    document.querySelector('.content').style.color = b;
}

const reset = document.querySelector('.reset');
const content  = document.querySelector('.content');
reset.addEventListener('click', () => {
    content.style.color = '#333';
})