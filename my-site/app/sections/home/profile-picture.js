import React from "react";
import Image from "next/image";

function ProfilePicture() {
    return (
        <div className={"mb-5 md:h-3/6 md:m-10 "}>
            <div className={"h-full absolute bg-black rounded-full animate-ping"}></div>
            <img
                className={"rounded-full shadow-md h-full"}
                src="/profile.jpg"
                alt="Picture of the author"
            />
        </div>
    );
}

export default ProfilePicture;
