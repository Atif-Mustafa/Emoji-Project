let tableContainer = document.getElementById('emoji_container');

let  search_field = document.getElementById('search_field')

function displayEmoji(searchQuery){

    let filteredEmoji = emojiList.filter(emoji => {
        if(searchQuery.length === undefined)
            return true;
        if( emoji.description.indexOf(searchQuery) !== -1)
            return true;
        if(emoji.aliases.includes(searchQuery) === true)
            return true;
        if(emoji.tags.includes(searchQuery) === true)
            return true;
    })

    tableContainer.innerHTML = ''
    filteredEmoji.forEach( emoji => {


        let new_row = document.createElement('tr');
        let new_emoji = document.createElement('td');
        let new_aliases = document.createElement('td');
        let new_description = document.createElement('td');

        new_description.innerText = emoji.description;
        new_emoji.innerText = emoji.emoji;
        new_aliases.innerText = emoji.aliases.join(', ');

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);

        tableContainer.appendChild(new_row);
    })
}

window.addEventListener('load', displayEmoji);

search_field.addEventListener('keyup', function(){
    let searchValue = search_field.value.toLowerCase();

    displayEmoji(searchValue);
})