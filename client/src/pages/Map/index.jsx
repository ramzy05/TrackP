import { Map, Card } from "../../components"
import MapMember from "../../components/MapMember"



const MapPage = () => {
  return (
    <div className={`
      flex justify-center items-center overflow-auto
      min-h-screen h-screen mb-10 gap-2
      p-4
    `}>
      <div className={`h-full w-1/3`}>
        <Card content={<MapMember/>} />
      </div>
      <Map />
    </div>
  )
}

export default MapPage