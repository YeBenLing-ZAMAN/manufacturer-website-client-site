import HomePage from '../Components/HomePage/HomePage';
import NotFoundPage from '../Components/Shared/NotFoundPage';
import Login from '../Components/login/Login';
import Signup from '../Components/login/Signup';
import SeeReview from '../Components/Shared/SeeReview';
import Blogs from '../Components/Shared/Blogs';
import MyProfileDeatils from '../Components/Shared/MyProfileDeatils';


 const PubilcRoutes = [
    { path: "/", name: "home", Componet: HomePage },
    { path: "/home", name: "home", Componet: HomePage },
    { path: "/login", name: "login", Componet: Login },
    { path: "/signup", name: "signup", Componet: Signup },
    { path: "/seereviews", name: "signup", Componet: SeeReview },
    { path: "/blogs", name: "signup", Componet: Blogs },
    { path: "/myprofiledetails", name: "signup", Componet: MyProfileDeatils },
    { path: "*", name: "Notfound", Componet: NotFoundPage },

]

export default PubilcRoutes;