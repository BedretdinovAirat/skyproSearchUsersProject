import {Route, Routes} from "react-router-dom"
import { MainPage } from "./pages/main-page/main-page"
import { ErrorPage } from "./pages/error-page/error-page"
import { UserPage } from "./pages/user-page/user-page"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/userPage/:userId" element={<UserPage />} />
            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}