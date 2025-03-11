import React, { useEffect } from "react";
import { FacebookProvider, CustomerChat } from "react-facebook-customer-chat";

const MessengerChat = () => {
    useEffect(() => {
        // Initialize Facebook SDK
        window.fbAsyncInit = function () {
            FB.init({
                appId: "YOUR_APP_ID", // Replace with your Facebook App ID
                autoLogAppEvents: true,
                xfbml: true,
                version: "v12.0",
            });
        };

        // Load Facebook SDK for customer chat
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src =
                "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

    return (
        <FacebookProvider appId="YOUR_APP_ID">
            <CustomerChat pageId="YOUR_PAGE_ID" />
        </FacebookProvider>
    );
};

export default MessengerChat;
