import { config } from "@/config";
import {
  summaryMessage,
  threadMessages,
  threadName,
} from "@/datamine/web/notify/discord";
import { commentBody } from "@/datamine/web/notify/github";
import { isNoise } from "@/datamine/web/notify/sections";
import { publish } from "@/notify/publish";

import type { Report } from "@/types";

const reports = (await Bun.file(
  `${config.paths.reports}/reports.json`
).json()) as Report[];

for (const report of reports.filter((item) => !item.initial)) {
  await publish(commentBody(report), (link) => ({
    summary: summaryMessage(report, link),
    thread: isNoise(report)
      ? undefined
      : { messages: threadMessages(report, link), name: threadName(report) },
  }));
}
