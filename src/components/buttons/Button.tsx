import './buttons.css'

const Button = ({ content, buttonClass, onClick }: { content: string; buttonClass: string; onClick?: () => void }) => {
     return <button className={`${buttonClass} text-black`} onClick={onClick}> {content}</button>
}

export default Button