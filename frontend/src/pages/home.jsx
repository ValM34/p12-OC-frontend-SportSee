import AverageSessions from "..//components/charts/AverageSessions.jsx";
import ActivityType from "..//components/charts/ActivityType.jsx";
import DailyActivity from "..//components/charts/DailyActivity.jsx";
import AverageScore from "..//components/charts/AverageScore.jsx";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import caloriesIcon from "../assets/images/food/calories-icon.svg";
import proteinIcon from "../assets/images/food/protein-icon.svg";
import carbsIcon from "../assets/images/food/carbs-icon.svg";
import fatIcon from "../assets/images/food/fat-icon.svg";
import getData from '../utils/services/getData.js';
import { useEffect, useState } from 'react';

function Home() {
  const location = useLocation();
  const userId = location.pathname.split('/')[1];
  const [data, setData] = useState(null);
  useEffect(() => {
    getData(userId)
      .then((data) => {
        setData(data);
      })
  }, [userId])
  console.log(data)
  return (
    <MainLayout>
      <div className="home-page-container">
        <div className="home-and-congratulation-container">
          <h1>
            Bonjour <span>{data ? data.userMainData?.data.userInfos.firstName : ""}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <section className="charts-section">
          <div className="charts-container">
            <div className="charts-subcontainer-1">
              <div className="chart-container">
                <DailyActivity data={data?.userActivity} />
              </div>
            </div>
            <div className="charts-subcontainer-2">
              <div className="chart-container">
                <AverageSessions data={data?.userAverageSession} />
              </div>
              <span></span>
              <div className="chart-container">
                <ActivityType data={data?.userPerformance} />
              </div>
              <span></span>
              <div className="chart-container">
                <AverageScore data={data?.userAverageScore} />
              </div>
            </div>
          </div>
          <div className="food-infos-container">
            <div className="food-infos">
              <div className="food-icon-container">
                <img src={caloriesIcon} alt="calories icon" />
              </div>
              <div className="food-infos-texts-container">
                <div className="value">
                  {data ? data.userMainData?.data.keyData.calorieCount : ""}kCal
                </div>
                <div className="key">
                  Calories
                </div>
              </div>
            </div>
            <div className="food-infos">
              <div className="food-icon-container">
                <img src={proteinIcon} alt="protein icon" />
              </div>
              <div className="food-infos-texts-container">
                <div className="value">
                  {data ? data.userMainData?.data.keyData.proteinCount : ""}g
                </div>
                <div className="key">
                  Protéines
                </div>
              </div>
            </div>
            <div className="food-infos">
              <div className="food-icon-container">
                <img src={carbsIcon} alt="carbs icon" />
              </div>
              <div className="food-infos-texts-container">
                <div className="value">
                  {data ? data.userMainData?.data.keyData.carbohydrateCount : ""}g
                </div>
                <div className="key">
                  Glucides
                </div>
              </div>
            </div>
            <div className="food-infos">
              <div className="food-icon-container">
                <img src={fatIcon} alt="fat icon" />
              </div>
              <div className="food-infos-texts-container">
                <div className="value">
                  {data ? data.userMainData?.data.keyData.lipidCount : ""}g
                </div>
                <div className="key">
                  Lipides
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Home;
