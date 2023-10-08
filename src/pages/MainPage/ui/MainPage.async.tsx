import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Только для искусственой задержки
    setTimeout(() => resolve(import("./MainPage")), 1500)
}));