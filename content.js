let listOfTags=['p','a','h1','h2','h3','h4','h5','h6','i'];
listOfTags.forEach((tag)=>{
    let elements = document.getElementsByTagName(tag)
    for (let i = 0, l = elements.length; i < l; i++) {
        elements[i].innerHTML="hiiiiiiiiiii"
    }
});
