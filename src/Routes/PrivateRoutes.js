import ToolDetails from '../Components/Tools/ToolDetails';
import Tools from '../Components/Tools/Tools';

const PrivateRoutes = [
    { path: "/tools", name: "tools", Componet: Tools },
    { path: "/tool/:id", name: "tools", Componet: ToolDetails },

]

export default PrivateRoutes;