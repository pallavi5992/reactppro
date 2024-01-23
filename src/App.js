import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import "./index.css";
import Sidebar from "./components/common/UI/Sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import User from "./components/pages/dashBoardManagnment/userDetails/User";
import OrganisationMaster from "./components/pages/dashBoardManagnment/organisationMaster/OrganisationMaster";
import ModuleConfig from "./components/pages/dashBoardManagnment/moduleConfiguration/ModuleConfig";
import Location from "./components/pages/dashBoardManagnment/location/Location";
import DiscMaster from "./components/pages/dashBoardManagnment/discMaster/DiscMaster";
import DefenceChallenge from "./components/pages/dashBoardManagnment/defenceChallenge/DefenceChallenge";
import AccessAssign from "./components/pages/dashBoardManagnment/accessAssignments/AccessAssign";
import AIinDefence from "./components/pages/dashboardConfiguration/aiInDefence/AIinDefence";
import DefenceExportAPI from "./components/pages/dashboardConfiguration/defenceExportApi/DefenceExportAPI";
import DefenceOffsetApi from "./components/pages/dashboardConfiguration/defenceOffsetApi/DefenceOffsetApi";
import DefenceProduction from "./components/pages/dashboardConfiguration/defenceProduction/DefenceProduction";
import MissionRakshaGyan from "./components/pages/dashboardConfiguration/missionRakshaGyan/MissionRakshaGyan";
import MakeProject from "./components/pages/dashboardConfiguration/makeProject/MakeProject";
import MakeprojectI from "./components/pages/dashboardConfiguration/makeprojectI/MakeprojectI";
import Makeproject2dap from "./components/pages/dashboardConfiguration/makeproject2dap/Makeproject2dap";
import Makeproject2dapsu from "./components/pages/dashboardConfiguration/makeproject2dapsu/Makeproject2dapsu";
import MakeProject3 from "./components/pages/dashboardConfiguration/makeProject3/MakeProject3";
import MakeProject3dap from "./components/pages/dashboardConfiguration/makeProject3dap/MakeProject3dap";
import MakeProject3dpsu from "./components/pages/dashboardConfiguration/makeProject3dpsu/MakeProject3dpsu";
import Idex from "./components/pages/dashboardConfiguration/idex/Idex";
import UpDefenceCorridor from "./components/pages/dashboardConfiguration/upDefenceCorridor/UpDefenceCorridor";
import TamilnaduDefenceCorridor from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/TamilnaduDefenceCorridor";
import AddUser from "./components/pages/dashBoardManagnment/userDetails/AddUser";
import UpdateUser from "./components/pages/dashBoardManagnment/userDetails/UpdateUser";
import PrivateSectore from "./components/pages/dashBoardManagnment/organisationMaster/PrivateSectore";
import AddOrganisationMaster from "./components/pages/dashBoardManagnment/organisationMaster/AddOrganisationMaster";
import ViewExportData from "./components/pages/dashboardConfiguration/defenceExportApi/ViewExportData";
import AddMakeProject from "./components/pages/dashboardConfiguration/makeProject/AddMakeProject";
import AddMakeproject2dap from "./components/pages/dashboardConfiguration/makeproject2dap/AddMakeproject2dap";
import AddMakeprojectI from "./components/pages/dashboardConfiguration/makeprojectI/AddMakeprojectI";
import AddMakeProject2Dpsu from "./components/pages/dashboardConfiguration/makeproject2dapsu/AddMakeProject2Dpsu";
import AddAIData from "./components/pages/dashboardConfiguration/aiInDefence/AddAIData";
import AddTamilDefenceData from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/AddTamilDefenceData";
import AddupDefenceData from "./components/pages/dashboardConfiguration/upDefenceCorridor/AddupDefenceData";
import AddDefenceProduction from "./components/pages/dashboardConfiguration/defenceProduction/AddDefenceProduction";
import AddMrgsIPR from "./components/pages/dashboardConfiguration/missionRakshaGyan/AddMrgsIPR";
import AddIdexData from "./components/pages/dashboardConfiguration/idex/AddIdexData";
import AddMrgsconsolidetedData from "./components/pages/dashboardConfiguration/missionRakshaGyan/AddMrgsconsolidetedData";
import AddDap from "./components/pages/dashboardConfiguration/makeProject3dap/AddDap";
import AddDpsu from "./components/pages/dashboardConfiguration/makeProject3dpsu/AddDpsu";
import AddMakeProject3 from "./components/pages/dashboardConfiguration/makeProject3/AddMakeProject3";
import AddAnnounceDataTN from "./components/pages/dashboardConfiguration/tamilnaduDefenceCorridor/AddAnnounceDataTN";
import AddAnnounceDataUp from "./components/pages/dashboardConfiguration/upDefenceCorridor/AddAnnounceDataUp";


