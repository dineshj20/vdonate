/*
UvumiTools Dropdown Menu v1.1.2 http://uvumi.com/tools/dropdown.html

Copyright (c) 2009 Uvumi LLC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var UvumiDropdown=new Class({Implements:Options,options:{clickToOpen:false,openDelay:150,closeDelay:500,duration:250,link:'cancel',transition:Fx.Transitions.linear,mode:'horizontal'},initialize:function(a,b){this.menu=a;this.setOptions(b);if(this.options.mode!='horizontal'&&this.options.mode!='vertical'){this.options.mode='horizontal'}if(Browser.Engine.webkit){window.addEvent('domready',this.domReady.delay(200,this))}else{window.addEvent('domready',this.domReady.bind(this))}},domReady:function(){this.menu=$(this.menu);if(!$defined(this.menu)){return false}if(this.menu.get('tag')!='ul'){this.menu=this.menu.getElement('ul');if(!$defined(this.menu)){return false}}if(this.menu.getStyle('direction')=='rtl'||$(document.body).getStyle('direction')=='rtl'){this.rtl=true;if(Browser.Engine.trident&&$(document.body).getStyle('direction')=='rtl'){this.menu.getParent().setStyle('direction','ltr');this.menu.setStyle('direction','rtl')}}this.menu.setStyles({visibility:'hidden',display:'block',overflow:'hidden',height:0,marginLeft:(Browser.Engine.trident?1:-1)});this.createSubmenu(this.menu);if(this.options.mode=='horizontal'){this.menu.getChildren('li').setStyles({'float':(this.rtl?'right':'left'),display:'block',top:0});var a=new Element('li',{html:"&nbsp;",styles:{clear:(this.rtl?'right':'left'),display:(Browser.Engine.trident?'inline':'block'),position:'relative',top:0,height:0,width:0,fontSize:0,lineHeight:0,margin:0,padding:0}}).inject(this.menu)}else{this.menu.getChildren('li').setStyles({display:'block',top:0})}this.menu.setStyles({height:'auto',overflow:'visible',visibility:'visible'});this.menu.getElements('a').setStyle('display',(Browser.Engine.trident?'inline-block':'block'))},createSubmenu:function(c){var d=c.getChildren('li');var f=0;d.each(function(a){a.setStyles({position:'relative',display:'block',top:-f,zIndex:1});f+=a.getSize().y;var b=a.getFirst('ul');if($defined(b)){c.getElements('ul').setStyle('display','none');if(c==this.menu&&this.options.mode=='horizontal'){a.addClass('submenu-down');var x=0;var y=a.getSize().y;this.options.link='cancel';a.store('animation',new Fx.Elements($$(b,b.getChildren('li')).setStyle('opacity',0),this.options))}else{a.addClass('submenu-left');var x=a.getSize().x-(this.rtl&&!Browser.Engine.trident?2:1)*a.getStyle('border-left-width').toInt();var y=-a.getStyle('border-bottom-width').toInt();this.options.link='chain';a.store('animation',new Fx.Elements($$(b,b.getChildren('li')).setStyle('opacity',0),this.options));f=a.getSize().y+a.getPosition(this.menu).y}b.setStyles({position:'absolute',top:y,opacity:0});c.getElements('ul').setStyle('display','block');if(this.rtl){b.setStyles({right:x,marginRight:-x})}else{b.setStyles({left:x,marginLeft:-x})}this.createSubmenu(b);if(this.options.clickToOpen){a.addEvent('mouseenter',function(){$clear(a.retrieve('closeDelay'))}.bind(this));a.getFirst('a').addEvent('click',function(e){e.stop();$clear(a.retrieve('closeDelay'));this.showChildList(a)}.bind(this))}else{a.addEvent('mouseenter',function(){$clear(a.retrieve('closeDelay'));a.store('openDelay',this.showChildList.delay(this.options.openDelay,this,a))}.bind(this))}a.addEvent('mouseleave',function(){$clear(a.retrieve('openDelay'));a.store('closeDelay',this.hideChildList.delay(this.options.closeDelay,this,a))}.bind(this))}},this)},showChildList:function(b){var c=b.getFirst('ul');var d=$$(c.getChildren('li'));var e=b.retrieve('animation');if(b.getParent('ul')!=this.menu||this.options.mode=='vertical'){e.cancel();var f={0:{opacity:1},1:{opacity:1}};if(this.rtl){f[0]['marginRight']=0}else{f[0]['marginLeft']=0}e.start(f);var g={}}else{var g={0:{opacity:1}}}d.each(function(a,i){g[i+1]={top:0,opacity:1}});b.setStyle('z-index',99);e.start(g)},hideChildList:function(b){var c=b.retrieve('animation');var d=b.getFirst('ul');var e=$$(d.getChildren('li'));var f=0;var g={};e.each(function(a,i){g[i+1]={top:-f,opacity:0};f+=a.getSize().y});b.setStyle('z-index',1);if(b.getParent('ul')!=this.menu||this.options.mode=='vertical'){g[1]=null;c.cancel();c.start(g);var h={0:{opacity:0},1:{opacity:0}};if(this.rtl){h[0]['marginRight']=-d.getSize().x}else{h[0]['marginLeft']=-d.getSize().x}c.start(h)}else{g[0]={opacity:0};c.start(g)}}});
