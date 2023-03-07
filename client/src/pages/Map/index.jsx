import { Map, Card } from '../../components';
import Agents from '../../components/AgentList';

const MapPage = () => {
	return (
		<div
			className={`
      flex justify-center items-center overflow-auto
      mb-10 gap-2
      p-4 
    `}
			style={{
				minHeight: '94%',
				height: '94%',
			}}
		>
			<div className={`h-full w-1/3 `}>
				<Card content={<Agents />} />
			</div>
			<Map />
		</div>
	);
};

export default MapPage;
