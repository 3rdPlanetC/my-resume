const LeftSideBar = () => {
    return {
        // screen Sticky
        screenSticky: () => {
            function setLeftSide() {
                let leftbar = document.querySelector(".leftbar-grid")
                // console.log(leftbar.offsetHeight, window.innerHeight, window.pageYOffset, leftbar.offsetTop)
                if (leftbar.offsetHeight <= window.innerHeight) {
                    if (window.pageYOffset > leftbar.offsetTop && leftbar.offsetTop >= 0) {
                        leftbar.classList.add("sticky")
                    } else {
                        leftbar.classList.remove("sticky")
                        leftbar.style.marginTop = `0px`
                    }
                } else {
                    if (leftbar.offsetHeight - window.innerHeight >= window.pageYOffset) {
                        leftbar.style.marginTop = `0px`
                        leftbar.classList.remove("sticky")
                    } else {
                        leftbar.classList.add("sticky")
                        leftbar.style.marginTop = `-${leftbar.offsetHeight - window.innerHeight}px`
                    }
                }
            }
            
            window.onscroll = () => {
                setLeftSide()
            }
            window.onresize = () => {
                setLeftSide()
            }
        },
        // screen FixedLineTitle
        // screenFixedLineTitle: ({title}) => {
        //     function setTitleQueryAndSetHeight(titleInput) {
        //         let arr = []
        //         titleInput.forEach(itemT => {
        //             let allHeight = 0
        //             let title = `.leftbar-grid .leftbar-wrapper .left-box .left-title#${itemT.name}`
        //             itemT.desc.forEach((itemD) => {
        //                 let desc = document.querySelector(`.leftbar-grid .leftbar-wrapper .left-box .left-desc#${itemT.name}-${itemD}`)
        //                 allHeight += desc.offsetHeight
        //             })
        //             arr.push({
        //                 title: title,
        //                 height: allHeight
        //             })
        //         })
        //         return arr
        //     }

        //     function setLineHeight(titleArrInput) {
        //         let ss = document.styleSheets
        //         for (let i = 0; i < ss.length; i++) {
        //             let rules = ss[i];
        //             for (let j = 0; j < rules.cssRules.length; j++) {
        //                 let r = rules.cssRules[j];
        //                 for (let k = 0; k < titleArrInput.length; k++) {
        //                     if (r.selectorText == `${titleArrInput[k].title}:after` || r.selectorText == `${titleArrInput[k].title}::after`) {
        //                         r.style.height = `calc(${titleArrInput[k].height}px + 0.35em - 1px)`;
        //                     }
        //                 }
        //             }
        //         }
        //     }

        //     window.onload = () => {
        //         setLineHeight(setTitleQueryAndSetHeight(title))
        //     }

        //     window.onresize = () => {
        //         setLineHeight(setTitleQueryAndSetHeight(title))
        //     }
        // }
    }
}

export default LeftSideBar