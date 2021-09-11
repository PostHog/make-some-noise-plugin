![](https://github.com/PostHog/make-some-noise-plugin/raw/main/image.png)

# Make Some Noise 📣📣📣

This PostHog Plugin generates one or more random events per minute. Use it to have some data locally which you can query.

## Sample produced event

### Option 1

```json
{
    "id": "017bd42a-a55b-0000-fff1-90431e21f636",
    "timestamp": "2021-09-11T09:22:49.819000+00:00",
    "event": "user signup",
    "distinct_id": "Caesar98",
    "properties": {
        "$lib": "posthog-plugin-server",
        "$lib_version": "1.6.0",
        "$plugins_deferred": [],
        "$plugins_failed": [],
        "$plugins_succeeded": [
            "GeoIP (1)"
        ],
        "address": {
            "street": "Winifred Stream",
            "suite": "Suite 993",
            "city": "Ulicesshire",
            "zipcode": "30043-9511",
            "geo": {
                "lat": "73.3571",
                "lng": "-149.5801"
            }
        },
        "avatar": "https://cdn.fakercloud.com/avatars/missaaamy_128.jpg",
        "company": {
            "name": "Zulauf, Rolfson and Schaden",
            "catchPhrase": "Cross-group discrete core",
            "bs": "innovate robust infomediaries"
        },
        "distinct_id": "Caesar98",
        "dob": "1971-04-29T01:48:41.550Z",
        "email": "Caesar98.Kunde24@hotmail.com",
        "name": "Caesar",
        "phone": "(890) 860-5534 x2705",
        "username": "Caesar98",
        "website": "kieran.biz"
    },
    "elements_chain": ""
}
```

### Option 2

```json
{
    "id": "017bd42a-cd46-0000-1a7f-0677ed7f574e",
    "timestamp": "2021-09-11T09:23:00.037000+00:00",
    "event": "$pageview",
    "distinct_id": "Dean.Zulauf",
    "properties": {
        "$active_feature_flags": [],
        "$browser": "Chrome",
        "$browser_version": 92,
        "$current_url": "http://localhost:8000/",
        "$device_id": "random-device-id-in-an-uuidish-format",
        "$device_type": "Desktop",
        "$geoip_city_name": "Sydney",
        "$geoip_continent_code": "OC",
        "$geoip_continent_name": "Oceania",
        "$geoip_country_code": "AU",
        "$geoip_country_name": "Australia",
        "$geoip_latitude": -33.8591,
        "$geoip_longitude": 151.2002,
        "$geoip_postal_code": "2000",
        "$geoip_subdivision_1_code": "NSW",
        "$geoip_subdivision_1_name": "New South Wales",
        "$geoip_time_zone": "Australia/Sydney",
        "$host": "localhost:8000",
        "$initial_referrer": "http://localhost:8000/project/plugins",
        "$initial_referring_domain": "localhost:8000",
        "$insert_id": "35waxaj8kcutva6l",
        "$ip": "127.0.0.1",
        "$lib": "web",
        "$lib_version": "1.13.9",
        "$os": "Mac OS X",
        "$pathname": "/",
        "$plugins_deferred": [],
        "$plugins_failed": [],
        "$plugins_succeeded": [
            "GeoIP (1)"
        ],
        "$referrer": "http://localhost:8000/insights",
        "$referring_domain": "localhost:8000",
        "$screen_height": 900,
        "$screen_width": 1440,
        "$set": {
            "$geoip_city_name": "Sydney",
            "$geoip_country_name": "Australia",
            "$geoip_country_code": "AU",
            "$geoip_continent_name": "Oceania",
            "$geoip_continent_code": "OC",
            "$geoip_postal_code": "2000",
            "$geoip_latitude": -33.8591,
            "$geoip_longitude": 151.2002,
            "$geoip_time_zone": "Australia/Sydney",
            "$geoip_subdivision_1_code": "NSW",
            "$geoip_subdivision_1_name": "New South Wales"
        },
        "$set_once": {
            "$initial_geoip_city_name": "Sydney",
            "$initial_geoip_country_name": "Australia",
            "$initial_geoip_country_code": "AU",
            "$initial_geoip_continent_name": "Oceania",
            "$initial_geoip_continent_code": "OC",
            "$initial_geoip_postal_code": "2000",
            "$initial_geoip_latitude": -33.8591,
            "$initial_geoip_longitude": 151.2002,
            "$initial_geoip_time_zone": "Australia/Sydney",
            "$initial_geoip_subdivision_1_code": "NSW",
            "$initial_geoip_subdivision_1_name": "New South Wales",
            "$initial_browser": "Chrome",
            "$initial_browser_version": 92,
            "$initial_current_url": "http://localhost:8000/",
            "$initial_device_type": "Desktop",
            "$initial_os": "Mac OS X",
            "$initial_referrer": "http://localhost:8000/insights",
            "$initial_referring_domain": "localhost:8000"
        },
        "$time": 1631350054.975,
        "$user_id": "Dean.Zulauf",
        "$viewport_height": 796,
        "$viewport_width": 789,
        "distinct_id": "Dean.Zulauf",
        "ee_available": true,
        "email_service_available": false,
        "is_clickhouse_enabled": true,
        "is_demo_project": false,
        "posthog_version": "1.27.0",
        "realm": "hosted-clickhouse"
    },
    "elements_chain": ""
}
```
