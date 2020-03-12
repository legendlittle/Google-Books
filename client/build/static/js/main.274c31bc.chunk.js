(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(62)},38:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),i=n.n(r),l=(n(38),n(8)),c=n(9),s=n(11),u=n(10),m=n(12),h=n(30);function d(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function f(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}function v(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-danger"}),e.children)}var g=n(15),k=n.n(g),b={search:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return k.a.get("/api/books")},saveBook:function(e){return k.a.post("/api/books",e)},deleteBook:function(e){return k.a.delete("/api/books/"+e)}},p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",authors:[],description:"",image:"",link:""},n.submit=function(e){e.preventDefault(),b.search(n.state.title).then(function(e){return n.setState({authors:e.data.items[0].volumeInfo.authors,description:e.data.items[0].volumeInfo.description,image:e.data.items[0].volumeInfo.imageLinks.smallThumbnail,link:e.data.items[0].volumeInfo.infoLink})})},n.change=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(h.a)({},a,o))},n.save=function(e){e.preventDefault(),b.saveBook({title:n.state.title,author:n.state.authors.toString(),description:n.state.description,image:n.state.image,link:n.state.link}).then(function(e){return n.setState({title:"",author:[],description:"",image:"",link:""})})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron text-center text-danger bg-dark"},o.a.createElement("h1",null,"Google Books API")),o.a.createElement("h2",null," Search for a book!"),o.a.createElement("form",null,o.a.createElement(d,{onChange:this.change,name:"title",placeholder:"Title",value:this.state.title}),o.a.createElement(f,{onClick:this.submit}," Submit")),o.a.createElement("div",null,o.a.createElement("h2",null,"Book Info"),o.a.createElement("h4",null,"Title: ",this.state.title),o.a.createElement("h4",null,"Authors: ",this.state.authors),o.a.createElement("p",null,"Description: ",this.state.description),o.a.createElement("img",{src:this.state.image,alt:"Book Cover"}),o.a.createElement("br",null),o.a.createElement("h4",null,o.a.createElement("a",{href:this.state.link},"Google Books Link")),o.a.createElement(f,{onClick:this.save}," Save this Book!")))}}]),t}(a.Component),E=n(14),w=n(6);n(56);var j=function(){return o.a.createElement("ul",{className:"nav nav-tabs"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(E.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(E.b,{to:"/books",className:"/books"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))};function N(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function O(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n.loadSaved=function(){b.getBooks().then(function(e){n.setState({books:e.data})})},n.remove=function(e){b.deleteBook(e).then(function(e){n.loadSaved()})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadSaved()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron text-center text-danger bg-dark"},o.a.createElement("h1",null,"Saved Books")),o.a.createElement("h2",null," Manage your Saved Books"),this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t){return o.a.createElement(O,{key:t._id},o.a.createElement("p",null,t.title," by ",t.author,o.a.createElement("br",null),o.a.createElement("a",{href:t.link},"Read Now!")),o.a.createElement(v,{onClick:function(){return e.remove(t._id)}}," Delete"))})):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(j,null),o.a.createElement(w.c,null,o.a.createElement(w.a,{exact:!0,path:"/",component:p}),o.a.createElement(w.a,{exact:!0,path:"/books",component:y}),o.a.createElement(w.a,{exact:!0,path:"/books/:id",component:y}))))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):x(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.274c31bc.chunk.js.map