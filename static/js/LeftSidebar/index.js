const LeftSideBar = () => {
    return {
        // screen Sticky
        screenSticky: () => {
            function setLeftSide() {
                let leftbar = document.querySelector(".leftbar-grid")
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
    }
}

export default LeftSideBar