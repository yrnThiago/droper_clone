import { Router } from "express";
import { ICalendarController, ICalendarRouter } from "@interfaces/Calendar";

class CalendarRouter implements ICalendarRouter {
  path: string = "/calendar";
  calendarController: ICalendarController;

  constructor(calendarController: ICalendarController) {
    this.calendarController = calendarController;
  }

  getRouter(): Router {
    const router: Router = Router();

    router
      .route(`${this.path}`)
      .post(this.calendarController.add)
      .get(this.calendarController.getMany);

    router
      .route(`${this.path}/dates`)
      .get(this.calendarController.getDates);

    return router;
  }
}

export default CalendarRouter;
