const R = require('ramda')
const path = require('path')
const Settings = require('./lib/settings')

const defaultSettingsPath = path.join(process.env.PWD || process.cwd(), 'data/config.json');

const settings = (path = defaultSettingsPath) => new Settings(path)

module.exports = settings()
