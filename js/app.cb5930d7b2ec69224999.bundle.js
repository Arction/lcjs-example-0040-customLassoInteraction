(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,o)=>{const s=o(89),{lightningChart:n,ColorCSS:r,PointShape:i,SolidLine:l,SolidFill:a,Themes:c}=s,{createProgressiveTraceGenerator:u}=o(863),d=n().ChartXY({}).setTitle("Custom lasso interaction (drag Left mouse button)").setMouseInteractionRectangleFit(!1).setMouseInteractionRectangleZoom(!1),g=d.addPointSeries({pointShape:i.Circle}),h=d.addPointSeries({pointShape:i.Circle}).setCursorEnabled(!1).setMouseInteractions(!1).setPointFillStyle(new a({color:r("blue")})),S=d.addPolygonSeries().setCursorEnabled(!1).setMouseInteractions(!1).add([]).setFillStyle(new a({color:r("gray").setA(10)})).setStrokeStyle(new l({thickness:1,fillStyle:new a({color:r("gray")})})).setVisible(!1);u().setNumberOfPoints(1e4).generate().toPromise().then((e=>{g.add(e);const t=[],o=[];let s;d.onSeriesBackgroundMouseDrag(((e,t,r)=>{if(0!==r)return;const i=d.translateCoordinate(t,d.coordsAxis);o.push(i),s=s||setTimeout(n,25)})),d.onSeriesBackgroundMouseDragStart(((e,s,n)=>{0===n&&(t.length=0,o.length=0,h.clear(),S.setVisible(!1),g.setCursorEnabled(!1))})),d.onSeriesBackgroundMouseDragStop((()=>{g.setCursorEnabled(!0)}));const n=()=>{const n=t.length,i=o.length;if(i>0&&n+i>=3){const s=n>0?t[0]:o[0];let i=n>0?t[n-1]:o[1];for(let t=0;t<o.length;t+=1){const n=o[t];for(const t of e)r(t,s,i,n)&&h.add(t);i=n}t.push.apply(t,o),o.length=0,S.setVisible(!0).setDimensions(t)}s=void 0},r=(e,t,o,s)=>{const n=e.x-s.x,r=e.y-s.y,i=s.x-o.x,l=o.y-s.y,a=l*n+i*r,c=(s.y-t.y)*n+(t.x-s.x)*r,u=l*(t.x-s.x)+i*(t.y-s.y);return u<0?a<=0&&c<=0&&a+c>=u:a>=0&&c>=0&&a+c<=u}}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);