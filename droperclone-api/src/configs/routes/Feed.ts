import FeedController from "@controllers/Feed";
import Feed from "@models/Feed";
import FeedRepository from "@repositories/Feed";
import FeedRouter from "@routes/Feed";
import FeedService from "@services/Feed";
import { getRepository } from "typeorm";

const feedRepository = new FeedRepository(getRepository(Feed));
const feedService = new FeedService(feedRepository);
const feedController = new FeedController(feedService);
const feedRouter = new FeedRouter(feedController);

export default feedRouter.getRouter();
