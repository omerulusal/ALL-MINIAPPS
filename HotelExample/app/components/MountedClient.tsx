"use client";
import React, { useEffect, useState } from "react";

const MountedClient = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return <>{children}</>;
};

export default MountedClient;
