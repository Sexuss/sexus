(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Wo83:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));a("f3/d");var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("9eSz"),s=a.n(r),c=a("Bl7J"),i=a("vrFN");var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){if(window.pageYOffset+1100>window.outerHeight){var e=a.state.NoOfPost+3;a.setState({NoOfPost:e})}},a.state={NoOfPost:6},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this.props.data,t=this.state.NoOfPost,a=["sexualité","orgasme","feminisme"];return e.data.allContentfulBlogs.edges.map((function(e){return e.node.tags.map((function(e){return a.push(e.tag)}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{title:"Blog",keywords:a}),l.a.createElement("ul",{className:"blog-list",style:{paddingTop:100},onScroll:this.onScrollEvent},e.data.allContentfulBlogs.edges.slice(0,t).map((function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"post-item template-square columned"},l.a.createElement("div",{className:"post-thumbnail"},l.a.createElement(s.a,{sizes:e.node.featureImage.fluid}),l.a.createElement("div",{className:"post-date"},l.a.createElement("i",{className:"fas fa-calendar-alt"}),e.node.publicData)),l.a.createElement("div",{className:"post-details"},l.a.createElement("h2",{className:"post-title"},l.a.createElement(o.Link,{to:"/"+e.node.slug},e.node.title)),l.a.createElement("div",{className:"author"},l.a.createElement(s.a,{sizes:e.node.author.photo.fluid}),l.a.createElement("strong",{className:"name"},e.node.author.name)),l.a.createElement("p",null,e.node.subHeader))))}))))},n}(l.a.Component);t.default=function(e){return l.a.createElement(c.a,null,l.a.createElement(i.a,{title:"Blogs",keywords:["gatsby","application","react"]}),l.a.createElement("div",{className:"container blog-page"},l.a.createElement(d,{data:e})))};var u="3631711820"}}]);
//# sourceMappingURL=component---src-pages-blogs-js-66c6f8700f0620781a91.js.map