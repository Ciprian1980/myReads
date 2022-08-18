(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){e.exports=a(26)},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),l=a.n(r),c=a(3),s=a(11),i=a.n(s),u=a(15),m=a(5),d=a(6),b=a(7),h=a(9),p=a(8),k=a(10),f=a(0),E="https://reactnd-books-api.udacity.com",v=localStorage.token;v||(v=localStorage.token=Math.random().toString(36).substr(-8));var y={Accept:"application/json",Authorization:v},g=function(e,t){return fetch("".concat(E,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},y,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},N=function(e){return fetch("".concat(E,"/search"),{method:"POST",headers:Object(m.a)({},y,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})};a(13);var C=function(e){var t=e.books,a=e.updateController;return o.a.createElement("div",{className:"bookshelf"},[{title:"Read",key:"read"},{title:"Want To Read",key:"wantToRead"},{title:"Currently Reading",key:"currentlyReading"}].map(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"bookshelf-title"},e.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.filter(function(t){return t.shelf===e.key}).map(function(e,t){return o.a.createElement("li",{key:"book-".concat(t)},console.log("book:",e),o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf||"none",onChange:function(t){return a(e,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))}))))}))},j=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.updateController,n=e.booksFound;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(C,{books:t,updateController:a,booksFound:n}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(c.b,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}]),t}(o.a.Component);var O=function(e){var t=e.query,a=e.booksFound,n=e.updateInput,r=e.updateController;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:t,onChange:n}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"})),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},a.length?a.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf||"none",onChange:function(t){return r(e,t.target.value)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},e.title),o.a.createElement("div",{className:"book-authors"},e.authors)))}):o.a.createElement("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},o.a.createElement("strong",null,"Book not found!")," Please try a different search.",o.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))))};var w=function(e){var t=e.books,a=Object(f.g)().id;return o.a.createElement("div",{className:"main-description-page"},o.a.createElement("div",{className:"description-book"},o.a.createElement("ul",{className:"description-list"},t.filter(function(e){return e.id===a}).map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("h1",{className:"list-books-title"},"My Reads"),o.a.createElement("h5",null,"Book Details"),o.a.createElement("h4",null,"Title: ",e.title),o.a.createElement("h4",null,"Subtitle: ",e.subtitle),o.a.createElement("h4",null,"Authors: ",e.authors),o.a.createElement("h4",null,"Publisher: ",e.publisher),o.a.createElement("h4",null,"Description: ",e.description))}))))},R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],query:"",booksFound:[]},a.updateController=function(e,t){g(e,t).then(function(){a.setState(function(a){return{books:a.books.filter(function(t){return t.id!==e.id}).concat(Object(m.a)({},e,{shelf:t}))}})})},a.filterNonCompleteBooks=function(e){return e.filter(function(e){return Boolean(e.imageLinks)||Boolean(e.authors)})},a.setShelfToSearchedBooks=function(e){var t=a.state.books,n=t.map(function(e){return e.id});return e.map(function(e){return n.includes(e.id)?Object(m.a)({},e,{shelf:t.find(function(t){return t.id===e.id}).shelf}):e})},a.updateInput=function(e){a.setState({query:e.target.value}),N(e.target.value).then(function(e){if(Array.isArray(e)){var t=a.filterNonCompleteBooks(e),n=a.setShelfToSearchedBooks(t);a.setState({booksFound:n})}else a.setState({booksFound:[]})})},a}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/books"),{headers:y}).then(function(e){return e.json()}).then(function(e){return e.books});case 2:t=e.sent,this.setState({books:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.books,a=e.booksFound,n=e.query;return o.a.createElement("div",null,o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"*",element:o.a.createElement(j,{books:t,updateController:this.updateController,booksFound:a})}),o.a.createElement(f.a,{path:"/search",element:o.a.createElement(O,{books:t,query:n,booksFound:a,updateController:this.updateController,updateInput:this.updateInput})}),o.a.createElement(f.a,{path:"/bookDetails/:id",element:o.a.createElement(w,{books:t})})))}}]),t}(o.a.Component);a(24);l.a.render(o.a.createElement(c.a,null,o.a.createElement(R,null)),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.ba136ed4.chunk.js.map