
import React, { useState, useEffect } from 'react';
import '../../styles/Profile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const { id } = useParams();
    console.log("Profile URL ID:", id);

    const [profile, setProfile] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                setLoading(true);
                setError('');

                const response = await axios.get(
                    `http://localhost:3000/api/food-partner/${id}`,
                    { withCredentials: true }
                );

                setProfile(response.data.foodPartner);
                setVideos(response.data.foodItems || []);

            } catch (error) {
                console.error(
                    'Profile fetching error:',
                    error.response?.data || error.message
                );

                setError(
                    error.response?.data?.message ||
                    'Unable to load profile'
                );

            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProfile();
        } else {
            setError('Food Partner ID is missing');
            setLoading(false);
        }

    }, [id]);

    if (loading) {
        return <h2>Loading profile...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!profile) {
        return <h2>Food Partner not found</h2>;
    }

    return (
        <main className="profile-page">

            <section className="profile-header">

                <div className="profile-meta">

                    <img
                        className="profile-avatar"
                        src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500"
                        alt="Food Partner"
                    />

                    <div className="profile-info">

                        <h1 className="profile-pill profile-business">
                            {profile.name}
                        </h1>

                        <p className="profile-pill profile-address">
                            {profile.phoneno}
                        </p>

                    </div>
                </div>

                <div className="profile-stats" role="list">

                    <div className="profile-stat" role="listitem">
                        <span className="profile-stat-label">
                            Total Meals
                        </span>

                        <span className="profile-stat-value">
                            {videos.length}
                        </span>
                    </div>

                    <div className="profile-stat" role="listitem">
                        <span className="profile-stat-label">
                            Customers Served
                        </span>

                        <span className="profile-stat-value">
                            {profile.customersServed || 0}
                        </span>
                    </div>

                </div>

            </section>

            <hr className="profile-sep" />

            <section className="profile-grid" aria-label="Videos">

                {videos.length > 0 ? (

                    videos.map((v) => (

                        <div
                            key={v._id}
                            className="profile-grid-item"
                        >

                            <video
                                className="profile-grid-video"
                                src={v.video}
                                muted
                                controls
                                playsInline
                            />

                        </div>

                    ))

                ) : (

                    <p>No food videos uploaded yet.</p>

                )}

            </section>

        </main>
    );
};

export default Profile;
