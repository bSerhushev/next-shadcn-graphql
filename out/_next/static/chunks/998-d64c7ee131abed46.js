"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{2113:function(e,t,r){r.d(t,{qZ:function(){return d},jo:function(){return c},fA:function(){return h},k$:function(){return f},JO:function(){return l}});var n=r(6200),s=r(6628);function i(e){var t=Promise.resolve(e);return t.status="fulfilled",t.value=e,t}var o=r(309),u=Symbol(),a=Symbol();function l(e){var t,r=((t={toPromise:function(){var e;return("fulfilled"===(e=r[u]).promise.status?e.promise:r[a]).then(function(){return r})}})[u]=e,t[a]=e.promise,t);return r}function c(e){(0,o.kG)(!e||u in e,61)}function h(e){return e[u]}function f(e,t){e[a]=t}var p=["canonizeResults","context","errorPolicy","fetchPolicy","refetchWritePolicy","returnPartialData"],d=function(){function e(e,t){var r=this;this.key={},this.listeners=new Set,this.references=0,this.softReferences=0,this.handleNext=this.handleNext.bind(this),this.handleError=this.handleError.bind(this),this.dispose=this.dispose.bind(this),this.observable=e,t.onDispose&&(this.onDispose=t.onDispose),this.setResult(),this.subscribeToQuery();var n=function(){var e;r.references||(r.autoDisposeTimeoutId=setTimeout(r.dispose,null!==(e=t.autoDisposeTimeoutMs)&&void 0!==e?e:3e4))};this.promise.then(n,n)}return Object.defineProperty(e.prototype,"disposed",{get:function(){return this.subscription.closed},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"watchQueryOptions",{get:function(){return this.observable.options},enumerable:!1,configurable:!0}),e.prototype.reinitialize=function(){var e=this.observable,t=this.watchQueryOptions.fetchPolicy,r="no-cache"===t||"standby"===t;try{if(r?e.silentSetOptions({fetchPolicy:"standby"}):(e.resetLastResults(),e.silentSetOptions({fetchPolicy:"cache-first"})),this.subscribeToQuery(),r)return;e.resetDiff(),this.setResult()}finally{e.silentSetOptions({fetchPolicy:t})}},e.prototype.retain=function(){var e=this;this.references++,clearTimeout(this.autoDisposeTimeoutId);var t=!1;return function(){t||(t=!0,e.references--,setTimeout(function(){e.references||e.dispose()}))}},e.prototype.softRetain=function(){var e=this;this.softReferences++;var t=!1;return function(){t||(t=!0,e.softReferences--,setTimeout(function(){e.softReferences||e.references||e.dispose()}))}},e.prototype.didChangeOptions=function(e){var t=this;return p.some(function(r){return r in e&&!(0,s.D)(t.watchQueryOptions[r],e[r])})},e.prototype.applyOptions=function(e){var t=this.watchQueryOptions,r=t.fetchPolicy,s=t.canonizeResults;return"standby"===r&&r!==e.fetchPolicy?this.initiateFetch(this.observable.reobserve(e)):(this.observable.silentSetOptions(e),s!==e.canonizeResults&&(this.result=(0,n.pi)((0,n.pi)({},this.result),this.observable.getCurrentResult()),this.promise=i(this.result))),this.promise},e.prototype.listen=function(e){var t=this;return this.listeners.add(e),function(){t.listeners.delete(e)}},e.prototype.refetch=function(e){return this.initiateFetch(this.observable.refetch(e))},e.prototype.fetchMore=function(e){return this.initiateFetch(this.observable.fetchMore(e))},e.prototype.dispose=function(){this.subscription.unsubscribe(),this.onDispose()},e.prototype.onDispose=function(){},e.prototype.handleNext=function(e){var t;if("pending"===this.promise.status)void 0===e.data&&(e.data=this.result.data),this.result=e,null===(t=this.resolve)||void 0===t||t.call(this,e);else{if(e.data===this.result.data&&e.networkStatus===this.result.networkStatus)return;void 0===e.data&&(e.data=this.result.data),this.result=e,this.promise=i(e),this.deliver(this.promise)}},e.prototype.handleError=function(e){var t,r;(this.subscription.unsubscribe(),this.subscription=this.observable.resubscribeAfterError(this.handleNext,this.handleError),"pending"===this.promise.status)?null===(t=this.reject)||void 0===t||t.call(this,e):(this.promise=((r=Promise.reject(e)).catch(function(){}),r.status="rejected",r.reason=e,r),this.deliver(this.promise))},e.prototype.deliver=function(e){this.listeners.forEach(function(t){return t(e)})},e.prototype.initiateFetch=function(e){var t=this;return this.promise=this.createPendingPromise(),this.promise.catch(function(){}),e.then(function(){setTimeout(function(){var e;"pending"===t.promise.status&&(t.result=t.observable.getCurrentResult(),null===(e=t.resolve)||void 0===e||e.call(t,t.result))})}).catch(function(){}),e},e.prototype.subscribeToQuery=function(){var e=this;this.subscription=this.observable.filter(function(t){return!(0,s.D)(t.data,{})&&!(0,s.D)(t,e.result)}).subscribe(this.handleNext,this.handleError)},e.prototype.setResult=function(){var e=this.observable.getCurrentResult(!1);(0,s.D)(e,this.result)||(this.result=e,this.promise=e.data&&(!e.partial||this.watchQueryOptions.returnPartialData)?i(e):this.createPendingPromise())},e.prototype.createPendingPromise=function(){var e,t=this;return"status"in(e=new Promise(function(e,r){t.resolve=e,t.reject=r}))||(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e},e}()},9599:function(e,t,r){r.d(t,{Y:function(){return a}});var n=r(6238),s=r(9394),i=r(2113),o=function(){function e(e){void 0===e&&(e=Object.create(null)),this.queryRefs=new n.B(s.mr),this.options=e}return e.prototype.getQueryRef=function(e,t){var r=this.queryRefs.lookupArray(e);return r.current||(r.current=new i.qZ(t(),{autoDisposeTimeoutMs:this.options.autoDisposeTimeoutMs,onDispose:function(){delete r.current}})),r.current},e.prototype.add=function(e,t){this.queryRefs.lookupArray(e).current=t},e}(),u=Symbol.for("apollo.suspenseCache");function a(e){var t;return e[u]||(e[u]=new o(null===(t=e.defaultOptions.react)||void 0===t?void 0:t.suspense)),e[u]}},1998:function(e,t,r){r.d(t,{fe:function(){return F},e$:function(){return $},h4:function(){return I}});var n=r(4614),s=r(3761),i=r(2559),o=r(3251),u=r(34),a=r(9090),l=r(1251),c=(r(696),r(373),r(5484),r(7469)),h=r(4141),f=r(4044),p=r(2265),d=r(2113),y=r(9599);n.i,n.i,n.i;var m={pkg:"@apollo/client-react-streaming"},v=Symbol.for("apollo.source_package"),b=class extends s.h{static info=m;[v];constructor(e){super(e);let t=this.constructor.info;this[v]=`${t.pkg}:InMemoryCache`}},g=(0,p.createContext)(null);function Q(e){return{...e,query:(0,i.Ps)((0,c.S)((0,i.Ps)(e.query)))}}function S(e){let t,r;let n=(0,o.x)();(r="__transportedQueryRef"in e)&&([e,t]=function(e,t){let r=Q(e.options),n=[r.query,(0,h.B)(r.variables),e.queryKey];return!0===e.__transportedQueryRef&&(e.__transportedQueryRef=(0,d.JO)((0,y.Y)(t).getQueryRef(n,()=>t.watchQuery(r)))),[e.__transportedQueryRef,n]}(e,n)),(0,d.jo)(e);let s=(0,d.fA)(e);return(0,p.useEffect)(()=>{r&&t&&s.disposed&&(0,y.Y)(n).add(t,s)}),(0,p.useEffect)(()=>{if(r)return s.softRetain()},[r,s]),e}var w={useFragment:e=>R(e,["data","complete","missing"]),useQuery:e=>R(e,["data","loading","networkStatus","called"]),useSuspenseQuery:e=>R(e,["data","networkStatus"]),useReadQuery:e=>R(t=>e(S(t)),["data","networkStatus"]),useQueryRefHandlers:e=>R(t=>e(S(t)),[])};function R(e,t){return(...r)=>{let n=e(...r);if(0==t.length)return n;let s={};for(let e of t)s[e]=n[e];return{...n,...function(e){let t=(0,p.useContext)(g);if(!t)throw Error("useTransportValue must be used within a streaming-specific ApolloProvider");let r=t.useStaticValueRef(e),n=(0,p.useSyncExternalStore)(()=>()=>{},()=>e,()=>r.current);return n===e&&(r.current=void 0),n}(s)}}}function k(e,t,r){if(e[v]!==`${t.pkg}:${r}`)throw Error(`When using \`${r}\` in streaming SSR, you must use the \`${r}\` export provided by \`"${t.pkg}"\`.`)}function P(e){return e.queryManager}var O=Symbol.for("apollo.hook.wrappers"),x=class extends u.f{static info=m;[v];constructor(e){super(e);let t=this.constructor.info;this[v]=`${t.pkg}:ApolloClient`,k(this.cache,t,"InMemoryCache")}},D=class extends x{constructor(e){super(e),this.onQueryStarted=this.onQueryStarted.bind(this),P(this)[O]=w}simulatedStreamingQueries=new Map;transportedQueryOptions=new Map;identifyUniqueQuery(e){let t=this.documentTransform.transformDocument(e.query),{serverQuery:r}=P(this).getDocumentInfo(t);if(!r)throw Error("could not identify unique query");let n=(0,h.B)(e.variables||{}),s=[(0,c.S)(r),n];return{cacheKey:JSON.stringify(s),cacheKeyArr:s}}onQueryStarted({options:e,id:t}){let r=Q(e),{cacheKey:n,cacheKeyArr:s}=this.identifyUniqueQuery(r);this.transportedQueryOptions.set(t,r);let i=P(this);if(!i.inFlightLinkObservables.peekArray(s)?.observable){let e,o;let u=()=>{i.fetchCancelFns.get(n)===o&&i.fetchCancelFns.delete(n),i.inFlightLinkObservables.removeArray(s),this.simulatedStreamingQueries.get(t)===e&&this.simulatedStreamingQueries.delete(t)},l=new Promise((n,s)=>{this.simulatedStreamingQueries.set(t,e={resolve:n,reject:s,options:r})});l.then(u,u);let c=new a.y(e=>{l.then(t=>{e.next(t),e.complete()}).catch(t=>{e.error(t)})});i.inFlightLinkObservables.lookupArray(s).observable=c,i.fetchCancelFns.set(n,o=e=>{let{reject:r}=this.simulatedStreamingQueries.get(t)??{};r&&r(e),u()})}}onQueryProgress=e=>{let t=this.simulatedStreamingQueries.get(e.id);if("data"===e.type){t?.resolve?.({data:e.result.data});let r=this.transportedQueryOptions.get(e.id);r&&this.cache.writeQuery({query:r.query,data:e.result.data,variables:r.variables})}else"error"===e.type?(t&&(this.simulatedStreamingQueries.delete(e.id),f.kG.debug("Query failed on server, rerunning in browser:",t.options),this.rerunSimulatedQuery(t)),this.transportedQueryOptions.delete(e.id)):"complete"===e.type&&this.transportedQueryOptions.delete(e.id)};rerunSimulatedQueries=()=>{for(let[e,t]of this.simulatedStreamingQueries)this.simulatedStreamingQueries.delete(e),f.kG.debug("streaming connection closed before server query could be fully transported, rerunning:",t.options),this.rerunSimulatedQuery(t)};rerunSimulatedQuery=e=>{let t=P(this),r=t.generateQueryId();t.fetchQuery(r,{...e.options,query:t.transform(e.options.query),context:{...e.options.context,queryDeduplication:!1}}).finally(()=>t.stopQuery(r)).then(e.resolve,e.reject)}},q=class extends D{},C=class extends q{},E=Symbol.for("ApolloClientSingleton"),T=Symbol.for("ApolloSSRDataTransport");function A(e){return e}var j={},M=r(5475),_={pkg:"@apollo/experimental-nextjs-app-support",client:"ApolloClient",cache:"InMemoryCache"},F=class extends C{static info=_},I=class extends b{static info=_},$=function(e){let t=({makeClient:r,children:n,...s})=>{let i=(0,p.useRef)(void 0);return i.current||(i.current=window[E]??=r(),k(i.current,t.info,"ApolloClient")),p.createElement(l.e,{client:i.current},p.createElement(e,{onQueryEvent:e=>"started"===e.type?i.current.onQueryStarted(e):i.current.onQueryProgress(e),rerunSimulatedQueries:i.current.rerunSimulatedQueries,registerDispatchRequestStarted:i.current.watchQueryQueue?.register,...s},n))};return t.info=m,t}((({reviveFromStream:e=A})=>function({children:t,onQueryEvent:r,rerunSimulatedQueries:n}){let s=(0,p.useRef)({});!function({onQueryEvent:e,onRehydrate:t,revive:r}){!function(e,t){let r=window[e]||[];Array.isArray(r)&&(window[e]={push:(...e)=>{for(let r of e)t(r)}},window[e].push(...r))}(T,n=>{let s=r(n);for(let r of(f.kG.debug("received data from the server:",s),t(s.rehydrate),s.events))e(r)})}({onQueryEvent:r,onRehydrate(e){Object.assign(s.current,e)},revive:e}),(0,p.useEffect)(()=>{if("complete"!==document.readyState)return window.addEventListener("load",n,{once:!0}),()=>window.removeEventListener("load",n);n()},[n]);let i=(0,p.useCallback)(function(e){let t=(0,p.useId)(),r=s.current,n=(0,p.useRef)(j);return n.current===j&&(r&&t in r?(n.current=r[t],delete r[t]):n.current=e),n},[]);return p.createElement(g.Provider,{value:(0,p.useMemo)(()=>({useStaticValueRef:i}),[i])},t)})({useInsertHtml:()=>(0,p.useContext)(M.ServerInsertedHTMLContext)||(()=>{})}));$.info=_}}]);