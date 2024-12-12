import React, { useEffect, useState } from 'react';
import './profilechange.css';

function ProfileChange() {
    const [image, setImage] = useState('https://th.bing.com/th/id/OIP.H1gHhKVbteqm1U5SrwpPgwAAAA?rs=1&pid=ImgDetMain');
    const handleClick = () => {
        setImage('https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg');
    };

    const handleClick2 = () => {
        setImage('https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg');
    };
    useEffect(() => {
        console.log(`Profile image updated to: ${image}`);
        return () => {
            console.log("Cleanup on unmount or image change");
        };
    }, [image]);

    

    return (
        <div className="container">
            <div className="container1">
                <h1>Upload Profile Picture</h1>
                <img src={image} alt="Profile" />
            </div>
            <div className="container2">
                <h3>Choose the Image</h3>
                <img src={image} alt="Selected" /><br />
                <button id="btn" onClick={handleClick}>Male</button>
                <button id="btn" onClick={handleClick2}>Female</button>
            </div>
        </div>
    );
}

export default ProfileChange;
