import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Authentication from './pages/Authentication';
import AdminLogin from './components/auth/AdminLogin';
import React from 'react';
import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
import ShowRoadmap from './components/Roadmaps/RoadmapTemplate';
import WeGuide from './pages/weGuide';
import ReligiousStudies from './pages/humanities/ReligiousStudies';
import Languages from './pages/humanities/Languages';
import VisualandPerformingArts from './pages/humanities/VisualandPerformingArts';
import Communication from './pages/humanities/Communication';
import Anthropology from './pages/humanities/Anthropology';
import CulturalStudies from './pages/humanities/CulturalStudies';
import DiplomainEducation from './pages/arts/DiplomainEducation';
import Law from './pages/arts/Law';
import FashionDesign from './pages/arts/FashionDesign';
import AdvertisingManagement from './pages/arts/AdvertisingManagement';
import BArch from './pages/arts/BArch';
import BusinessManagement from './pages/arts/BusinessManagement';
import DiplomaInDramatization from './pages/arts/DiplomaInDramatization';
import EventManagement from './pages/arts/EventManagement';
import ForeignLanguagesDiploma from './pages/arts/ForeignLanguagesDiploma';
import InteriorDesign from './pages/arts/InteriorDesign';
import Journalism from './pages/arts/Journalism';
import BachelorOfEducation from './pages/commerce/BachelorOfEducation';
import BankingInsurance from './pages/commerce/BankingInsurance';
import Bcom from './pages/commerce/BCom';
import CharteredAccountant from './pages/commerce/CharteredAccountant';
import Agriculture from './pages/science/Agriculture';
import BachelorofScience from './pages/science/BachelorofScience';
import HomeScience from './pages/science/HomeScience';
import HotelManagement from './pages/science/HotelManagement';
import MBBS from './pages/science/MBBS';
import NDA from './pages/science/NDA';
import Nursing from './pages/science/Nursing';
import Pharmacy from './pages/science/Pharmacy';
import Technology from './pages/science/Technology';
import UPSC from './pages/commerce/UPSC';
import AdminDashboard from './components/Admin/AdminDashboard'
import UserDashboard from './components/UserDashboard'
import AdminSlidebarActions from './components/Admin/AdminSlidebarActions';
import Addrecommendedskill from './components/addrecommendedskill';
import History from './pages/humanities/History';
import Literature from './pages/humanities/Literature';
import ExpertGuidance from './pages/expertguidance';
import Philosophy from './pages/humanities/Philosophy';


function App() {
  

  

  return (
    // <div className="">
    //   <Home/>
    // </div>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        {/*Admin routes*/}
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        {/*<Route path="/displayusers" element={<AdminSlidebarActions />}/>*/}
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/myRoadmap" element={<ShowRoadmap />} />
        <Route path="/weGuide" element={<WeGuide />} />
        <Route path="/humanities/History" element={<History />} />
        <Route path="/humanities/Philosophy" element={<Philosophy />} />
        <Route path="/humanities/Literature" element={<Literature />} />
        <Route path='/humanities/ReligiousStudies' element={<ReligiousStudies />} />
        <Route path='/humanities/VisualandPerformingArts' element={<VisualandPerformingArts />} />
        <Route path='/humanities/Communication' element={<Communication />} />
        <Route path='/humanities/Languages' element={<Languages />} />
        <Route path='/humanities/Anthropology' element={<Anthropology />} />
        <Route path='/humanities/CulturalStudies' element={<CulturalStudies />} />
        <Route path='/arts/DiplomainEducation' element={<DiplomainEducation />} />
        <Route path='/arts/Law' element={<Law />} />
        <Route path='/arts/FashionDesign' element={<FashionDesign />} />
        <Route path='/arts/AdvertisingManagement' element={<AdvertisingManagement />} />
        <Route path='/arts/BArch' element={<BArch />} />
        <Route path='/arts/BusinessManagement' element={<BusinessManagement />} />
        <Route path='/arts/DiplomaInDramatization' element={<DiplomaInDramatization />} />
        <Route path='/arts/DiplomainEducation' element={<DiplomainEducation />} />
        <Route path='/arts/EventManagement' element={<EventManagement />} />
        <Route path='/arts/ForeignLanguagesDiploma' element={<ForeignLanguagesDiploma />} />
        <Route path='/arts/InteriorDesign' element={<InteriorDesign />} />
        <Route path='/arts/Journalism' element={<Journalism />} />
        <Route path='/commerce/BachelorOfEducation' element={<BachelorOfEducation />} />
        <Route path='/commerce/BankingInsurance' element={<BankingInsurance />} />
        <Route path='/commerce/Bcom' element={<Bcom />} />
        <Route path='/commerce/BusinessManagement' element={<BusinessManagement />} />
        <Route path='/commerce/CharteredAccountant' element={<CharteredAccountant />} />
        <Route path='/commerce/UPSC' element={<UPSC />} />
        <Route path='/science/Agriculture' element={<Agriculture />} />
        <Route path='/science/BachelorofScience' element={<BachelorofScience />} />
        <Route path='/science/HomeScience' element={<HomeScience />} />
        <Route path='/science/HotelManagement' element={<HotelManagement />} />
        <Route path='/science/MBBS' element={<MBBS />} />
        <Route path='/science/NDA' element={<NDA />} />
        <Route path='/science/Nursing' element={<Nursing />} />
        <Route path='/science/Pharmacy' element={<Pharmacy />} />
        <Route path='/science/Technology' element={<Technology />} />
        <Route path='/myreport' element={<ShowRoadmap />} />
        <Route path="/userDashboard" element={<UserDashboard />}/>
        <Route path="/Addrecommendedskill" element={<Addrecommendedskill />} />
        <Route path='/myreport' element={<ShowRoadmap />} />
        <Route path='/expertguidance' element={<ExpertGuidance />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
