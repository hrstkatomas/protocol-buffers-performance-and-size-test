import { events } from "./fixtures/events.ts";
import { league2eventMap } from "./fixtures/league2eventMap.ts";
import { leagues } from "./fixtures/leagues.ts";

const { Event } = require("./generated/event_pb");
const { League } = require("./generated/league_pb");
const { EventFeed } = require("./generated/eventfeed_pb");

function serializeLeague(leagueObject: (typeof leagues)[0]) {
	const league = new League();

	league.setId();
	league.setName(leagueObject.NAME);
	league.setTemplateId(leagueObject.TEMPLATE_ID);
	league.setCountryId(leagueObject.COUNTRY_ID);
	league.setCountryName(leagueObject.COUNTRY_NAME);
	league.setId(leagueObject.ID);
	league.setTemplateType(leagueObject.TEMPLATE_TYPE);
	league.setTemplateId(leagueObject.TOURNAMENT_DI);
	league.setSourceType(leagueObject.SOURCE_TYPE);
	league.setHasLiveTable(leagueObject.HAS_LIVE_TABLE);
	league.setStatType(leagueObject.STAT_TYPE);
	league.setTemplateKey(leagueObject.TEMPLATE_KEY);
	league.setSportStageType(leagueObject.SPORT_STAGE_TYPE);
	league.setTemplateUrl(leagueObject.TEMPLATE_URL);
	league.setImage(leagueObject.IMAGE);
	league.setSortKey(leagueObject.SORT_KEY);
	league.setStageCount(leagueObject.STAGE_COUNT);
	league.setHasStandingsStage(leagueObject.HAS_STANDINGS_STAGE);
	league.setCategoryCaption(leagueObject.CATEGORY_CAPTION);
	league.setDisplay(leagueObject.DISPLAY);
	league.setGCount(leagueObject.G_COUNT);
	league.setSport(leagueObject.SPORT_ID);
	league.setSport(leagueObject.SPORT);
	league.setIsValid(leagueObject.IS_VALID);

	return league;
}

