(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,o)=>{const s=o(89),{lightningChart:n,ColorCSS:r,PointShape:i,SolidLine:a,SolidFill:l,Themes:c}=s,{createProgressiveTraceGenerator:d}=o(863),u=n().ChartXY({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Custom lasso interaction (drag Left mouse button)").setMouseInteractionRectangleFit(!1).setMouseInteractionRectangleZoom(!1),h=u.addPointSeries({pointShape:i.Circle}),g=u.addPointSeries({pointShape:i.Circle}).setCursorEnabled(!1).setMouseInteractions(!1).setPointFillStyle(new l({color:r("blue")})),S=u.addPolygonSeries().setCursorEnabled(!1).setMouseInteractions(!1).add([]).setFillStyle(new l({color:r("gray").setA(10)})).setStrokeStyle(new a({thickness:1,fillStyle:new l({color:r("gray")})})).setVisible(!1);d().setNumberOfPoints(1e4).generate().toPromise().then((e=>{h.add(e);const t=[],o=[];let s;u.onSeriesBackgroundMouseDrag(((e,t,r)=>{if(0!==r)return;const i=u.translateCoordinate(t,u.coordsAxis);o.push(i),s=s||setTimeout(n,25)})),u.onSeriesBackgroundMouseDragStart(((e,s,n)=>{0===n&&(t.length=0,o.length=0,g.clear(),S.setVisible(!1),h.setCursorEnabled(!1))})),u.onSeriesBackgroundMouseDragStop((()=>{h.setCursorEnabled(!0)}));const n=()=>{const n=t.length,i=o.length;if(i>0&&n+i>=3){const s=n>0?t[0]:o[0];let i=n>0?t[n-1]:o[1];for(let t=0;t<o.length;t+=1){const n=o[t];for(const t of e)r(t,s,i,n)&&g.add(t);i=n}t.push.apply(t,o),o.length=0,S.setVisible(!0).setDimensions(t)}s=void 0},r=(e,t,o,s)=>{const n=e.x-s.x,r=e.y-s.y,i=s.x-o.x,a=o.y-s.y,l=a*n+i*r,c=(s.y-t.y)*n+(t.x-s.x)*r,d=a*(t.x-s.x)+i*(t.y-s.y);return d<0?l<=0&&c<=0&&l+c>=d:l>=0&&c>=0&&l+c<=d}}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);