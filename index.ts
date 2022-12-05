import Analytics from 'analytics-node'
import axios from 'axios'
const analytics = new Analytics('foo')
console.log(analytics)
axios.get('https://google.com')
analytics.identify({
    anonymousId: 'anonymousId',
    userId: 'customerId',
  })