function App() {
  return (
    <BrowserRouter>
      <Routes>

              {/* Login  */}
        {/* <Route path="/ddpdashboard" element={<Sidebar />} /> */}
        <Route path="/" element={<Login />} />
        <Route element={<Sidebar />}>
        {/* Dashboard managnment routes */}
            <Route path="/admin/index/user" element={<User />} /> {/* Adduser details Table  */}
            <Route path="/admin/index/adduser" element={<AddUser/>} />  {/* User add data  */}
            <Route path="/admin/index/update/user" element={<UpdateUser/>} /> {/* update user data super admin , adminb */}

            <Route path="/admin/index/accessassign" element={<AccessAssign />} />

            {/* organisationMaster Private sector AddOrgniation sector */}
            <Route path="/admin/index/organisationmaster" element={<OrganisationMaster />} />
            <Route path="/admin/index/privatesector" element={<PrivateSectore/>}/> 
            <Route path="/admin/index/addorganisationmaster" element={<AddOrganisationMaster/>} />  {/* User add data  */}


            <Route path="/admin/index/moduleconfig" element={<ModuleConfig />} />
            <Route path="/admin/index/location" element={<Location />} />
            <Route path="/admin/index/discmaster" element={<DiscMaster />} />
            <Route path="/admin/index/defencechallenge" element={<DefenceChallenge />} />

        {/* DashBoard configuration routes */}

            <Route path="/admin/index/defenceExportAPI" element={<DefenceExportAPI />} />
            <Route path="/admin/index/defenceExportAPI/viewexportdata" element={<ViewExportData />} />

            <Route path="/admin/index/defenceOffsetAPI" element={<DefenceOffsetApi />} />
            
            <Route path="/admin/index/defenceproduction" element={<DefenceProduction />} />
            <Route path="/admin/index/adddefenceproductiondata" element={<AddDefenceProduction />} />

            <Route path="/admin/index/missionrakshagyanshakti" element={<MissionRakshaGyan />}/>
            <Route path="/admin/index/addmrgsipr" element={<AddMrgsIPR/>}/>
            <Route path="/admin/index/addmrgsiconsolidatedData" element={<AddMrgsconsolidetedData/>}/>




            <Route path="/admin/index/makeproject" element={<MakeProject />} />
            <Route path="//admin/index/addmakeproject" element={<AddMakeProject/>}/>
            
            <Route path="/admin/index/make1project" element={<MakeprojectI />} />
            <Route path="/admin/index/addmakeprojectI" element={< AddMakeprojectI/>}/> 

            <Route path="/admin/index/makeprojectdap" element={<Makeproject2dap />} />
            <Route path="/admin/index/addmakeproject2dap" element={<AddMakeproject2dap />} />

            <Route path="/admin/index/makeprojectdpsu" element={<Makeproject2dapsu />} />
            <Route path="/admin/index/addmakeproject2dpsu" element={<AddMakeProject2Dpsu />} />



            

            <Route path="/admin/index/makeproject3" element={<MakeProject3 />} />
            <Route path="/admin/index/addmakeproject3" element={<AddMakeProject3 />} />



            <Route path="/admin/index/makeproject3dap" element={<MakeProject3dap />} />
            <Route path="/admin/index/addDap" element={<AddDap/>} />


            <Route path="/admin/index/makeproject3dpsu" element={<MakeProject3dpsu />} />
            <Route path="/admin/index/addDpsu" element={<AddDpsu/>} />


            <Route path="/admin/index/idex" element={<Idex />} />
            <Route path="/admin/index/addidexdata" element={<AddIdexData />} />

            <Route path="/admin/index/uttarpradeshdefence" element={<UpDefenceCorridor />} />
            <Route path="/admin/index/addupdefenceData" element={<AddupDefenceData />} />
            <Route path="/admin/index/addannouncedataup" element={<AddAnnounceDataUp />} />


            <Route path="/admin/index/tamilnadudefence" element={<TamilnaduDefenceCorridor />} />
            <Route path="/admin/index/addtamilnadudefenceData" element={<AddTamilDefenceData/>} />
            <Route path="/admin/index/addannouncedatatn" element={<AddAnnounceDataTN/>} />
            

            <Route path="/admin/index/aidefence" element={<AIinDefence />} />
            <Route path="/admin/index/addaidefenceData" element={<AddAIData />} />
           
        {/* Pryas API*/}


        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
