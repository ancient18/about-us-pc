import { memo,Component } from "react"
class Icon extends Component{
    componentDidMount(){
        require('../../public/iconfont/iconfont.js')
    }
    render(){
        const {className,addClass,onClick} = this.props
        return (<svg onClick={onClick} className={`icon ${addClass}`} aria-hidden="true"><use xlinkHref={`#${className}`}></use></svg>)
    }
}
export default memo(Icon)