function serializeEvent(eventObject: (typeof events)[0]) {
	const event = new Event();

	event.setHomeCurrentResult(eventObject.HOME_CURRENT_RESULT);
	event.setAwayCurrentResult(eventObject.AWAY_CURRENT_RESULT);
	event.setLive(eventObject.LIVE);
	event.setAwayRedCardCount(eventObject.HOME_RED_CARD_COUNT);
	event.setAwayRedCardCount(eventObject.AWAY_RED_CARD_COUNT);
	event.setHasTvOrLivestreaming(eventObject.HAS_TV_OR_LIVESTREAMING);
	event.setInfoNotice(eventObject.INFO_NOTICE);
	event.setHasLiveBetting(eventObject.HAS_LIVE_BETTING);
	event.setPeriodStartUtime(eventObject.PERIOD_START_UTIME);
	event.setMatchEndUtime(eventObject.MATCH_END_UTIME);
	event.setPeriodUpdateUtime(eventObject.PERIOD_UPDATE_UTIME);
	event.setAssists(eventObject.ASSISTS);
	event.setHomeFullTimeResult(eventObject.HOME_FULL_TIME_RESULT);
	event.setAwayFullTimeResult(eventObject.AWAY_FULL_TIME_RESULT);
	event.setHighlights(eventObject.HIGHLIGHTS);
	event.setHasLiveCentre(eventObject.HAS_LIVE_CENTRE);
	event.setHasLineups(eventObject.HAS_LINEUPS);
	event.setHasOddsComparison(eventObject.HAS_ODDS_COMPARISON);
	event.setFtWinner(eventObject.FT_WINNER);
	event.setHomeResultPeriod1(eventObject.HOME_RESULT_PERIOD_1);
	event.setAwayResultPeriod1(eventObject.AWAY_RESULT_PERIOD_1);
	event.setSourceTypeOfGame(eventObject.SOURCE_TYPE_OF_GAME);
	event.setHomeDrawParticipantWinner(eventObject.HOME_DRAW_PARTICIPANT_WINNER);
	event.setAwayDrawParticipantWinner(eventObject.AWAY_DRAW_PARTICIPANT_WINNER);
	event.setHomeParticipantCountryId(eventObject.HOME_PARTICIPANT_COUNTRY_ID);
	event.setAwayParticipantCountryId(eventObject.AWAY_PARTICIPANT_COUNTRY_ID);
	event.setOddsWinner(eventObject.ODDS_WINNER);
	event.setOddsTop10(eventObject.ODDS_TOP_10);
	event.setOddsWinnerPrevious(eventObject.ODDS_WINNER_PREVIOUS);
	event.setOddsTop10Previous(eventObject.ODDS_TOP_10_PREVIOUS);
	event.setInactiveOdds(eventObject.INACTIVE_ODDS);
	event.setHomeScoresChanged(eventObject.HOME_SCORES_CHANGED);
	event.setAwayScoresChanged(eventObject.AWAY_SCORES_CHANGED);
	event.setSwappedParticipants(eventObject.SWAPPED_PARTICIPANTS);
	event.setHomePenaltyShotList(eventObject.HOME_PENALTY_SHOT);
	event.setAwayPenaltyShotList(eventObject.AWAY_PENALTY_SHOT);
	event.setHomePenaltyMissedList(eventObject.HOME_PENALTY_MISSED);
	event.setAwayPenaltyMissedList(eventObject.AWAY_PENALTY_MISSED);
	event.setOddsTop5(eventObject.ODDS_TOP_5);
	event.setOddsTop5Previous(eventObject.ODDS_TOP_5_PREVIOUS);
	event.setIsValid(eventObject.IS_VALID);
	event.setOriginalId(eventObject.ORIGINAL_ID);
	event.setLabelId(eventObject.LABEL_ID);
	event.setSportId(eventObject.SPORT_ID);
	event.setSport(eventObject.SPORT);
	event.setMatchStartUtime(eventObject.MATCH_START_UTIME);
	event.setEventStartUtime(eventObject.EVENT_START_UTIME);
	event.setEventStageTypeId(eventObject.EVENT_STAGE_TYPE_ID);
	event.setEventStageTypeFromEventStageId(
		eventObject.EVENT_STAGE_TYPE_FROM_EVENT_STAGE_ID,
	);
	event.setEventStageId(eventObject.EVENT_STAGE_ID);
	event.setSortParticipant(eventObject.SORT_PARTICIPANT);
	event.setCricketVisibleRunRate(eventObject.CRICKET_VISIBLE_RUN_RATE);
	event.setGameTime(eventObject.GAME_TIME);
	event.setPlayingOnSets(eventObject.PLAYING_ON_SETS);
	event.setCricketRecentOvers(eventObject.CRICKET_RECENT_OVERS);
	event.setHome3charName(eventObject.HOME_3CHAR_NAME);
	event.setHomeParticipantName(eventObject.HOME_PARTICIPANT_NAME);
	event.setHomeFirstParticipantName(eventObject.HOME_FIRST_PARTICIPANT_NAME);
	event.setHomeEventParticipantId(eventObject.HOME_EVENT_PARTICIPANT_ID);
	event.setHomeGoalUnderReview(eventObject.HOME_GOAL_UNDER_REVIEW);
	event.setBettingType(eventObject.BETTING_TYPE);
	event.setAway3charName(eventObject.AWAY_3CHAR_NAME);
	event.setAwayParticipantName(eventObject.AWAY_PARTICIPANT_NAME);
	event.setAwayFirstParticipantName(eventObject.AWAY_FIRST_PARTICIPANT_NAME);
	event.setAwayEventParticipantId(eventObject.AWAY_EVENT_PARTICIPANT_ID);
	event.setAwayGoalUnderReview(eventObject.AWAY_GOAL_UNDER_REVIEW);
	event.setOddsScope(eventObject.ODDS_SCOPE);
	event.setBookmakerListLiveInOffer(eventObject.BOOKMAKER_LIST_LIVE_IN_OFFER);
	event.setSortKeyStr(eventObject.SORT_KEY_STR);

	return event;
}

export function getData(): Uint8Array {
	const eventFeed = new EventFeed();

	for (const league of leagues) {
		const leagueProto = serializeLeague(league);

		const eventIds = league2eventMap.get(league.ID) ?? [];
		for (const eventId of eventIds) {
			const event = events.find((event) => event.ORIGINAL_ID === eventId);
			if (!event) continue;

			const eventProto = serializeEvent(event);
			leagueProto.addEvents(eventProto);
		}

		eventFeed.addLeagues(leagueProto);
	}

	return eventFeed.serializeBinary();
}
