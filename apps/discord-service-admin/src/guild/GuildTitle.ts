import { Guild as TGuild } from "../api/guild/Guild";

export const GUILD_TITLE_FIELD = "id";

export const GuildTitle = (record: TGuild): string => {
  return record.id?.toString() || String(record.id);
};
