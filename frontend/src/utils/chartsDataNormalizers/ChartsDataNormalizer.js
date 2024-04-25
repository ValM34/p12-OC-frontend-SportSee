export default class ChartsDataNormalizer {
  normalizeActivityTypeDataForChart(activityTypeData) {
    activityTypeData = activityTypeData?.data.data.map((data) => ({
      ...data,
      kind: activityTypeData?.data.kind[data.kind],
    }));
    return activityTypeData;
  }

  normalizeAverageScoreDataForChart(averageScoreData) {
    let dataNormalized;
    if(averageScoreData.data.score) {
      dataNormalized = [
        {
          name: "Score",
          todayScore: averageScoreData?.data.score * 100,
        },
      ];
    } else {
      dataNormalized = [
        {
          name: "Score",
          todayScore: averageScoreData?.data.todayScore * 100,
        },
      ];
    }

    return dataNormalized;
  }

  normalizeAverageSessionsDataForChart(averageSessionsData) {
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
      min: session.sessionLength,
      day: days[session.day],
    }));

    return averageSessionsData;
  }

  normalizeDailyActivityDataForChart(dailyActivityData) {
    for (let i = 0; i < dailyActivityData.data.sessions.length; i++) {
      dailyActivityData.data.sessions[i].day = i + 1;
    }
    return dailyActivityData;
  }
}
