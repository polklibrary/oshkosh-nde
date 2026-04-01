console.log('Helo from custom js');


setTimeout(function(){
    var d = document.createElement('div');
    d.id = 'libchat_71db8bcd88ca5f4e93142a92191d41ed';
    d.className = 'lib-chat';
    document.body.appendChild(d);
    
    var s = document.createElement('script');
    s.id = 'libchat-script';
    s.type = 'text/javascript';
    s.src = 'https://v2.libanswers.com/load_chat.php?hash=71db8bcd88ca5f4e93142a92191d41ed';
    document.body.appendChild(s);
    
    // Handle Mobile - Trigger image to compress 
    var screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screen_width < 1000) { // switch to mobile icon
        setTimeout(function(){
            var img = document.createElement('img');
            img.src = 'https://wisconsin-uwosh.primo.exlibrisgroup.com/nde/custom/01UWI_OSH-OSHNDE/assets/images/ve-chat-mobile.png';
            img.alt = 'Chat - Ask a Librarian';
            document.querySelector('.lib-chat a').appendChild(img);
            
            var elements = document.querySelectorAll('.lib-chat a img');
            for(var i = 0; i < elements.length; i++){
                if (typeof elements[i] === "undefined")
                    elements[i].className = 'libchat-mobile-on';
                else
                    elements[i].className += ' libchat-mobile-on';
            }
        }, 2500);
    }
    
}, 2500); 