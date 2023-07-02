import CalendarController from "@controllers/Calendar";
import Calendar from "@models/Calendar";
import CalendarRepository from "@repositories/Calendar";
import CalendarRouter from "@routes/Calendar";
import CalendarService from "@services/Calendar";
import { getRepository } from "typeorm";

const calendarRepository = new CalendarRepository(getRepository(Calendar));
const calendarService = new CalendarService(calendarRepository);
const calendarController = new CalendarController(calendarService);
const calendarRouter = new CalendarRouter(calendarController);

export default calendarRouter.getRouter();
