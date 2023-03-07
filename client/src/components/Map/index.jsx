import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
	const bounds = [
		[3.7475, 11.3691], // Southwest coordinates
		[3.9876, 11.7283], // Northeast coordinates
	];
	return (
		<div className={`map-div box-shadow  h-full overflow-auto`}>
			<MapContainer
				bounds={bounds}
				maxBounds={bounds}
				className="map-container"
				center={[3.8633472, 11.5146752]}
				zoom={13}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[3.8633472, 11.5146752]}>
					<Popup>Your Current location</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
