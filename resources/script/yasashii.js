/**
 * Dustin Diaz's most excellent getElementByClass.
 * 
 * @author Dustin Diaz
 * @copyright Dustin Diaz <dustin[AT]dustindiaz[DOT]com>
 * @link http://www.dustindiaz.com/getelementsbyclass/
 * @license CC-Attribution-Share Alike 2.5 <http://creativecommons.org/licenses/by-sa/2.5/>
 **/
function getElementsByClass(searchClass,node,tag) {
    var classElements = new Array();
    if ( node == null )
        node = document;
    if ( tag == null )
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
    for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
} // end getElementByClass

function quotePlain(post_div_id,textarea_id) 
{
    div = document.getElementById(post_div_id);
    textarea = document.getElementById(textarea_id);

    window.location.hash = "post";
    textarea.value += "<blockquote>" + div.innerHTML + "</blockquote>\n\n";
    textarea.focus();
    setCaretToEnd(textarea);

    return true;
} // end quote

function quoteTinyMce(post_div_id)
{
    div = document.getElementById(post_div_id);

    window.location.hash = "post";
    tinyMCE.execCommand('mceInsertContent',false,"<blockquote>" + div.innerHTML + "</blockquote>\n\n");
}

function doForumAdminConfirms(action)
{
    if(action == null) return false;
    
    confirmation_text = '';
    if(action == 'delete_post')
    {
         confirmation_text = 'Are you sure you wish to delete this post?';
    }
    else if(action == 'delete_thread')
    {
        confirmation_text = 'Are you sure you wish to delete this ENTIRE THREAD?';
    }
    else
    {
        return true;
    }

    return confirm(confirmation_text);
} // end doForumAdminConfirms

function tickAll(class)
{
    elements = getElementsByClass(class);

    for(i=0;i < elements.length;i++)
    {
        box = elements[i];
        alert(box.id); 
    } // end loop

} // end tickAll