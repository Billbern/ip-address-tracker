import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {

    return (
        <main className="w-screen h-screen text-lg font-rubik">
            <div className="grid xs:grid-cols-4">
                <div className="col-span-4">
                    <header className="xs:px-6 pt-8 bg-header-pattern bg-cover bg-left bg-no-repeat xs:h-78">
                        <h1 className="text-white font-bold w-max mx-auto mb-8">
                            <label htmlFor="search">IP Address Tracker</label>
                        </h1>
                        <div className="flex h-14.5 rounded-2xl overflow-hidden mb-4">
                            <input className="w-10/12 font-normal pl-4 focus:outline-none" type="text" id="search" placeholder="Search for any IP address or domain" />
                            <div className="flex items-center justify-center w-14.5 bg-black">
                                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute z-50 w-full py-7 bg-white shadow-xl rounded-2xl flex flex-col">
                                <div className="flex flex-col items-center justify-center w-full mb-2">
                                    <p className="text-xs text-cust-gray-one font-semibold mb-1">IP ADDRESS</p>
                                    <p className="font-bold">192.168.1.1</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full mb-2">
                                    <p className="text-xs text-cust-gray-one font-semibold mb-1">Location</p>
                                    <p className="font-bold">Brooklyn, NY 10001</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full mb-2">
                                    <p className="text-xs text-cust-gray-one font-semibold mb-1">TIMEZONE</p>
                                    <p className="font-bold">UTC-5</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <p className="text-xs text-cust-gray-one font-semibold mb-1">ISP</p>
                                    <p className="font-bold">SpaceX Starlink</p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="overflow-hidden w-full h-96">
                        <MapContainer className="h-full z-20" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
