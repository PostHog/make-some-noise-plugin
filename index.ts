import faker from "faker";

export function runEveryMinute() {
  const randomData = faker.helpers.contextualCard();
  posthog.capture("random event", { ...randomData });
}
