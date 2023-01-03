"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3092],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(m,".").concat(s)]||u[s]||c[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8048:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"kubernetes",Title:"Monitoring Kubernetes",sidebar_label:"Kubernetes Monitor"},i=void 0,o={unversionedId:"help/kubernetes",id:"help/kubernetes",title:"kubernetes",description:"Collect and monitor the general performance metrics of Kubernetes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/kubernetes.md",sourceDirName:"help",slug:"/help/kubernetes",permalink:"/en/docs/help/kubernetes",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/kubernetes.md",tags:[],version:"current",frontMatter:{id:"kubernetes",Title:"Monitoring Kubernetes",sidebar_label:"Kubernetes Monitor"},sidebar:"docs",previous:{title:"Docker Monitor",permalink:"/en/docs/help/docker"},next:{title:"Threshold alarm configuration",permalink:"/en/docs/help/alert_threshold"}},m={},p=[{value:"Pre-monitoring operations",id:"pre-monitoring-operations",level:2},{value:"method one:",id:"method-one",level:4},{value:"Configure parameters",id:"configure-parameters",level:3},{value:"Collect metrics",id:"collect-metrics",level:3},{value:"metric collection: nodes",id:"metric-collection-nodes",level:4},{value:"metric Collection: namespaces",id:"metric-collection-namespaces",level:4},{value:"metric collection: pods",id:"metric-collection-pods",level:4},{value:"metric Collection: services",id:"metric-collection-services",level:4}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance metrics of Kubernetes.")),(0,r.kt)("h2",{id:"pre-monitoring-operations"},"Pre-monitoring operations"),(0,r.kt)("p",null,"If you want to monitor the information in 'Kubernetes', you need to obtain an authorization token that can access the API Server, so that the collection request can obtain the corresponding information."),(0,r.kt)("p",null,"Refer to the steps to obtain token"),(0,r.kt)("h4",{id:"method-one"},"method one:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a service account and bind the default cluster-admin administrator cluster role")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create serviceaccount dashboard-admin -n kube-system")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"User Authorization")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create clusterrolebinding dashboard-admin --clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin\nkubectl -n kube-system get secret | grep dashboard-admin | awk '{print $1}'\nkubectl describe secret {secret} -n kube-system\n")),(0,r.kt)("h3",{id:"configure-parameters"},"Configure parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Help describes the"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitor Host"),(0,r.kt)("td",{parentName:"tr",align:null},"THE MONITORED PEER IPV4, IPV6 OR DOMAIN NAME. Note \u26a0\ufe0f that there are no protocol headers (eg: https://, http://).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Name"),(0,r.kt)("td",{parentName:"tr",align:null},"A name that identifies this monitoring that needs to be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APiServer port"),(0,r.kt)("td",{parentName:"tr",align:null},"K8s APiServer port, default 6443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorize the Access Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The database connection URL is optional, if configured, the database name, user name and password parameters in the URL will override the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The acquisition interval is"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitor the periodic data acquisition interval, in seconds, and the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to probe the"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to check the availability of the monitoring before adding a monitoring is successful, and the new modification operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"For more information identifying and describing the remarks for this monitoring, users can remark the information here")))),(0,r.kt)("h3",{id:"collect-metrics"},"Collect metrics"),(0,r.kt)("h4",{id:"metric-collection-nodes"},"metric collection: nodes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Node name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_ready"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Node Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capacity_cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allocatable_cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capacity_memory"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allocatable_memory"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_time"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Node creation time")))),(0,r.kt)("h4",{id:"metric-collection-namespaces"},"metric Collection: namespaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"namespace name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_time"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Created")))),(0,r.kt)("h4",{id:"metric-collection-pods"},"metric collection: pods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pod"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restart"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of restarts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP address of the host is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pod_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"pod ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_time"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod creation time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_time"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Pod startup time")))),(0,r.kt)("h4",{id:"metric-collection-services"},"metric Collection: services"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metrics help describe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Service Type ClusterIP NodePort LoadBalancer ExternalName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cluster_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"tag selector matches")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creation_time"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Created")))))}c.isMDXComponent=!0}}]);