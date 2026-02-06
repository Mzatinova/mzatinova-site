import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash (like #eduspace), go to top of page
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // If there is a hash, find the element and scroll to it
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [pathname, hash]);

    return null;
}