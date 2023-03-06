import { TopCard, Card } from "../../components"


const cards = [
  {
    texts:['N° Admin',10],
    icon:'admin',
    bgColor:'cardColor1'
  },
  {
    texts:['N° Agents',30],
    icon:'agent',
    bgColor:'cardColor2'
  },
  {
    texts:['N° Tracked Agents',5],
    icon:'agent',
    bgColor:'cardColor3'
  },
]


const Dashboard = () => {
  return (
    <div className={`
    flex flex-col
    gap-10
    h-full
    
    `}>
      <div className={` flex gap-10 flex-wrap
          justify-between
        h-64
        px-10
      `}>
        {cards.map((card, index)=>{
          return(
            <TopCard key={index}  id={index} icon={card.icon} texts={card.texts} />
          )
        })}
      </div>
      <Card title={'Latest Notfications'} content='dqsd' />
    </div>
  )
}

export default Dashboard