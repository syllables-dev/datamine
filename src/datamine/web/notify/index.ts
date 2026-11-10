import { reportsDir } from "@/config";
import {
  summaryMessage,
  threadMessages,
  threadName,
} from "@/datamine/web/notify/discord";
import { webComment } from "@/datamine/web/notify/github";
import { isNoise } from "@/datamine/web/notify/sections";
import { publish } from "@/notify/publish";

import type { Report } from "@/datamine/web/types";

const reports = (await Bun.file(
  `${reportsDir}/reports.json`
).json()) as Report[];

for (const report of reports.filter((item) => !item.initial)) {
  await publish(webComment(report), (link) => ({
    summary: summaryMessage(report, link),
    thread: isNoise(report)
      ? undefined
      : { messages: threadMessages(report, link), name: threadName(report) },
  }));
}
