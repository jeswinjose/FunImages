/*Render the images to div
@method jsonFlickrFeed
@param data
*/

function jsonFlickrFeed(data)
{
    var divContent;
    for(key in data.items) {

     divContent = data.items[key].description;
     var container = document.createElement('div');
     container.innerHTML = divContent;
     container.setAttribute('src',divContent);
     document.body.appendChild(container);
     
    }
}

var script = document.createElement('script');
script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&amp;jsoncallback=?'
document.getElementsByTagName('head')[0].appendChild(script);



