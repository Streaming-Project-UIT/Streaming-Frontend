import React, { useEffect, useState } from 'react';

const Profile = () => {
    const userToken = localStorage.getItem('userToken');
    const [avatar, setAvatar] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subcribe, setSubcribe] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_URL + '/listUserbyId/${userToken}', {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setAvatar(data.avatar); // Lưu trữ chuỗi Base64 của avatar
                    setUsername(data.username);
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setSubcribe(data.subcribe);
                } else {
                    console.error('Failed to fetch profile');
                }
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (event) => {};

    return (
        <div className="bg-gray-200 p-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                {avatar && <img src={`data:image/jpeg;base64, ${avatar}`} alt="Avatar" className="w-20 h-20 rounded-full mb-4" />}
                <p className="mb-2">Username: {username}</p>
                <p className="mb-2">First Name: {firstName}</p>
                <p className="mb-2">Last Name: {lastName}</p>
                <p className="mb-2">Subcribe: {subcribe}</p>
                <button>Edit</button>
            </form>
        </div>
    );
};

export default Profile;