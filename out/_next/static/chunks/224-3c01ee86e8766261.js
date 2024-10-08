"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{6808:function(e,t,r){r.d(t,{I:function(){return i}});var n=Symbol.for("apollo.hook.wrappers");function i(e,t,r){var i=r.queryManager,o=i&&i[n],a=o&&o[e];return a?a(t):t}},2748:function(e,t,r){r.d(t,{aM:function(){return P}});var n=r(6200),i=r(2257),o=r(9285),a=r.t(o,2),u=r(9394),s=!1,c=a.useSyncExternalStore||function(e,t,r){var n=t();!1===globalThis.__DEV__||s||n===t()||(s=!0,!1!==globalThis.__DEV__&&i.kG.error(60));var a=o.useState({inst:{value:n,getSnapshot:t}}),c=a[0].inst,f=a[1];return u.JC?o.useLayoutEffect(function(){Object.assign(c,{value:n,getSnapshot:t}),l(c)&&f({inst:c})},[e,n,t]):Object.assign(c,{value:n,getSnapshot:t}),o.useEffect(function(){return l(c)&&f({inst:c}),e(function(){l(c)&&f({inst:c})})},[e]),n};function l(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var f=r(6628),d=r(9466),v=r(1028),p=r(7828),b=r(7473),h=r(9058),g=r(3251),y=r(5292),k=r(2086),S=r(2187),w=r(6808),D=Object.prototype.hasOwnProperty;function O(){}var _=Symbol();function P(e,t){return void 0===t&&(t=Object.create(null)),(0,w.I)("useQuery",m,(0,g.x)(t&&t.client))(e,t)}function m(e,t){var r,i,a,u,s,l,d,p,y,k,S,w,P,m,F,G,I,R,V,x,z,J,L,N,A=(s=(0,g.x)(t.client),d=!!(l=o.useContext((0,v.K)()).renderPromises),p=s.disableNetworkFetches,y=!1!==t.ssr&&!t.skip,k=t.partialRefetch,void 0===(r=t)&&(r={}),i=r.skip,r.ssr,r.onCompleted,r.onError,a=r.defaultOptions,u=(0,n._T)(r,["skip","ssr","onCompleted","onError","defaultOptions"]),S=function(t){var r=Object.assign(u,{query:e});return d&&("network-only"===r.fetchPolicy||"cache-and-network"===r.fetchPolicy)&&(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),i?(r.initialFetchPolicy=r.initialFetchPolicy||r.fetchPolicy||M(a,s.defaultOptions),r.fetchPolicy="standby"):r.fetchPolicy||(r.fetchPolicy=(null==t?void 0:t.options.initialFetchPolicy)||M(a,s.defaultOptions)),r},m=(P=(w=function(e,t,r,i,a){function u(n){var o;return(0,h.Vp)(t,h.n_.Query),{client:e,query:t,observable:i&&i.getSSRObservable(a())||e.watchQuery(E(void 0,e,r,a())),resultData:{previousData:null===(o=null==n?void 0:n.resultData.current)||void 0===o?void 0:o.data}}}var s=o.useState(u),c=s[0],l=s[1];function f(e){Object.assign(c.observable,((t={})[_]=e,t));var t,r,i=c.resultData;l((0,n.pi)((0,n.pi)({},c),{query:e.query,resultData:Object.assign(i,{previousData:(null===(r=i.current)||void 0===r?void 0:r.data)||i.previousData,current:void 0})}))}if(e!==c.client||t!==c.query){var d=u(c);return l(d),[d,f]}return[c,f]}(s,e,t,l,S))[0]).observable,F=P.resultData,G=w[1],I=S(m),m[_]&&!(0,f.D)(m[_],I)&&(m.reobserve(E(m,s,t,I)),F.previousData=(null===(R=F.current)||void 0===R?void 0:R.data)||F.previousData,F.current=void 0),m[_]=I,V=o.useMemo(function(){return{refetch:m.refetch.bind(m),reobserve:m.reobserve.bind(m),fetchMore:m.fetchMore.bind(m),updateQuery:m.updateQuery.bind(m),startPolling:m.startPolling.bind(m),stopPolling:m.stopPolling.bind(m),subscribeToMore:m.subscribeToMore.bind(m)}},[m]),l&&y&&(l.registerSSRObservable(m),m.getCurrentResult().loading&&l.addObservableQueryPromise(m)),{result:(x={onCompleted:t.onCompleted||O,onError:t.onError||O},z=o.useRef(x),o.useEffect(function(){z.current=x}),J=(d||p)&&!1===t.ssr&&!t.skip?T:t.skip||"standby"===I.fetchPolicy?q:void 0,L=F.previousData,N=o.useMemo(function(){return J&&j(J,L,m,s)},[s,m,J,L]),c(o.useCallback(function(e){if(d)return function(){};var t=function(){var t=F.current,r=m.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,f.D)(t.data,r.data)||Q(r,F,m,s,k,e,z.current)},r=function(i){if(n.current.unsubscribe(),n.current=m.resubscribeAfterError(t,r),!D.call(i,"graphQLErrors"))throw i;var o=F.current;(!o||o&&o.loading||!(0,f.D)(i,o.error))&&Q({data:o&&o.data,error:i,loading:!1,networkStatus:b.Ie.error},F,m,s,k,e,z.current)},n={current:m.subscribe(t,r)};return function(){setTimeout(function(){return n.current.unsubscribe()})}},[p,d,m,F,k,s]),function(){return N||C(F,m,z.current,k,s)},function(){return N||C(F,m,z.current,k,s)})),obsQueryFields:V,observable:m,resultData:F,client:s,onQueryExecuted:G}),K=A.result,B=A.obsQueryFields;return o.useMemo(function(){return(0,n.pi)((0,n.pi)({},K),B)},[K,B])}function E(e,t,r,n){var i=[],o=t.defaultOptions.watchQuery;return o&&i.push(o),r.defaultOptions&&i.push(r.defaultOptions),i.push((0,y.o)(e&&e.options,n)),i.reduce(d.J)}function Q(e,t,r,o,a,u,s){var c=t.current;c&&c.data&&(t.previousData=c.data),!e.error&&(0,k.O)(e.errors)&&(e.error=new p.cA({graphQLErrors:e.errors})),t.current=j(e.partial&&a&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==r.options.fetchPolicy?(r.refetch(),(0,n.pi)((0,n.pi)({},e),{loading:!0,networkStatus:b.Ie.refetch})):e,t.previousData,r,o),u(),function(e,t,r){if(!e.loading){var n=(0,k.O)(e.errors)?new p.cA({graphQLErrors:e.errors}):e.error;Promise.resolve().then(function(){n?r.onError(n):e.data&&t!==e.networkStatus&&e.networkStatus===b.Ie.ready&&r.onCompleted(e.data)}).catch(function(e){!1!==globalThis.__DEV__&&i.kG.warn(e)})}}(e,null==c?void 0:c.networkStatus,s)}function C(e,t,r,n,i){return e.current||Q(t.getCurrentResult(),e,t,i,n,function(){},r),e.current}function M(e,t){var r;return(null==e?void 0:e.fetchPolicy)||(null===(r=null==t?void 0:t.watchQuery)||void 0===r?void 0:r.fetchPolicy)||"cache-first"}function j(e,t,r,i){var o=e.data,a=(e.partial,(0,n._T)(e,["data","partial"]));return(0,n.pi)((0,n.pi)({data:o},a),{client:i,observable:r,variables:r.variables,called:e!==T&&e!==q,previousData:t})}var T=(0,S.J)({loading:!0,data:void 0,error:void 0,networkStatus:b.Ie.loading}),q=(0,S.J)({loading:!1,data:void 0,error:void 0,networkStatus:b.Ie.ready})},9058:function(e,t,r){r.d(t,{Vp:function(){return d},n_:function(){return i}});var n,i,o,a=r(2257),u=r(1874),s=r(6755),c=r(7353);function l(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}function f(e){o||(o=new u.s(s.Q.parser||1e3));var t,r,n=o.get(e);if(n)return n;(0,a.kG)(!!e&&!!e.kind,62,e);for(var c=[],l=[],f=[],d=[],v=0,p=e.definitions;v<p.length;v++){var b=p[v];if("FragmentDefinition"===b.kind){c.push(b);continue}if("OperationDefinition"===b.kind)switch(b.operation){case"query":l.push(b);break;case"mutation":f.push(b);break;case"subscription":d.push(b)}}(0,a.kG)(!c.length||l.length||f.length||d.length,63),(0,a.kG)(l.length+f.length+d.length<=1,64,e,l.length,d.length,f.length),r=l.length?i.Query:i.Mutation,l.length||f.length||(r=i.Subscription);var h=l.length?l:f.length?f:d;(0,a.kG)(1===h.length,65,e,h.length);var g=h[0];t=g.variableDefinitions||[];var y={name:g.name&&"Name"===g.name.kind?g.name.value:"data",type:r,variables:t};return o.set(e,y),y}function d(e,t){var r=f(e),n=l(t),i=l(r.type);(0,a.kG)(r.type===t,66,n,n,i)}(n=i||(i={}))[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription",f.resetCache=function(){o=void 0},!1!==globalThis.__DEV__&&(0,c.zP)("parser",function(){return o?o.size:0})},5008:function(e,t,r){r.d(t,{_:function(){return n}});function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);