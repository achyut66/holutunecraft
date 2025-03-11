import { Head, Link } from "@inertiajs/react";
import Header from "./Header/Header";
import Footer from "./Header/Footer";
import React from "react";
import Dropdown from "@/Components/Dropdown";
import PageTitle from "@/Components/Pagetitle";
import StatusBar from "@/Components/StatusBar";

export default function Dashboard({ auth, errors }) {
    return (
        <>
            <Head title="Dashboard" />
            <Header />
            <div className="py-12">
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex space-x-6">
                        {/* First div */}
                        <div
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                            style={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            My Account
                            <br />
                            <li>
                                <Link href="">Order History</Link>
                            </li>
                            <li>
                                <Link href="">View Address</Link>
                            </li>
                            <li>
                                <Link href="">Support</Link>
                            </li>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                style={{ color: "red" }}
                            >
                                Log Out
                            </Dropdown.Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* Second div */}
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <PageTitle dynamictitle={"your Information"} />
                            <div>Username: {auth.user.name}</div>{" "}
                            <div>Email: {auth.user.email}</div>{" "}
                            {auth.user.category === "admin" ? (
                                <Link href={route("cms-page")}>
                                    <button
                                        className=""
                                        style={{
                                            backgroundColor: "blue",
                                            padding: "8px 8px",
                                            borderRadius: "2px",
                                        }}
                                    >
                                        CMS PANEL
                                    </button>
                                </Link>
                            ) : (
                                ""
                            )}
                            {/* Accessing the authenticated user's name */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
