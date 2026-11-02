import { config } from "@/config";
import {
  isQuiet,
  summaryMessage,
  threadMessages,
  threadName,
} from "@/datamine/native/notify/discord";
import { commentBody } from "@/datamine/native/notify/github";
import { readJson } from "@/lib/files";
import { publish } from "@/notify/publish";

import type { NativeReport } from "@/datamine/native/types";

const report = await readJson<NativeReport>(
  `${config.paths.native}/regression.json`
);

if (report) {
  await publish(commentBody(report), (link) => ({
    summary: summaryMessage(report, link),
    thread: isQuiet(report)
      ? undefined
      : { messages: threadMessages(report, link), name: threadName(report) },
  }));
} else {
  console.log("No regression report, nothing to notify (first snapshot)");
}
