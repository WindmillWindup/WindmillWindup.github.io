/*
//http://www.onlineaspect.com/2009/08/13/javascript_to_fix_wmode_parameters/

Stop flash from covering HTML content
by Josh Fraser on August 13, 2009

The problem is you don’t always have the option of changing the embed code.  
What if you’re developing a JavaScript widget and don’t have any control over how the flash is embedded?  
The solution is more complicated than you would expect.  
It turns out there are a slew of IE bugs around the <object> tag that escalate what should be a simple task into a real headache.  
Basically you need to replace each <embed> and <object> tag with a cloned version that has had its wmode parameter fixed. 

Here’s how you do it:

*/

function fix_flash() {
    // loop through every embed tag on the site
    var embeds = document.getElementsByTagName('embed');
    for(i=0; i<embeds.length; i++)  {
        embed = embeds[i];
        var new_embed;
        // everything but Firefox & Konqueror
        if(embed.outerHTML) {
            var html = embed.outerHTML;
            // replace an existing wmode parameter
            if(html.match(/wmode\s*=\s*('|")[a-zA-Z]+('|")/i))
                new_embed = html.replace(/wmode\s*=\s*('|")window('|")/i,"wmode='transparent'");
            // add a new wmode parameter
            else
                new_embed = html.replace(/<embed\s/i,"<embed wmode='transparent' ");
            // replace the old embed object with the fixed version
            embed.insertAdjacentHTML('beforeBegin',new_embed);
            embed.parentNode.removeChild(embed);
        } else {
            // cloneNode is buggy in some versions of Safari & Opera, but works fine in FF
            new_embed = embed.cloneNode(true);
            if(!new_embed.getAttribute('wmode') || new_embed.getAttribute('wmode').toLowerCase()=='window')
                new_embed.setAttribute('wmode','transparent');
            embed.parentNode.replaceChild(new_embed,embed);
        }
    }
    // loop through every object tag on the site
    var objects = document.getElementsByTagName('object');
    for(i=0; i<objects.length; i++) {
        object = objects[i];
        var new_object;
        // object is an IE specific tag so we can use outerHTML here
        if(object.outerHTML) {
            var html = object.outerHTML;
            // replace an existing wmode parameter
            if(html.match(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")[a-zA-Z]+('|")\s*\/?\>/i))
                new_object = html.replace(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")window('|")\s*\/?\>/i,"<param name='wmode' value='transparent' />");
            // add a new wmode parameter
            else
                new_object = html.replace(/<\/object\>/i,"<param name='wmode' value='transparent' />\n</object>");
            // loop through each of the param tags
            var children = object.childNodes;
            for(j=0; j<children.length; j++) {
                if(children[j].getAttribute('name').match(/flashvars/i)) {
                    new_object = html.replace(/<param\s+name\s*=\s*('|")flashvars('|")\s+value\s*=\s*('|")[^'"]*('|")\s*\/?\>/i,"<param name='flashvars' value='"+children[j].getAttribute('value')+"' />");
                }
            }
            // replace the old embed object with the fixed versiony
            object.insertAdjacentHTML('beforeBegin',new_object);
            object.parentNode.removeChild(object);
        }
    }
}