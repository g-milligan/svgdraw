var svgDraw = (function () {
  return {
    init:function(args){
      var ret={status:'ok', setinto:{}};
      //function to get a setinto element
      var getSI=function(eName){
        var theElem;
        if(args.hasOwnProperty('setinto')){
          if(args['setinto'].hasOwnProperty(eName)){
            theElem=jQuery(args['setinto'][eName]);
            if(theElem.length<1){
              theElem=undefined;
              ret['status']='error, no element found for "selector", svgDraw.init({"setinto":{"'+eName+'":"selector"}});';
            }else{
              theElem.addClass('svgdraw-setinto-'+eName);
              ret['setinto'][eName]=theElem;
            }
          }else{
            ret['status']='error, required "'+eName+'", svgDraw.init({"setinto":{"'+eName+'":...}});';
          }
        }else{
          ret['status']='error, required "setinto", svgDraw.init({"setinto":...});';
        } return theElem;
      };
      //setinto canvas element
      var setintoCanvas=getSI('canvas'); var setintoToolbarj;
      //if setinto canvas element is available
      if(ret['status']==='ok'){ setintoToolbar=getSI('toolbar'); }
      //if all setinto elements are available
      if(ret['status']==='ok'){
        setintoCanvas.append('<div class="svgdraw-layers"></div>');
        var layersWrap=setintoCanvas.children('.svgdraw-layers:first');
        //init canvas function
        var initCanvas=function(theCanvas){
          //***
        };
        //add layer function
        ret['addLayer']=function(layerArgs){
          if(layerArgs==undefined){ layerArgs={}; }
          var layerCount=layersWrap.children('.svgdraw-layer').length;
          var layerName='Layer '+(layerCount+1), layerIndex=layerCount, copyOfIndex=-1;
          if(layerArgs.hasOwnProperty('name')){ layerName=layerArgs['name']; }
          if(layerArgs.hasOwnProperty('index')){ layerIndex=layerArgs['index']; }
          if(layerArgs.hasOwnProperty('copy_of_index')){ copyOfIndex=layerArgs['copy_of_index']; }
          var newLayer;
          if(copyOfIndex<0){
            //create brand new layer
            layersWrap.append('<div class="svgdraw-layer"></div>');
            newLayer=layersWrap.children('.svgdraw-layer:last');
            newLayer.append('<div class="workspace"><div class="view"><canvas>Sad canvas :(</canvas></div></div>');
            newLayer.append('<div class="x-ruler"></div><div class="y-ruler"></div>');
            var xRuler=newLayer.children('.x-ruler:last');
            var yRuler=newLayer.children('.y-ruler:last');
            var workspace=newLayer.children('.workspace:last');
            initCanvas(workspace.find('.view canvas:first'));
          }else{
            //clone from existing layer
            var copyLayer=layersWrap.children('.svgdraw-layer:eq('+copyOfIndex+')');
            if(copyLayer.length>0){
              newLayer=copyLayer.clone();
              layersWrap.append(newLayer);
              newLayer=layersWrap.children('.svgdraw-layer:last');
            }
          }
          if(newLayer!=undefined){
            //if layer index position is not at the end
            if(layerIndex<layerCount){
              //if the layer index position is not too low
              if(layerIndex>-1){
                //move the layer to the correct index position
                if(layerIndex===0){
                  layersWrap.prepend(newLayer); //move to first
                }else{
                  layersWrap.children('.svgdraw-layer:eq('+(layerIndex-1)+')').after(newLayer); //move after some other layer
                }
              }
            }
            //name the layer
            newLayer.attr('name',layerName);
          }
        };
        ret['addLayer']();
      }
      //window resize event
      if(!document.hasOwnProperty('svgdraw_resize_init')){
        jQuery(window).ready(function(){
          var handleSvgResize=function(){
            var setintoWraps=jQuery('.svgdraw-setinto-canvas');
            setintoWraps.each(function(){
              //***
            });
          };
          var svgdraw_resize_timeout;
          jQuery(window).resize(function(){
            clearTimeout(svgdraw_resize_timeout);
            svgdraw_resize_timeout=setTimeout(function(){
              handleSvgResize();
            },100);
          });
          handleSvgResize();
        });
      }
      return ret;
    }
  };
}());
