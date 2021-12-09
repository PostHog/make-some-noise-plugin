import faker from 'faker'

const rnd = (nr: number) => Math.ceil(Math.random() * nr) - 1

const urls = ['/project/plugins', '/events', '/insights', '/signup', '/']

export async function runEveryMinute({ config }) {
    const count = parseInt(config.amplification) || 1
    for (let i = 0; i < count; i++) {
        await makeNoise()
    }
}

export async function setupPlugin() {
    // make some noise on start
    await makeNoise()
}

async function makeNoise() {
    const randomChoice = rnd(2)
    const userData = faker.helpers.contextualCard()
    
    await posthog.capture('user signup', { ...userData, distinct_id: userData.username, $groups: {'organization': userData.company.name} })
    if (randomChoice === 1) {
        // For correlation
        await posthog.capture('correlated', {...userData, $groups: {'organization': userData.company.name} })

        const path = urls[rnd(urls.length)]
        await posthog.capture('$pageview', {
            $groups: {'organization': userData.company.name},
            $active_feature_flags: [],
            $browser: 'Chrome',
            $browser_version: 92,
            $current_url: `http://localhost:8000${path}`,
            $device_id: 'random-device-id-in-an-uuidish-format',
            $device_type: 'Desktop',
            $geoip_city_name: faker.address.city(),
            $geoip_continent_code: 'OC',
            $geoip_continent_name: 'Oceania',
            $geoip_country_code: 'AU',
            $geoip_country_name: faker.address.country(),
            $geoip_latitude: -33.8591,
            $geoip_longitude: 151.2002,
            $geoip_postal_code: '2000',
            $geoip_subdivision_1_code: 'NSW',
            $geoip_subdivision_1_name: 'New South Wales',
            $geoip_time_zone: 'Australia/Sydney',
            $host: 'localhost:8000',
            $initial_referrer: `http://localhost:8000/${urls[rnd(urls.length)]}`,
            $initial_referring_domain: 'localhost:8000',
            $insert_id: '35waxaj8kcutva6l',
            $ip: '127.0.0.1',
            $lib: 'web',
            $lib_version: '1.13.9',
            $os: 'Mac OS X',
            $pathname: path,
            $plugins_deferred: [],
            $plugins_failed: [],
            $plugins_succeeded: ['GeoIP (1)'],
            $referrer: `http://localhost:8000/${urls[rnd(urls.length)]}`,
            $referring_domain: 'localhost:8000',
            $screen_height: 900,
            $screen_width: 1440,
            $time: 1631350054.975,
            $user_id: userData.username,
            $viewport_height: 796,
            $viewport_width: 789,
            distinct_id: userData.username,
            ee_available: true,
            email_service_available: false,
            is_clickhouse_enabled: true,
            is_demo_project: false,
            posthog_version: '1.27.0',
            realm: 'hosted-clickhouse',
        })
    }
}
