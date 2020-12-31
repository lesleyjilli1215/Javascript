function $g(selector) {
    if(selector.includes('#') && !selector.includes(' ')){
        return document.querySelector(selector);
    }
    
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

export {$g as $get};