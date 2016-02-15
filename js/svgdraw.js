var svgDraw = (function () {
  return {
    init:function(args){
      var ret={status:'ok', setinto:{}};
      var getSvgPath=function(viewBox, path){ return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="'+viewBox+'"><path d="'+path+'"></path></svg>'; };
      var svgCrosshair=getSvgPath("0 0 1024 1024", "M537 274.5c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5v212.5h-237.5c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5h237.5v236.725c0 6.9 5.6 12.5 12.5 12.5s12.5-5.6 12.5-12.5v-236.725h236.725c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5h-236.725v-212.5zM901.050 487h-65.325c-12.2-159.25-139.475-286.525-298.725-298.725v-63.775c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5v62.5c-170.75 0-310.875 132.475-323.725 300h-62.225c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5h60.95c0 179.2 145.8 325 325 325v62.5c0 6.9 5.6 12.5 12.5 12.5s12.5-5.6 12.5-12.5v-63.775c167.525-12.85 300-152.975 300-323.725h64.050c6.9 0 12.5-5.6 12.5-12.5s-5.575-12.5-12.5-12.5zM512 812c-165.425 0-300-134.575-300-300s134.575-300 300-300 300 134.575 300 300-134.575 300-300 300z");
      var svgHandopen=getSvgPath("0 0 408 448","M216.591 73.143q-9.035 0-15.518 6.482t-6.482 15.518v128.857h-6.286v-103.714q0-9.035-6.482-15.518t-15.518-6.482-15.518 6.482-6.482 15.518v154l-30.25-40.268q-7.464-10.017-20.036-10.017-10.411 0-17.777 7.366t-7.366 17.776q0 8.446 5.107 15.125l75.428 100.571q7.464 10.017 20.036 10.017h135.142q6.678 0 11.982-4.321t6.678-11l14.929-79.553q0.982-6.286 0.982-11.589v-97.821q0-9.035-6.482-15.518t-15.518-6.482-15.518 6.482-6.482 15.518v53.429h-6.286v-103.714q0-9.035-6.482-15.518t-15.518-6.482-15.518 6.482-6.482 15.518v103.714h-6.286v-128.857q0-9.035-6.482-15.518t-15.518-6.482zM216.591 48q13.357 0 24.652 6.973t17.384 18.955q3.732-0.786 8.25-0.786 19.446 0 33.295 13.848t13.848 33.295v3.339q20.625-1.179 35.456 12.572t14.83 34.375v97.821q0 7.857-1.571 16.303l-14.929 79.357q-2.75 15.518-15.027 25.732t-28.188 10.214h-135.142q-11.786 0-22.491-5.402t-17.776-14.633l-75.428-100.571q-10.017-13.357-10.017-30.25 0-20.821 14.732-35.553t35.553-14.732q15.321 0 25.143 6.678v-85.25q0-19.446 13.848-33.295t33.295-13.848q4.518 0 8.25 0.786 6.090-11.982 17.384-18.955t24.652-6.973z");
      var svgTools=getSvgPath("0 0 640 640","M149.596 242.814c23.181-17.993 42.391-5.609 68.027 24.075 2.904 3.326 6.776-0.571 8.959-2.482 2.184-1.936 36.036-32.363 37.675-33.778 1.663-1.464 3.649-4.195 1.017-7.246s-12.261-15.512-18.441-23.577c-44.872-58.696 122.753-98.506 96.991-99.126-13.079-0.348-65.669-0.944-73.514-0.125-31.842 3.374-71.826 33.132-91.952 46.981-26.307 18.093-36.161 28.591-37.774 30.054-7.445 6.528-1.191 21.518-14.693 33.356-14.27 12.508-23.156 3.054-31.419 10.3-4.119 3.624-15.561 12.187-18.862 15.090-3.276 2.879-3.872 7.769-0.522 11.689 0 0 31.346 34.647 34.003 37.701 2.631 3.054 9.704 5.634 14.096 1.762 4.394-3.848 15.66-13.751 17.571-15.436 1.936-1.663-1.24-21.419 8.834-29.236zM291.285 255.619c-2.977-3.451-6.651-3.524-9.854-0.696l-35.615 31.048c-2.779 2.482-3.151 7.048-0.644 9.928l205.846 234.239c4.791 5.56 13.129 6.13 18.664 1.316l24.099-20.153c5.484-4.816 6.056-13.253 1.266-18.787l-203.762-236.895zM565.754 155.923c-1.836-12.261-8.19-9.68-11.491-4.468-3.252 5.188-17.894 27.324-23.901 37.328-5.957 9.976-20.6 29.559-47.999 10.226-28.491-20.153-18.564-34.226-13.626-43.68 4.989-9.506 20.301-36.111 22.536-39.463 2.184-3.35-0.397-13.079-9.207-9.009-8.861 4.095-62.619 25.464-70.088 56.090-7.619 31.196 6.404 59.043-21.095 86.716l-33.306 34.746 33.456 38.916 41.051-38.989c9.803-9.828 30.676-19.384 49.589-15.090 40.529 9.183 62.619-6.056 75.969-31.196 11.962-22.511 9.976-69.865 8.116-82.126zM139.817 494.997c-5.162 5.213-5.162 13.65 0 18.838l23.602 23.082c5.162 5.188 13.353 3.002 18.514-2.184l121.786-119.75-37.328-42.514-126.575 122.529z");
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
      var setintoCanvas=getSI('canvas'); var setintoToolbar;
      //if setinto canvas element is available
      if(ret['status']==='ok'){ setintoToolbar=getSI('toolbar'); }
      //if all setinto elements are available
      if(ret['status']==='ok'){
        //create toolbar
        setintoToolbar.append('<div class="tools-content"><div class="tools-title"><span class="icon">'+svgTools+'</span><span class="toggle-open"></span></div><div class="svgdraw-tools"></div></div>');
        var toolsContent=setintoToolbar.children('.tools-content:first');
        var toolsTitle=setintoToolbar.find('.tools-title:first');
        var toggleToolOpen=toolsTitle.children('.toggle-open:first');
        var toolsWrap=setintoToolbar.find('.svgdraw-tools:first');
        //hover tool bar
        toolsContent.hover(
          function(){
            jQuery(this).addClass('over');
          },function(){ 
            jQuery(this).removeClass('over');
          });
        //open/close tool bar
        toggleToolOpen.click(function(){
          if(toolsContent.hasClass('closed')){
            toolsContent.removeClass('closed');
          }else{
            toolsContent.addClass('closed');
          }
        });
        //function to create a new tool bar button
        var newTool=function(toolArgs){
          var toolBtn;
          if(toolArgs.hasOwnProperty('name')){
            toolsWrap.append('<div class="svgdraw-tool"></div>');
            toolBtn=toolsWrap.children('.svgdraw-tool:last');
            toolBtn.attr('name',toolArgs['name']);
            toolBtn.append('<div class="icon"></div>');
            var icon=toolBtn.children('.icon:first');
            if(toolArgs.hasOwnProperty('icon')){ icon.append(toolArgs['icon']); }
            if(toolArgs.hasOwnProperty('ondeactivate')){ toolBtn[0]['svgdraw_ondeactivate']=function(){ toolArgs['ondeactivate'](); }; }
            toolBtn.mousedown(function(){
              jQuery(this).addClass('down');
            });
            toolBtn.hover(function(){}, function(){
              jQuery(this).removeClass('down');
            });
            toolBtn.mouseup(function(){
              jQuery(this).parent().children('.active').not(jQuery(this)).each(function(){
                jQuery(this).removeClass('active');
                if(jQuery(this)[0].hasOwnProperty('svgdraw_ondeactivate')){
                  jQuery(this)[0]['svgdraw_ondeactivate']();
                }
              });
              if(toolArgs.hasOwnProperty('onactivate')){
                if(!jQuery(this).hasClass('active')){
                  jQuery(this).addClass('active');
                  toolArgs['onactivate']();
                }
              }
              jQuery(this).removeClass('down');
            });
          } return toolBtn;
        };
        //add buttons to the toolbar
        newTool({name:'point', icon:svgCrosshair,
          onactivate:function(){

          },
          ondeactivate:function(){

          }
        }).mouseup();
        newTool({name:'select', icon:svgHandopen,
          onactivate:function(){

          },
          ondeactivate:function(){

          }
        });
        //create first layer
        setintoCanvas.append('<div class="svgdraw-layers"></div>');
        var layersWrap=setintoCanvas.children('.svgdraw-layers:first');
        //init canvas function
        var initCanvas=function(theCanvas){
          if(theCanvas.length>0 && !theCanvas.hasClass('init')){
            theCanvas.addClass('init');
            //***
          }
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
