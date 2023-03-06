
const Card = ({title, content}) => {
  return (
    <div className={`box-shadow 
    h-full w-full p-10 bg-white
    `}>
     <h3 className="text-xl font-bold text-heading">{title}</h3>
     <div className={`card-content`}>
      {content}
     </div>
    </div>
  )
}

export default Card