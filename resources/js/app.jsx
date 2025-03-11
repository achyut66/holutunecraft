import "./bootstrap";
import "../css/app.css";
import "../css/style.css";
import "../css/welcome.css";
import "../css/productlists.css";
import "../css/megamenu.css";
import "../css/pagetitle.css";
import "../css/blog.css";
import "../css/contact.css";
import "../css/statusbar.css";
import "../css/cart.css";
import "../css/terms.css";
import "../css/trackorder.css";
import "../css/faq.css";
import "../css/wholsale.css";
import "../css/ourteam.css";
import "../css/productdetails.css";
import "../css/singingbowlguide.css";
import "../css/reviews.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
<link rel="icon" href="{assets/logo.png}" type="image/x-icon" />;

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },

    progress: {
        color: "#4B5563",
    },
});
