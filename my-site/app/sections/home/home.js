import React from "react";
import Title from "./title";
import ProfilePicture from "./profile-picture";

function Home() {
    return (
        <div className="h-screen">
            <div className="h-5/6 flex flex-col justify-center items-center text-center">
                <ProfilePicture />
                <Title />
            </div>
        </div>
    );
}

export default Home;
