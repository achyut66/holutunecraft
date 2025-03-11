import { Link, Head } from "@inertiajs/react";
import Header from "@/Pages/Header/Header";
import Footer from "@/Pages/Header/Footer";
import Banner from "@/components/Banner";
import Productlists from "@/Components/Productlists";
import PageTitle from "@/Components/Pagetitle";
import Community from "@/Components/Community";
import ScrollerButton from "@/Components/Scroller";
import StatusBarCom from "@/Components/StatusBar";
import Trending from "@/Components/Trending";
import Marquee from "@/Components/Marque";
import MessengerChat from "@/Components/FacebookChat";

export default function Welcome(props) {
    return (
        <>
            <Header />
            <Head title="Welcome" />
            <div>
                <Banner />
            </div>
            <div>
                <PageTitle dynamictitle={"Our Products"} />
            </div>
            <div>
                <Productlists />
            </div>
            <div>
                <Community />
            </div>
            <div>
                <ScrollerButton />
            </div>
            <div>
                <PageTitle dynamictitle={"now trending"} />
            </div>
            <div>
                <Trending />
            </div>
            <div>
                <PageTitle dynamictitle={"portfolio"} />
            </div>
            <div>
                <MessengerChat />
            </div>
            <div>
                <StatusBarCom />
            </div>
            <div>
                <Marquee />
            </div>

            <Footer />
        </>
    );
}
