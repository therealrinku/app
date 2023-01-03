export const toggleSidebar=()=>{
    const sidebar=document.querySelector(".sidebar")
    const style = sidebar?.getAttribute("style")

    if(style?.includes("display:block")){
        sidebar?.setAttribute("style","display:none")
    }else{
        sidebar?.setAttribute("style","display:block")
    }
}