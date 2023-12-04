function Header(props){
    const{id,content} = props
    return (<header id={id}>{content}</header>)
}
export default Header;