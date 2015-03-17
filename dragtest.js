/**
 * dragtest.js
 * 
 * Author: jlacov
 * 
 * Script to use when building my drag and drop site
 * 
 */

function allowDrop(me){
    //prevent the default behavior that blocks something from being dropped here
    //this normally will be called from an ondragover='allowDrop(event)' tag
    me.preventDefault();
}
function drag(me){
    //when we drag via a ondragstart='drag(event)' we assign the id of what
    //we are dragging to the event.
    me.dataTransfer.setData("text", me.target.id);
}
function drop(ev){
    //linked via a ondrop='drop(event)' call this is what assigns the element
    //to the site via a 
    //'documnent.getElementById(ev.dataTransfer.getData('text'))' call.
    me.preventDefault;
    var id = me.dataTransfer.getData("text");
    me.target.appendChild(document.getElementById(id));
}
function xLateDrop(me){
    //use the id to figure out what REALLY needs to go in this box.
    //it is so that we can drop an item that is named the same as the article
    //you really want to drop... ie id='List'  will actually drop an article
    //'List_article' into the drop site. Find the article and make a clone of it
    //then unhide the clone.
    
    me.preventDefault;
    var id = me.dataTransfer.getData("text");
    var source = document.getElementById(id);
    var real = source.getAttribute("name") + "_article";
    var loc = me.target;    
    while ( loc.ondrop == null ){
	loc=loc.parentElement;
    }   
    
    while (loc.hasChildNodes()){
	loc.removeChild(loc.firstChild);
    }
    
    var orig = document.getElementById(real);
    var clone= orig.cloneNode(true);
    var cloneCL = clone.classList;
    cloneCL.remove("hidden");
    
    loc.appendChild(clone);
}
