import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../../public/data.js';

export default class FetchMock {
  constructor(userId) {
    this.userId = parseInt(userId);
  }

  getUserMainData() {
    let userSelectedById = USER_MAIN_DATA.find((user) => {
      return user.id === this.userId;
    });
    userSelectedById = {data: userSelectedById}
    return userSelectedById;
  }

  getUserActivity() {
    let userSelectedById = USER_ACTIVITY.find((user) => {
      return user.userId === this.userId;
    })
    userSelectedById = {data: userSelectedById};
    return userSelectedById;
  }

  getUserAverageSessions() {
    let userSelectedById = USER_AVERAGE_SESSIONS.find((user) => {
      return user.userId === this.userId;
    })
    userSelectedById = {data: userSelectedById};
    return userSelectedById;
  }

  getUserPerformance() {
    let userSelectedById = USER_PERFORMANCE.find((user) => {
      return user.userId === this.userId;
    })
    userSelectedById = {data: userSelectedById};
    return userSelectedById;
  }
}
