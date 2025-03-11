import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import { Head } from "@inertiajs/react";
import StatusBar from "@/Components/StatusBar";
import PageTitle from "@/Components/Pagetitle";

export default function Ourteam() {
    const pageTitle = "Our Team";

    // Sample team data to be rendered dynamically
    const teamMembers = [
        {
            name: "Ganesh Silwal",
            position: "Founder & CEO",
            email: "nepal@holytunecraft.com",
            contact: "+977-9851402057",
            address: "Kathmandu, Nepal",
            image: "/assets/images/ourteam/ganesh.jpg", // Replace with actual image paths
        },
        {
            name: "Achyut Neupane",
            position: "Co-founder & COO",
            email: "green.band66@gmail.com",
            contact: "+977-9861023479",
            address: "Kathmandu, Nepal",
            image: "/assets/images/ourteam/achyut.jpg", // Replace with actual image paths
        },
        {
            name: "Ganesh Silwal",
            position: "Executive Head",
            email: "nepal@holytunecraft.com",
            contact: "+977-9851402057",
            address: "Kathmandu, Nepal",
            image: "/assets/images/ourteam/ganesh.jpg", // Replace with actual image paths
        },
    ];

    return (
        <>
            <Head title={pageTitle} />
            <Header />
            <PageTitle dynamictitle={pageTitle} />
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="team-image"
                        />
                        <div className="team-info">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-position">{member.position}</p>
                            <ul className="team-details">
                                <li>
                                    <span className="bold">Contact:</span>{" "}
                                    {member.contact}
                                </li>
                                <li>
                                    <span className="bold">Email:</span>{" "}
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="team-email"
                                    >
                                        {member.email}
                                    </a>
                                </li>
                                <li>
                                    <span className="bold">Address:</span>{" "}
                                    {member.address}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <PageTitle dynamictitle={"we provide"} />
            <StatusBar />
            <Footer />
        </>
    );
}
