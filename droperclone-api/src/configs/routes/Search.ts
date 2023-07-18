import SearchRouter from "@routes/Search";
import CalendarController from "@controllers/Calendar";
import Calendar from "@models/Calendar";
import CalendarRepository from "@repositories/Calendar";
import CalendarService from "@services/Calendar";
import { getRepository } from "typeorm";
import SearchController from "@controllers/Search";
import FeedRepository from "@repositories/Feed";
import FeedService from "@services/Feed";
import Feed from "@models/Feed";

const calendarRepository = new CalendarRepository(getRepository(Calendar));
const calendarService = new CalendarService(calendarRepository);
const feedRepository = new FeedRepository(getRepository(Feed));
const feedService = new FeedService(feedRepository);
const searchController = new SearchController(calendarService, feedService);
const searchRouter = new SearchRouter(searchController);

export default searchRouter.getRouter();
