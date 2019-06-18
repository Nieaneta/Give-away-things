// import React, { Component } from "react";

// import * as Scroll from "react-scroll";
// import {
//     Link,
//     Events,
//     animateScroll as scroll,
//     scrollSpy,
// } from "react-scroll";
// import Header from "../../components/Header/Header";

// class Section extends Component{
//     componentDidMount() {
//         Events.scrollEvent.register("begin") {
//             console.log("begin", arguments);
//         });

//         Events.scrollEvent.register("end") {
//             console.log("end", arguments);
//         });

//         scrollSpy.update();
//     }
//     componentWillUnmount() {
//         Events.scrollEvent.remove("begin");
//         Events.scrollEvent.remove("end");
//     }
//     scrollToTop{
//         scroll.scrollToTop();
// }
//     scrollToBottom
//         scroll.scrollToBottom();
    
//     scrollTo() 
//         scroll.scrollTo(100);
    
//     scrollMore() 
//         scroll.scrollMore(100);
    
//     handleSetActive(to) 
//         console.log(to);
    
//     render(){
//         return (
//             <div>
//                 <Link
//                     activeClass="active"
//                     to={Header}
//                     spy={true}
//                     smooth={true}
//                     hashSpy={true}
//                     offset={50}
//                     duration={500}
//                     delay={1000}
//                     isDynamic={true}
//                     onSetActive={this.handleSetActive}
//                     onSetInactive={this.handleSetInactive}
//                     ignoreCancelEvents={false}
//                 >
//                     {Header}
//                 </Link>
//                 <Link
//                     activeClass="active"
//                     to={Info}
//                     spy={true}
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     delay={1000}
//                 >
//                    {Info}
//                 </Link>
           
//             </div>
//         );
//     }
// }
// export default Section;
