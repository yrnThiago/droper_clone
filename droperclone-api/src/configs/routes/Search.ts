import SearchRouter from "@routes/Search";
import CalendarController from "@controllers/Calendar";
import Calendar from "@models/Calendar";
import CalendarRepository from "@repositories/Calendar";
import CalendarService from "@services/Calendar";
import { getRepository } from "typeorm";
import SearchController from "@controllers/Search";

const calendarRepository = new CalendarRepository(getRepository(Calendar));
const calendarService = new CalendarService(calendarRepository);
const searchController = new SearchController(calendarService);
const searchRouter = new SearchRouter(searchController);

export default searchRouter.getRouter();
