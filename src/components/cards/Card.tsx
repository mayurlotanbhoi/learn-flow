const Card = ({ className, children }) => {
     {
          return <div className={`bg-light rounded-2xl ${className}`}>{children}</div>;
     };
}
export default Card;