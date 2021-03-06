// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

import global from "../global"
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onClick(event,clickData){
        switch (clickData){
            case "back":
                this.node.destroy();
                break;
            case 'create':
                global.socket.createRoom({
                    rule:1
                },function (err,data) {
                    if(err){
                        console.log('create room err: '+err);
                    }else{
                        global.socket.joinRoom(data.roomID,function (err, resp) {
                            if(err){
                                console.log('join room err: '+err);
                            }else{
                                cc.director.loadScene('gameScene');
                            }
                        })
                    }
                });
                this.node.destroy();
                break;
            default:
                console.log('click data:'+clickData);
                break;
        }
    },
    onToggle(event,clickData){
      switch (clickData){
          default:
              console.log('click data:'+clickData);
              break;
      }
    },

    start () {

    },

    // update (dt) {},
});
