import WelcomeSection from "../componentss/WelcomeSection"
import AppointmentOverview from "../componentss/AppointmentOverview"
import StatisticsOverview from "../componentss/StatisticsOverview"
import FeaturedProperties from "../componentss/FeaturedProperties"
import Footer from "../componentss/Footer"
const LandingPage = () => {
  return (
    <div>
      <WelcomeSection/>
      <AppointmentOverview/>
      <StatisticsOverview/>
      <FeaturedProperties/>
      <Footer/>
    </div>
  )
}

export default LandingPage