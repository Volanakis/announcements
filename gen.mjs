import { ANNOUNCEMENTS } from '/home/volanakis/dap-samou/src/data/content.js'
import fs from 'fs'
fs.writeFileSync(process.argv[2], JSON.stringify(ANNOUNCEMENTS, null, 2) + '\n')
