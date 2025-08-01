import { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import "../../styles/District.css";

import respresentatives from "../../contents/zones.representatives";

function District() {
    const [popupOpen, setPoppupOpen] = useState(false);
    const [eventPopupOpen, setEventsPoppupOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='about-container'>
            {/* Hero Section */}
            <section className='about-hero'>
                <div className='container'>
                    <h1>District</h1>
                    <p>
                        Leading with purpose across District 3170. Uniting
                        clubs, empowering members, and strengthening communities
                        through collaborative service and shared vision.
                    </p>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <section className='mission-vision'>
                <div className='ab-container'>
                    <div className='mission-vision-grid-dis'>
                        <div className='mission-card'>
                            <h2>District Council</h2>
                            {/* <p>
                                    To deliver cutting-edge technology solutions
                                    that help businesses grow, innovate, and
                                    succeed in the digital age. We strive to
                                    make technology accessible, reliable, and
                                    transformative for our clients.
                                </p> */}
                            <Link to='/district/council'>
                                <Button variant='contained'>
                                    Click to learn more
                                </Button>
                            </Link>
                        </div>

                        <div>
                            <div className='vision-card'>
                                <h2>Zones</h2>
                                {/* <p>
                                To become the leading technology partner for
                                businesses worldwide, known for our innovation,
                                reliability, and commitment to customer success.
                                We envision a future where technology seamlessly
                                enhances human potential.
                            </p> */}
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        setPoppupOpen(true);
                                    }}
                                >
                                    Click to learn more
                                </Button>
                            </div>
                        </div>
                        <div className='vision-card'>
                            <h2>District Initiatives</h2>
                            {/* <p>
                                    To become the leading technology partner for
                                    businesses worldwide, known for our
                                    innovation, reliability, and commitment to
                                    customer success. We envision a future where
                                    technology seamlessly enhances human
                                    potential.
                                </p> */}
                            <Link to='/district/initiatives'>
                                <Button variant='contained'>
                                    Click to learn more
                                </Button>
                            </Link>
                        </div>

                        <div className='vision-card'>
                            <h2>Events</h2>
                            {/* <p>
                                To become the leading technology partner for
                                businesses worldwide, known for our innovation,
                                reliability, and commitment to customer success.
                                We envision a future where technology seamlessly
                                enhances human potential.
                            </p> */}
                            <Button
                                variant='contained'
                                onClick={() => {
                                    setEventsPoppupOpen(true);
                                }}
                            >
                                Click to learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <Dialog
                open={popupOpen}
                onClose={() => {
                    setPoppupOpen(false);
                }}
                maxWidth='lg'
                fullWidth
            >
                <DialogTitle
                    style={{
                        borderBottom: "5px solid #1976d2",
                        color: "#1976d2",
                        fontWeight: "bold",
                        padding: "5px 20px",
                    }}
                >
                    <h2 style={{ margin: "0px" }}>Zones</h2>
                </DialogTitle>
                <DialogContent>
                    <div className='rep-content'>
                        {respresentatives.map((item, index) => {
                            return (
                                <div key={index} className='rep-card'>
                                    {/* Flag Section */}
                                    <div className='flag-section'>
                                        <img
                                            src={item.flag}
                                            alt='Zone flag'
                                            className='flag-image'
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                            }}
                                        />
                                    </div>

                                    {/* Name and Club Section - Centered */}
                                    <div className='name-container'>
                                        <h3 className='rep-name'>
                                            {item.name}
                                        </h3>
                                        <p className='rep-club'>{item.club}</p>
                                    </div>

                                    {/* Profile Image Section */}

                                    <div className='profile-section'>
                                        <img
                                            src={item.image}
                                            alt={item.name || "Representative"}
                                            className='rep-image'
                                            onError={(e) => {
                                                e.target.src =
                                                    "https://via.placeholder.com/100x100/667eea/white?text=" +
                                                    (item.name
                                                        ? item.name.charAt(0)
                                                        : "R");
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setPoppupOpen(false)}
                        className='close-button'
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={eventPopupOpen}
                onClose={() => {
                    setEventsPoppupOpen(false);
                }}
                maxWidth='lg'
                fullWidth
                BackdropProps={{
                    style: {
                        backgroundColor: "rgba(0,0,0,0.4)",
                    },
                }}
            >
                <DialogTitle
                    style={{
                        borderBottom: "5px solid #1976d2",
                        color: "#1976d2",
                        fontWeight: "bold",
                    }}
                >
                    <h2 style={{ margin: "0px" }}>District - Events</h2>
                </DialogTitle>
                <DialogContent>
                    <div className='events-content'>
                        <Link to='/district/events' className='event-card'>
                            <div className='event-header'>
                                <h3 className='event-title'>District Events</h3>
                            </div>
                        </Link>

                        {/* Example Event Card 2 */}
                        <Link
                            // to='/district/events/rsamdio'
                            className='event-card'
                        >
                            <div className='event-header'>
                                <h3 className='event-title'>
                                    Rotaract South Asia Multi District
                                    Information Organization (RSA MDIO)
                                </h3>
                            </div>
                        </Link>

                        {/* Example Event Card 3 */}
                        <Link
                            // to='/'
                            className='event-card'
                        >
                            <div className='event-header'>
                                <h3 className='event-title'>
                                    South East Asia Rotract Information Center
                                    (SEARIC MDIO)
                                </h3>
                            </div>
                        </Link>

                        <Link
                            // to='/'
                            className='event-card'
                        >
                            <div className='event-header'>
                                <h3 className='event-title'>
                                    Rotary International Convention - Taipei
                                </h3>
                            </div>
                        </Link>
                        {/* If no events, show this instead */}
                        {/* 
                            <div className='no-events'>
                                <div className='no-events-title'>No Events Available</div>
                                <div className='no-events-message'>
                                    Check back later for upcoming district events and activities.
                                </div>
                            </div>
                        */}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setEventsPoppupOpen(false)}
                        className='close-button'
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default District;
