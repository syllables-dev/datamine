import { nativeDir } from "@/datamine/native/config";
import {
  isQuiet,
  summaryMessage,
  threadMessages,
  threadName,
} from "@/datamine/native/notify/discord";
import { nativeComment } from "@/datamine/native/notify/github";
import { readJson } from "@/lib/files";
import { publish } from "@/notify/publish";

import type { NativeReport } from "@/datamine/native/types";

const report = await readJson<NativeReport>(`${nativeDir}/regression.json`);

if (report) {
  await publish(nativeComment(report), (link) => ({
    summary: summaryMessage(report, link),
    thread: isQuiet(report)
      ? undefined
      : { messages: threadMessages(report, link), name: threadName(report) },
  }));
} else {
  console.log("No regression report, nothing to notify (first snapshot)");
}
