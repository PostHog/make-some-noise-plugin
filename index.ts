import faker from "faker";

const rnd = (nr) => Math.ceil(Math.random() * nr) - 1;

const eventTypes = [
  {
    name: "user_signup",
    url: "/",
  },
  {
    name: "browse_catalog",
    url: "/",
  },
  {
    name: "product_impresssion",
    url: "/",
  },
  {
    name: "product_description_view",
    url: "/product",
  },
  {
    name: "add_to_cart",
    url: "/cart",
  },
  {
    name: "checkout",
    url: "/checkout",
  },
];

const initial_referrers = [
  "google.com",
  "bing.com",
  "news.com",
  "facebook.com",
];
const productIDs = [
  12213, 231240, 1249210, 213221, 43242, 93204, 123123, 3423, 124124, 3902034,
  312131, 42039402, 123123, 12239,
];

export async function runEveryMinute({ config }) {
  const count = parseInt(config.amplification) || 1;
  for (let i = 0; i < count; i++) {
    await makeNoise();
  }
}

export async function setupPlugin() {
  // make some noise on start
  await makeNoise();
}

const makeNoise = async () => {
  //Always include signup
  const steps = rnd(eventTypes.length) + 1;
  const product_id = productIDs[rnd(productIDs.length)];
  const initial_referrer = initial_referrers[rnd(initial_referrers.length)];
  const userData = faker.helpers.contextualCard();
  //Run through event types in order
  for (var i = 0; i < steps; i++) {
    //simulate realistic time between events
    const time_offset = rnd(100000);
    const event_timestamp = +new Date() + time_offset * i;
    //Always generate a pageview event
    await submitEvent({
      name: "$pageview",
      timestamp: event_timestamp,
      initial_referrer: initial_referrer,
      referrer: i == 0 ? "/" : eventTypes[i - 1].url,
      current_url: eventTypes[i].url,
      userData: userData,
    });

    //For user_signup and browse catalog don't use a productID
    if (!["user_signup", "browse_catalog"].includes(eventTypes[i].name)) {
      await submitEvent({
        name: eventTypes[i].name,
        productID: product_id,
        timestamp: event_timestamp,
        initial_referrer: initial_referrer,
        referrer: eventTypes[i - 1].url,
        current_url: eventTypes[i].url,
        userData: userData,
      });
    } else {
      await submitEvent({
        name: eventTypes[i].name,
        timestamp: event_timestamp,
        initial_referrer: initial_referrer,
        referrer: "/",
        current_url: eventTypes[i].url,
        userData: userData,
      });
    }
  }
};

const submitEvent = async (event) => {
  const resp = await posthog.capture(event.name, {
    $timestamp: new Date(event.timestamp),
    $browser: "Chrome",
    $browser_version: 100,
    $current_url: `http://amazingstore.com${event.current_url}`,
    $device_type: "Desktop",
    $geoip_city_name: event.userData.address.city,
    $host: "http://localhost:8000",
    $initial_referrer: `http://${event.initial_referrer}`,
    $initial_referring_domain: `http://${event.initial_referrer}`,
    $os: "Mac OS X",
    $pathname: event.current_url,
    $referrer: `http://amazingstore.com${event.referrer}`,
    $screen_height: 900,
    $screen_width: 1440,
    $time: (event.timestamp / 1000),
    $user_id: event.userData.username,
    distinct_id: event.userData.username,
    product_id: event.productID? event.productID:  null, 
    $set: { email: event.userData.email}
  });
};
