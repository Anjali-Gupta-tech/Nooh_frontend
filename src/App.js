import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Skylume from './pages/Skylume';
import NoohStar from './pages/NoohStar';
import Contact from './pages/Contact';
import CeilingSolution from './pages/Ceiling/CeilingSolution';
import WallSolution from './pages/Wall/WallSolution';
import FloorSolution from './pages/Floor/FloorSolution';
import DecorativeSolution from './pages/DecorativeSolution';
import StretchCeiling from './pages/Ceiling/StretchCeiling';
import AsiftextileCeiling from './pages/Ceiling/AsiftextileCeiling';
import MuralCeiling from './pages/Ceiling/MuralCeiling';
import SunroofCeiling from './pages/Ceiling/SunroofCeiling';
import ThreeDStretchCeiling from './pages/Ceiling/ThreeDStretchCeiling';
import FloatingContactButtons from './components/FloatingContactButtons';
import ThreeDallshape from './pages/Ceiling/ThreeDallshape';

import Rgbwpixel from './pages/Ceiling/Rgbwpixel';
import GlossStretch from './pages/Ceiling/GlossStretch';
import TunableDimmable from './pages/Ceiling/TunableDimmable';
import DualCompatible from './pages/Ceiling/DualCompatible';
import Franchise from './components/Franchise';
import BlacklitAryclicwallart from './pages/Wall/BlacklitAryclicwallart';
import Blackoutdecorativewall from './pages/Wall/Blackoutdecorativewall';
import Customprintedwallpaper from './pages/Wall/Customprintedwallpaper';
import Fabricwallmural from './pages/Wall/Fabricwallmural';
import PaintingFraming from './pages/Wall/PaintingFraming';
import RgbwpixelStretcWall from './pages/Wall/RgbwpixelStretchWall';
import ThreeDwallmural from './pages/Wall/ThreeDwallmural';
import TranslucentStretchWall from './pages/Wall/TranslucentStretchWall';
import VinylyWallMural from './pages/Wall/VinylWallMural';
import ThreeDPrintedStretchWall from './pages/Wall/ThreeDPrintedStretchWall';
import Metallicpoxyflooring from './pages/Floor/Metallicpoxyflooring';
import ThreeDmuralExpoxy from './pages/Floor/ThreeDmuralExpoxy';
import WoodenFlooring from './pages/Floor/WoodenFlooring';
import Translucentnew from './pages/Servicesnewpages/Translucentnew';
import Stretchprint from './pages/Servicesnewpages/Stretchprint';
import Stretchgloss from './pages/Servicesnewpages/Stretchgloss';
import Stretchpanel from './pages/Servicesnewpages/Stretchpanel';
import StarSky from './pages/Servicesnewpages/StarSky';
import FiberskyGalaxy from './pages/Servicesnewpages/FiberskyGalaxy';
import FiberskyRgb from './pages/Servicesnewpages/FiberskyRgb';
import FiberskyTwinkling from './pages/Servicesnewpages/FiberskyTwinkling';
import MuralLiving from './pages/Servicesnewpages/MuralLiving';
import Dealership from './pages/franchise/Dealership';
import Associate from './pages/franchise/Associate';
import DealerForm from './pages/franchise/Dealerform';
import AssociateForm from './pages/franchise/Associateform';
import Training from './pages/franchise/Training';
import Trainingform from './pages/franchise/Trainingform';
import ScrollToTop from "./components/ScrollToTop";
import BespokeWall from './pages/Servicesnewpages/BespokeWall';
import PatternLine from './pages/Servicesnewpages/PatternLine';
import EmbroWall from './pages/Servicesnewpages/Embrowall';
import WallScript from './pages/Servicesnewpages/WallScript';
import MirroraCollection from './pages/Servicesnewpages/MirroraCollection';
import CloudwaveGloss from './pages/Servicesnewpages/CloudwaveGloss';
import CloudwavePrint from './pages/Servicesnewpages/CloudwavePrint';
import CloudwaveSatin from './pages/Servicesnewpages/CloudwaveSatin';
import CloudwaveTexture from './pages/Servicesnewpages/CloudwaveTexture';
import TranslucentDetails from './pages/Servicesnewpages/TranslucentDetails';
function App() {

  return (
    <HelmetProvider>
      <Router>
        <div className="App bg-luxury-black min-h-screen">
            <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/franchise" element={< Franchise />}/>
            <Route path="/skylume" element={<Skylume />} />
            <Route path="/noohstar" element={<NoohStar />} />
            <Route path="/ceiling-solutions" element={<CeilingSolution />} />
            <Route path="/products/mirrora/:id" element={<MirroraCollection/>}/>
             <Route path="/products/cloudwave-gloss" element={<CloudwaveGloss/>}/>
             <Route path="/products/cloudwave/satin" element={<CloudwaveSatin/>}/>
             <Route path="/products/cloudwave/print" element={<CloudwavePrint/>}/>
             <Route path="/products/cloudwave/texture" element={<CloudwaveTexture/>}/>
             <Route path="/products/translucent/:slug" element={<TranslucentDetails/>}/>

            {/* routes for specific ceiling types */}
            <Route path="/stretch-ceiling" element={<StretchCeiling />} />

             {/*Stretch Ceiling sub-routes*/}
            <Route path="/3d-stretch-ceiling" element={<ThreeDStretchCeiling />} />
            <Route path="/all-shape-ceiling"  element={<ThreeDallshape/>}/>
        
            <Route path="/rgbw-ceiling" element={< Rgbwpixel/>}/>
            <Route path="/gloss-ceiling" element={< GlossStretch/>}/>
            <Route path="/tunable-ceiling" element={<TunableDimmable/>}/>
            <Route path="/dual-compatible-ceiling" element={<DualCompatible/>}/>

           <Route path="/asif-textile-ceiling" element={<AsiftextileCeiling />} />
            <Route path="/mural-ceiling" element={<MuralCeiling />} />
            <Route path="/french-virtual-sunroof" element={<SunroofCeiling />} />
            <Route path="/asiftextile-ceiling" element={<AsiftextileCeiling />} />
            <Route path="/mural-ceiling" element={<MuralCeiling />} />
            <Route path="/sunroof-ceiling" element={<SunroofCeiling />} />
              {/* Wall Solution  */}
            <Route path="/wall-solutions" element={<WallSolution />} />
            {/* Wall Categories */}
            <Route path="/translucent-stretch-wall"  element={< TranslucentStretchWall/>}/>
            <Route path="/backlit-acrylic-wall-art" element={<BlacklitAryclicwallart/>}/>
            <Route path="/block-out-decorative-wall" element={<Blackoutdecorativewall/>}/>
            <Route path="/custom-printed-wallpaper" element={<Customprintedwallpaper/>}/>
            <Route path="/fabric-wall-mural" element={<Fabricwallmural/>}/>
            <Route path="/painting-framing" element={<PaintingFraming/>}/>
            <Route path="/rgbw-pixel-wall" element={<RgbwpixelStretcWall/>}/>
            <Route path="/3d-wall-mural" element={<ThreeDwallmural/>}/>
            <Route path="/vinyl-wall-mural" element={<VinylyWallMural/>}/>
             <Route path="/threed-stretch-wall" element={<ThreeDPrintedStretchWall/>}/>
             {/* Floor Solutions */}
            <Route path="/floor-solutions" element={<FloorSolution />} />
            {/*Floor Categories  */}
            <Route path="/metallic-epoxy-flooring" element={<Metallicpoxyflooring />} />
            <Route path="/3d-mural-epoxy-flooring" element={<ThreeDmuralExpoxy/>} />
            <Route path="/wooden-flooring" element={<WoodenFlooring />} />

            <Route path="/decorative-solutions" element={<DecorativeSolution />} />
       
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/stretch-ceiling/translucent" element={<Translucentnew/>} />
           <Route path="/products/stretch-ceiling/print" element={<Stretchprint/>} />
           <Route path="/products/stretch-ceiling/gloss" element={<Stretchgloss/>} />

         <Route path="/products/stretch-ceiling/panel" element={<Stretchpanel/>} />
      <Route path="/products/fiber-optic/star-sky" element={<StarSky/>} />
      <Route path="/products/fiber-optic/galaxy-star" element={<FiberskyGalaxy/>} />
    <Route path="/products/fiber-optic/rgb-star" element={<FiberskyRgb/>} />
    <Route path="/products/fiber-optic/twinkling-star" element={<FiberskyTwinkling/>} />
  
    <Route path="/products/bespokewall" element={<BespokeWall/>}/>
    <Route path="/products/patternline" element={<PatternLine/>}/>
    <Route path="/products/emborwall" element={<EmbroWall/>}/>
    <Route path="/product/wallscript" element={<WallScript/>}/>
    {/* franchise */}
    <Route path="/franchise/dealership" element={<Dealership/>}/>
    <Route path="/franchise/dealershipform" element={<DealerForm/>}/>
    <Route path="/franchise/associateform" element={<AssociateForm/>}/>

    <Route path="/franchise/associate" element={<Associate/>}/>
    <Route path="/franchaise/training" element={<Training/>}/>
    <Route path="/franchise/trainingform" element={<Trainingform/>}/>
      
           </Routes>
          <Footer />
       
          <FloatingContactButtons/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

