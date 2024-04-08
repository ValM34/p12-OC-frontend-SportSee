import AverageSessions from "..//components/charts/AverageSessions.jsx";
import ActivityType from "..//components/charts/ActivityType.jsx";
import DailyActivity from "..//components/charts/DailyActivity.jsx";
import AverageScore from "..//components/charts/AverageScore.jsx";
import { useLocation } from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import caloriesIcon from "../assets/images/food/calories-icon.svg";
import proteinIcon from "../assets/images/food/protein-icon.svg";
import carbsIcon from "../assets/images/food/carbs-icon.svg";
import fatIcon from "../assets/images/food/fat-icon.svg";

function Home() {
  const location = useLocation();
  let averageScoreData = useFetch(
    `http://localhost:3000/user${location.pathname}`
  );
  let dailyActivityData = useFetch(
    `http://localhost:3000/user${location.pathname}/activity`
  );
  let averageSessionsData = useFetch(
    `http://localhost:3000/user${location.pathname}/average-sessions`
  );
  let activityTypeData = useFetch(
    `http://localhost:3000/user${location.pathname}/performance`
  );

  // Normalize the data
  let averageScoreDataUpdated;
  if (averageScoreData) {
    if (averageScoreData.data.score) {
      averageScoreDataUpdated = [
        {
          name: "Score",
          todayScore: averageScoreData?.data.score * 100,
          fill: "#82ca9d",
        },
      ];
    } else {
      averageScoreDataUpdated = [
        {
          name: "Score",
          todayScore: averageScoreData?.data.todayScore * 100,
          fill: "#82ca9d",
        },
      ];
    }
  }
  if (dailyActivityData) {
    for (let i = 0; i < dailyActivityData.data.sessions.length; i++) {
      dailyActivityData.data.sessions[i].day = i + 1;
    }
  }
  activityTypeData = activityTypeData?.data.data.map((data) => ({
    ...data,
    kind: activityTypeData?.data.kind[data.kind],
  }));
  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  averageSessionsData = averageSessionsData?.data.sessions.map((session) => ({
    ...session,
    day: days[session.day],
  }));

  console.log(averageScoreData?.data.keyData)

  return (
    <MainLayout>
      <div className="home-page-container">
        <div className="home-and-congratulation-container">
          <h1>
            Bonjour <span>{averageScoreData ? averageScoreData.data.userInfos.firstName : ""}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <section className="charts-section">
          <div className="charts-container">
            <div className="charts-subcontainer-1">
              <div className="chart-container">
                <DailyActivity data={dailyActivityData} />
              </div>
            </div>
            <div className="charts-subcontainer-2">
              <div className="chart-container">
                <AverageSessions data={averageSessionsData} />
              </div>
              <span></span>
              <div className="chart-container">
                <ActivityType data={activityTypeData} />
              </div>
              <span></span>
              <div className="chart-container">
                <AverageScore data={averageScoreDataUpdated} />
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
                  {averageScoreData ? averageScoreData.data.keyData.calorieCount : ""}kCal
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
                  {averageScoreData ? averageScoreData.data.keyData.proteinCount : ""}g
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
                  {averageScoreData ? averageScoreData.data.keyData.carbohydrateCount : ""}g
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
                  {averageScoreData ? averageScoreData.data.keyData.lipidCount : ""}g
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
