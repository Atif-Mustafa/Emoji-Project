let emojiContainer = document.getElementById('emoji_container');
let search_category = document.getElementsByClassName('search_category');
let  search_field = document.getElementById('search_field')

function displayEmoji(searchQuery){

    let filteredEmoji = emojiList.filter(emoji => {
        /*if(searchQuery.length === undefined)
            return true;*/
        if( emoji.description.indexOf(searchQuery) !== -1 || emoji.aliases.includes(searchQuery) === true)
            return true;       
    })

    emojiContainer.innerHTML= ''

    filteredEmoji.forEach( emoji => {

        let div = document.createElement('div');
        div.innerText = emoji.emoji;
       
        div.classList.add('emoji-item');
       
        emojiContainer.appendChild(div);
    })
}

window.addEventListener('load', displayEmoji);

search_field.addEventListener('keyup', function(){
    let searchValue = search_field.value.toLowerCase();

    displayEmoji(searchValue);
})

Array.from(search_category).forEach(category => {
    category.addEventListener('click', function()  {
    let searchValue = category.value.
    toLowerCase();
    console.log(searchValue)
    displayEmoji(searchValue);
    })
})
