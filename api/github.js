export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    const { username } = req.query

    if (!username) {
        return res.status(400).json({ error: 'Username is required' })
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Portfolio-App'
            }
        })

        if (!response.ok) {
            if (response.status === 404) {
                return res.status(404).json({ error: 'GitHub user not found' })
            }
            throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        res.status(200).json(data)
    } catch (error) {
        console.error('GitHub Proxy Error:', error)
        res.status(500).json({ error: 'Failed to fetch data from GitHub', details: error.message })
    }
}
