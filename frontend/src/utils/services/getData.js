import { MOCK, baseUrl } from '../../env.js';
import FetchMock from '../fetchMock/fetchMock.js';
import ChartsDataNormalizer from '../chartsDataNormalizers/ChartsDataNormalizer.js';

export default async function getData(userId) {
  // Création de l'objet data
  let data;
  const chartsDataNormalizer = new ChartsDataNormalizer();
  // Vérifie si l'on utilise le mock ou l'API
  if(MOCK) {
    const fetchMock = new FetchMock(userId);

    const averageScoreDataNormalized = chartsDataNormalizer.normalizeAverageScoreDataForChart(fetchMock.getUserMainData());
    const dailyActivityDataNormalized = chartsDataNormalizer.normalizeDailyActivityDataForChart(fetchMock.getUserActivity());
    const activityTypeDataNormalized = chartsDataNormalizer.normalizeActivityTypeDataForChart(fetchMock.getUserPerformance());
    const averageSessionsDataNormalized = chartsDataNormalizer.normalizeAverageSessionsDataForChart(fetchMock.getUserAverageSessions());

    data = {
      userMainData: fetchMock.getUserMainData(),
      userAverageScore: averageScoreDataNormalized,
      userActivity: dailyActivityDataNormalized,
      userAverageSession: averageSessionsDataNormalized,
      userPerformance: activityTypeDataNormalized
    };
  } else {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
    let userMainData;
    let userAverageScore;
    await fetch(`${baseUrl}/user/${userId}`, options)
      .then((res) => res.json())
      .then((res) => {
        userMainData = res;
        const averageScoreDataNormalized = chartsDataNormalizer.normalizeAverageScoreDataForChart(res);
        userAverageScore = averageScoreDataNormalized;
      })
    let userActivity;
    await fetch(`${baseUrl}/user/${userId}/activity`, options)
      .then((res) => res.json())
      .then((res) => {
        userActivity = chartsDataNormalizer.normalizeDailyActivityDataForChart(res);
      })

    let userAverageSession;
    await fetch(`${baseUrl}/user/${userId}/average-sessions`, options)
      .then((res) => res.json())
      .then((res) => {
        userAverageSession = chartsDataNormalizer.normalizeAverageSessionsDataForChart(res);
      })
    
    let userPerformance;
    await fetch(`${baseUrl}/user/${userId}/performance`, options)
      .then((res) => res.json())
      .then((res) => {
        userPerformance = chartsDataNormalizer.normalizeActivityTypeDataForChart(res);
      })

    data = {
      userMainData: userMainData,
      userAverageScore: userAverageScore,
      userActivity: userActivity,
      userAverageSession: userAverageSession,
      userPerformance: userPerformance
    }
  }
  return data;
}
