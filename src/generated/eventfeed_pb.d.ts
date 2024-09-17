// package: eventFeed.v1
// file: eventfeed.proto

import * as jspb from "google-protobuf";
import * as league_pb from "./league_pb";

export class EventFeed extends jspb.Message {
  clearLeaguesList(): void;
  getLeaguesList(): Array<league_pb.League>;
  setLeaguesList(value: Array<league_pb.League>): void;
  addLeagues(value?: league_pb.League, index?: number): league_pb.League;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventFeed.AsObject;
  static toObject(includeInstance: boolean, msg: EventFeed): EventFeed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventFeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventFeed;
  static deserializeBinaryFromReader(message: EventFeed, reader: jspb.BinaryReader): EventFeed;
}

export namespace EventFeed {
  export type AsObject = {
    leaguesList: Array<league_pb.League.AsObject>,
  }
}

