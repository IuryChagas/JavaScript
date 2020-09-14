function textCharCounter(text){
    if (text.length > 10) {
        return console.log("chars[",text.length,"] >> This text is too long");
    }
    return console.log("chars[",text.length,"] >> text within the limit");
}

textCharCounter("Lorem ipsum");
textCharCounter("ipsum");
textCharCounter("100");