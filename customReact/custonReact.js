function customRender(reactElement, container){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)

    // container.appendchild(domElement)

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop of reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendchild(domElement)

}

const reactElement = {
    type : 'a',
    props :{
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google'
}

const mainConatiner = document.querySelector("#root")


customRender(reactElement , mainConatiner)