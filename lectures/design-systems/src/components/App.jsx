import React from "react";
import NavBar from "./NavBar";
import MyDrawer from "./MyDrawer";
import { Image } from "antd";

// custom components:
export default function App() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <p>Put your design system components in the space below...</p>

                <MyDrawer buttonText="Button 1" title="Drawer 1" />
                <MyDrawer buttonText="Button 2" title="Drawer 2" />
                <MyDrawer buttonText="Button 3" title="Drawer 3" />

                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery
                </h2>
                <div className="flex flex-wrap content-start">
                    <Image
                        src="https://picsum.photos/600/600?id=1"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=2"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=3"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=4"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=5"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=6"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=7"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=8"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=9"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=10"
                        width={200}
                    />
                </div>
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}
