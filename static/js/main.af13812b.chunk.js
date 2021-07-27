(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1mD40",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__i86H2"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1OS3J",Container:"ImageGallery_Container__1fwWF"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3t0cu",Modal:"Modal_Modal__mhhLL"}},27:function(e,t,a){e.exports={Button:"Button_Button__tHT6w"}},29:function(e,t,a){e.exports={Loader:"Loader_Loader__2KKdZ"}},34:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(24),c=a.n(o),l=(a(34),a(15)),i=a(4),u=a(5),s=a(7),h=a(6),m=a(9),d=a.n(m),p=a(11),g=a.n(p),b=a(25),j=a(26),_=a.n(j),f=function(){var e=Object(b.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=22033849-04a58a8d7b6d53f5d68e2165a&image_type=photo&orientation=horizontal&per_page=12"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=a(8),O=a.n(y),S=a(0),x=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.getQuery=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(S.jsx)("header",{className:O.a.Searchbar,children:Object(S.jsxs)("form",{className:O.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(S.jsx)("button",{type:"submit",className:O.a.SearchForm_button,children:Object(S.jsx)("span",{className:O.a.SearchForm_button_label,children:"Search"})}),Object(S.jsx)("input",{className:O.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.getQuery})]})})}}]),a}(n.Component),v=a(12),k=a.n(v),I=function(e){var t=e.collection,a=e.actionBackground;return t.map((function(e){return Object(S.jsx)("li",{className:k.a.ImageGalleryItem,onClick:a,children:Object(S.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-source":e.largeImageURL,className:k.a.ImageGalleryItem_image})},e.id)}))},w=a(27),C=a.n(w),M=function(e){var t=e.action;return Object(S.jsx)("button",{className:C.a.Button,onClick:t,children:"Load more"})},F=a(13),N=a.n(F),B=function(e){var t=e.collection,a=e.actionButton,n=e.actionBackground;return Object(S.jsxs)("div",{className:N.a.Container,children:[Object(S.jsx)("ul",{className:N.a.ImageGallery,children:Object(S.jsx)(I,{collection:t,actionBackground:n})}),Object(S.jsx)(M,{action:a})]})},G=a(28),L=a.n(G),q=a(29),A=a.n(q),P=function(){return Object(S.jsx)(L.a,{className:A.a.Loader,type:"Rings",color:"#00FA9A",height:800,width:900,timeout:3e3})},E=a(14),T=a.n(E),D=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyESC=function(t){"Escape"===t.code&&e.props.onClickModal()},e.handleModal=function(t){t.currentTarget===t.target&&e.props.onClickModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyESC)}},{key:"render",value:function(){var e=this.props,t=e.largeImageURL;return e.openModal?Object(S.jsx)("div",{className:T.a.Overlay,onClick:this.handleModal,children:Object(S.jsx)("div",{className:T.a.Modal,children:Object(S.jsx)("img",{src:t,alt:""})})}):null}}]),a}(n.Component),K=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],error:null,loading:!1,currentPage:1,query:"",openModal:!1,modalContent:null},e.nextPage=function(){e.setState({currentPage:e.state.currentPage+1})},e.handleSubmit=function(t){e.setState({query:t})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.cleanData=function(){e.setState({pictures:[]})},e.toggleModal=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.currentPage,o=n.query;t.currentPage===r&&t.query===o||(t.query!==o&&this.cleanData(),this.setState({loading:!0}),f(o,r).then((function(e){a.setState((function(t){return{pictures:[].concat(Object(l.a)(t.pictures),Object(l.a)(e.data.hits))}}))})).catch((function(){a.setState({error:"error"})})).finally((function(){a.scroll(),a.setState({loading:!1})})))}},{key:"onClickPicture",value:function(e){console.log(e.target.dataset.source)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.error,n=e.pictures,r=e.query,o=e.openModal,c=e.modalContent;return Object(S.jsxs)("div",{className:d.a.App,children:[Object(S.jsx)(x,{onSubmit:this.handleSubmit}),t&&Object(S.jsx)(P,{}),a?Object(S.jsx)("h2",{className:d.a.Title,children:"error (\u0ca0_\u0ca0) error"}):""===r?Object(S.jsx)("h2",{className:d.a.Title,children:"Try to look for something \ud83d\udd0d"}):Object(S.jsx)(B,{collection:n,actionButton:this.nextPage,actionBackground:this.onClickPicture}),Object(S.jsx)(D,{onClickModal:this.toggleModal,largeImageURL:c,openModal:o})]})}}]),a}(n.Component);c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__15Vgc",SearchForm:"SearchBar_SearchForm__4gEgG",SearchForm_button:"SearchBar_SearchForm_button__2w5Kf",SearchForm_button_label:"SearchBar_SearchForm_button_label__2ok0u",SearchForm_input:"SearchBar_SearchForm_input__NrFxh"}},9:function(e,t,a){e.exports={App:"App_App__IafwV",Title:"App_Title__3z-PF"}}},[[75,1,2]]]);
//# sourceMappingURL=main.af13812b.chunk.js.map