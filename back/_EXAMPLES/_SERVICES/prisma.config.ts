// Modules
import 'dotenv/config'
import { defineConfig } from 'prisma/config'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../../docker/.env') })

export default defineConfig({
  schema: `prisma/schema.prisma`,
  migrations: {
    path: `prisma/migrations`,
  },
  datasource: {
    url: process.env[`DATABASE_URL`],
  },
})
