import { useState, useEffect, useMemo } from "react";
function useTyping(rolesArray, delay = 1000) {
    const roles = useMemo(() => rolesArray, [rolesArray]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentIndex];
        const typingSpeed = isDeleting ? 100 : 150;

        const timer = setTimeout(() => {
            let updatedText = isDeleting
                ? currentRole.slice(0, displayText.length - 1)
                : currentRole.slice(0, displayText.length + 1);

            setDisplayText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, roles, delay]);

    return displayText;
};
export default useTyping;