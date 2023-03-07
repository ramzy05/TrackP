import {
	IoPeopleSharp,
	HiSquares2X2,
	IoIosPeople,
	FaMap,
	FaBell,
	IoSettingsSharp,
} from 'react-icons/all';

export function getIcon(type) {
	let icon = <></>;
	switch (type) {
		case 'dashboard':
			icon = HiSquares2X2;
			break;
		case 'admin':
			icon = IoIosPeople;
			break;
		case 'agent':
			icon = IoPeopleSharp;
			break;

		case 'map':
			icon = FaMap;
			break;
		case 'bell':
			icon = FaBell;
			break;
		case 'params':
			icon = IoSettingsSharp;
			break;

		default:
			break;
	}
	return icon;
}
