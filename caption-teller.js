var Teller = require('story-teller').Teller;
var CaptionTeller = Teller.extend({
    eventConfiguration : function(context){
        return {
            'sentence-start' : function(e){
                var document = global.document;
                var root = document.getElementById('root_caption');
                if(root) root.innerText = e.data;
                setTimeout(function(){
                    context.emit('sentence-stop', {});
                }, 5000);
            }
        };
    },
    initializeContext : function(context, cb){
        var document = context.document;
        var root = document.getElementById('root_caption');
        if(!root){
            root = document.createElement('div');
            root.setAttribute('id', 'root_caption');
            document.body.appendChild(root);
        }
        cb();
    },
    cleanupContext : function(context, cb){
        cb();
    }
});
if (typeof self !== 'undefined' && global.StoryTeller){
    global.StoryTeller.CaptionTeller = CaptionTeller;
}
module.exports = CaptionTeller;
