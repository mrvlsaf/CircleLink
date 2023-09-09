import { useLayoutEffect, useState } from "react"

const ScreenType = () => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

export { ScreenType };